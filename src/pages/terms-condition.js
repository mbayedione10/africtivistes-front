import React from 'react'
import { graphql } from "gatsby"
import TermesPage from './termes-conditions'

const TermsCondition = ({data}) => {
    return (
        <TermesPage data = {data}/>
    )
}

export default TermsCondition
export const query = graphql`
  query {
    allWpPage(filter: {slug: {eq: "terms"}, language: {code: {eq: EN}}}) {
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