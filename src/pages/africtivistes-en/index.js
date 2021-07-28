import React from 'react'
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"

import AfrictivistesPage from '../africtivistes'

const Africtivistes = ({ data }) => (
  <IntlContextConsumer>
    {({ language: currentLocale }) =>
      currentLocale === 'en' && <AfrictivistesPage data={data} />
    }
  </IntlContextConsumer>
)

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "africtivistes-en"}}) {
    nodes {
      title
      content
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 555,
                placeholder: TRACED_SVG
              )
            }
          }
        }
      }
      translations {
        link
      }
    }
  }
  allWpTeam {
    nodes {
      title
      excerpt
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 89,
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
      social {
        facebook
        instagram
        linkedin
        twitter
      }
    }
  }
}
`

export default Africtivistes