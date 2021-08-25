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
      translations {
        link
      }
    }
  }
  allWpPost(
    limit: 6
    sort: {fields: date, order: DESC}
    filter: {language: {code: {eq: EN}}}
  ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        link
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 360,
                  height: 200,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
      }
    }
  }
}
`