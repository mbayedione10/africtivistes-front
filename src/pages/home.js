import React from 'react'
import { graphql } from "gatsby"

import IndexPage from './index'

const Home = ({data}) => (
  <IndexPage data={data}/>
)

export const pageQuery = graphql`
  query {
    allWpPost(
      sort: {fields: [date], order: DESC},
       limit: 3
       filter: {language: {code: {eq: EN}}}

       ) {
        edges {
          node {
            id
            title
            date(formatString: "DD MMMM, YYYY", locale: "fr")
            excerpt
            slug
            language {
              slug
            }
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
            categories {
              nodes {
                name
                count
              }
            }
          }
        }
    nodes {
      slug
      language {
        slug
      }
    }
   }
}
`

export default Home