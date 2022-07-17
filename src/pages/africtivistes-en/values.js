import React from 'react'
import { graphql } from "gatsby"
import ValeursPage from '../africtivistes/valeurs'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"

const Values = ({ data }) => (
  <IntlContextConsumer>
    {({ language: currentLocale }) => 
        currentLocale === 'en' && <ValeursPage data={data} />
    }
  </IntlContextConsumer>
)
export default Values
export const query = graphql`
query {
  allWpPage(filter: {slug: {eq: "values"}, language: {code: {eq: EN}}}) {
      nodes {
        title
        translations {
          link
        }
      }
      edges {
        node {
          id
          date(locale: "")
          content
          link
          title
          featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 550,
                      height: 300,
                      placeholder: DOMINANT_COLOR
                    )
                  }
                }
              }
        }
      }
      }
  }
  contact: allWpPage(filter: {slug: {eq: "nous-contacter"}}) {
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