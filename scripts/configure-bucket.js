require('dotenv').config()

const {
  S3Client,
  PutBucketWebsiteCommand,
  PutBucketPolicyCommand,
  PutPublicAccessBlockCommand,
  GetBucketWebsiteCommand,
} = require('@aws-sdk/client-s3')
const { fromIni } = require('@aws-sdk/credential-providers')

const BUCKET_NAME = process.env.AWS_S3_BUCKET
const REGION = process.env.AWS_REGION || 'us-east-1'
const AWS_PROFILE = process.env.AWS_PROFILE || 'personal'

if (!BUCKET_NAME) {
  console.error('❌ Error: AWS_S3_BUCKET environment variable is required')
  console.error('   Please set it in your .env file or environment')
  process.exit(1)
}

const s3Client = new S3Client({
  region: REGION,
  credentials: fromIni({ profile: AWS_PROFILE }),
})

async function configureBucket() {
  console.log('🔧 Configuring S3 bucket for static website hosting...')
  console.log(`   Bucket: ${BUCKET_NAME}`)
  console.log(`   Region: ${REGION}`)
  console.log(`   Profile: ${AWS_PROFILE}`)
  console.log('')

  // Step 1: Disable Block Public Access
  console.log('1️⃣  Disabling Block Public Access...')
  try {
    await s3Client.send(
      new PutPublicAccessBlockCommand({
        Bucket: BUCKET_NAME,
        PublicAccessBlockConfiguration: {
          BlockPublicAcls: false,
          IgnorePublicAcls: false,
          BlockPublicPolicy: false,
          RestrictPublicBuckets: false,
        },
      })
    )
    console.log('   ✓ Block Public Access disabled')
  } catch (err) {
    console.error('   ✗ Failed to disable Block Public Access:', err.message)
    throw err
  }

  // Step 2: Set bucket policy for public read access
  console.log('2️⃣  Setting bucket policy for public read access...')
  const bucketPolicy = {
    Version: '2012-10-17',
    Statement: [
      {
        Sid: 'PublicReadGetObject',
        Effect: 'Allow',
        Principal: '*',
        Action: 's3:GetObject',
        Resource: `arn:aws:s3:::${BUCKET_NAME}/*`,
      },
    ],
  }

  try {
    await s3Client.send(
      new PutBucketPolicyCommand({
        Bucket: BUCKET_NAME,
        Policy: JSON.stringify(bucketPolicy),
      })
    )
    console.log('   ✓ Bucket policy set')
  } catch (err) {
    console.error('   ✗ Failed to set bucket policy:', err.message)
    throw err
  }

  // Step 3: Enable static website hosting
  console.log('3️⃣  Enabling static website hosting...')
  try {
    await s3Client.send(
      new PutBucketWebsiteCommand({
        Bucket: BUCKET_NAME,
        WebsiteConfiguration: {
          IndexDocument: {
            Suffix: 'index.html',
          },
          ErrorDocument: {
            Key: '404.html',
          },
        },
      })
    )
    console.log('   ✓ Static website hosting enabled')
  } catch (err) {
    console.error('   ✗ Failed to enable static website hosting:', err.message)
    throw err
  }

  // Verify configuration
  console.log('')
  console.log('✅ Bucket configured successfully!')
  console.log('')
  console.log('   Website URL:')
  console.log(`   http://${BUCKET_NAME}.s3-website-${REGION}.amazonaws.com`)
  console.log('')
  console.log('   Next steps:')
  console.log('   1. Run "yarn deploy" to upload your site')
  console.log('   2. Visit the URL above to see your site')
}

configureBucket().catch((err) => {
  console.error('')
  console.error('Configuration failed:', err.message)
  process.exit(1)
})
