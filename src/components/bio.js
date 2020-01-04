/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

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
        marginBottom: rhythm(2.5),
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
        <p style={{ margin: '0' }}>
          <span role="img" aria-label="waving hand">
            👋
          </span>{' '}
          I'm <strong>{author}!</strong>
          <div
            style={{
              fontSize: '1em',
              color: 'black',
            }}
          >
            And here are some...
          </div>
        </p>
      ) : (
        <p style={{ margin: '0' }}>
          Thanks for reading!
          <br />— <strong>{author}</strong>
        </p>
      )}
    </div>
  )
}

export default Bio
