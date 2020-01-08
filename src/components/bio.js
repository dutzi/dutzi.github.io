/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Signature from './signature'
import { rhythm } from '../utils/typography'

const Bio = ({ greeting }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1.5),
        alignItems: 'center',
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      {greeting ? (
        <div>
          <p style={{ margin: '0' }}>
            <span role="img" aria-label="waving hand">
              👋
            </span>{' '}
            I'm <strong>{author}!</strong>
          </p>
          <p style={{ margin: '0', fontSize: '1em' }}>And here are some...</p>
        </div>
      ) : (
        <p style={{ margin: '0' }}>
          Thanks for reading!
          <Signature />
          {/* <br />— <strong>{author}</strong> */}
        </p>
      )}
    </div>
  )
}

export default Bio
