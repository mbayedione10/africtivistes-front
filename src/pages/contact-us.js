import React from 'react'
import { graphql } from "gatsby"
import ContactPage from './nous-contacter'

const ContactUs = ({data}) => {
    return (
        <ContactPage data = {data}/>
    )
}

export default ContactUs

export const query = graphql`
query {
    allWpPage(filter: {slug: {eq: "contact-us"}}) {
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