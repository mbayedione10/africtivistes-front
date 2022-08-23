import React from 'react'
import { graphql } from "gatsby"
import PolitiquePage from './politique-confidentialite'

const PrivacyPolicy = ({data}) => {
    return (
        <PolitiquePage data = {data}/>
    )
}

export default PrivacyPolicy
export const query = graphql`
  query {
    allWpPage(filter: {slug: {eq: "privacy"}, language: {code: {eq: EN}}}) {
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