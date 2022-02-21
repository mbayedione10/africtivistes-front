import React from 'react'
import { graphql } from "gatsby"
import DiscoursPage from './discours-de-cheikh-fall-abidjan2021'

const SpeechPage = ({data}) => {
    return (
        <DiscoursPage data = {data}/>
    )
}

export default SpeechPage
export const query = graphql`
  query {
    allWpPage(
        filter: {slug: {eq: "speech-by-cheikh-fall-abidjan2021"}, language: {code: {eq: EN}} }
      ) {
        nodes {
          title
          link
          date
          content
          translations {
            link
          }
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
`