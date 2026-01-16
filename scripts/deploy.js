require('dotenv').config()

const {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectsCommand,
} = require('@aws-sdk/client-s3')
const { fromIni } = require('@aws-sdk/credential-providers')
const fs = require('fs-extra')
const path = require('path')
const mime = require('mime-types')

const BUCKET_NAME = process.env.AWS_S3_BUCKET
const REGION = process.env.AWS_REGION || 'us-east-1'
const AWS_PROFILE = process.env.AWS_PROFILE || 'personal'
const PUBLIC_DIR = path.join(__dirname, '../public')

if (!BUCKET_NAME) {
  console.error('❌ Error: AWS_S3_BUCKET environment variable is required')
  console.error('   Please set it in your .env file or environment')
  process.exit(1)
}

const s3Client = new S3Client({
  region: REGION,
  credentials: fromIni({ profile: AWS_PROFILE }),
})

// Get all files in a directory recursively
function getAllFiles(dir, baseDir = dir) {
  const files = []
  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath, baseDir))
    } else {
      const relativePath = path.relative(baseDir, fullPath)
      files.push({
        localPath: fullPath,
        s3Key: relativePath.replace(/\\/g, '/'), // Normalize Windows paths
      })
    }
  }

  return files
}

// Upload a single file to S3
async function uploadFile(file) {
  const contentType = mime.lookup(file.localPath) || 'application/octet-stream'
  const content = fs.readFileSync(file.localPath)

  // Set cache headers
  let cacheControl = 'public, max-age=31536000' // 1 year for assets
  if (file.s3Key.endsWith('.html')) {
    cacheControl = 'public, max-age=0, must-revalidate' // No cache for HTML
  }

  const command = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: file.s3Key,
    Body: content,
    ContentType: contentType,
    CacheControl: cacheControl,
  })

  await s3Client.send(command)
}

// Clear existing objects in S3 bucket
async function clearBucket() {
  console.log('🧹 Clearing existing files...')

  const listCommand = new ListObjectsV2Command({
    Bucket: BUCKET_NAME,
  })

  const response = await s3Client.send(listCommand)

  if (!response.Contents || response.Contents.length === 0) {
    return
  }

  const deleteCommand = new DeleteObjectsCommand({
    Bucket: BUCKET_NAME,
    Delete: {
      Objects: response.Contents.map((obj) => ({ Key: obj.Key })),
    },
  })

  await s3Client.send(deleteCommand)
}

// Main deploy function
async function deploy() {
  console.log('🚀 Deploying to S3...')
  console.log(`   Bucket: ${BUCKET_NAME}`)
  console.log(`   Region: ${REGION}`)
  console.log(`   Profile: ${AWS_PROFILE}`)

  const startTime = Date.now()

  // Check if public directory exists
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error('❌ Error: public directory does not exist')
    console.error('   Run "yarn build" first')
    process.exit(1)
  }

  // Clear existing files
  await clearBucket()

  // Get all files to upload
  const files = getAllFiles(PUBLIC_DIR)
  console.log(`📦 Uploading ${files.length} files...`)

  // Upload all files
  let uploaded = 0
  for (const file of files) {
    await uploadFile(file)
    uploaded++

    // Progress indicator
    if (uploaded % 10 === 0 || uploaded === files.length) {
      process.stdout.write(`\r   Progress: ${uploaded}/${files.length}`)
    }
  }

  console.log('') // New line after progress

  const elapsed = Date.now() - startTime
  console.log(`✅ Deploy complete in ${elapsed}ms`)
  console.log(
    `   URL: http://${BUCKET_NAME}.s3-website-${REGION}.amazonaws.com`
  )
}

deploy().catch((err) => {
  console.error('Deploy failed:', err)
  process.exit(1)
})
