import React from 'react'
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"

import HistoryPage from '../africtivistes/histoire'

const History = ({ data }) => (
  <IntlContextConsumer>
    {({ language: currentLocale }) => 
        currentLocale === 'en' && <HistoryPage data={data} />
    }
  </IntlContextConsumer>
)

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "history"}}) {
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
}
`

export default History