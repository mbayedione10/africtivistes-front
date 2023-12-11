import React from 'react'
import { graphql } from "gatsby"
import NewsletterPage from './newsletter'

const NewsletterUs = ({data}) => {
    return (
        <NewsletterPage data = {data}/>
    )
}

export default NewsletterUs

export const query = graphql`
query {
    allWpPage(filter: {slug: {eq: "newsletter-en"}}) {
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