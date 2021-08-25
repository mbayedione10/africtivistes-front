import React from 'react'
import { graphql } from "gatsby"
import ActualitesPage from './actualites'

const News = ({data}) => {
    return (
        <ActualitesPage data = {data}/>
    )
}

export default News

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "news"}}) {
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
}
`