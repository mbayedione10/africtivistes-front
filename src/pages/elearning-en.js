import React from 'react'
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import ElearningPage from './elearning'

const Elearning = ({ data }) => (
  <IntlContextConsumer>
    {({ language: currentLocale }) => 
        currentLocale === 'en' && <ElearningPage data={data} />
    }
  </IntlContextConsumer>
)

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "elearning-en"}}) {
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
                placeholder: DOMINANT_COLOR
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
  contact: allWpPage(filter: {slug: {eq: "contact-us"}}) {
    nodes {
      title
      content
      slug
      link
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 555,
                placeholder: DOMINANT_COLOR
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
}
`

export default Elearning