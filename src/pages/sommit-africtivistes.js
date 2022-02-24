import React from 'react'
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import SommetAfrictivistesPage from './sommet-africtivistes'

const SommitAfrictivistesPage = ({ data }) => (
  <IntlContextConsumer>
    {({ language: currentLocale }) => 
        currentLocale === 'en' && <SommetAfrictivistesPage data={data} />
    }
  </IntlContextConsumer>
)

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "sommit-africtivistes"}}) {
    nodes {
      title
      link
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
}
`

export default SommitAfrictivistesPage