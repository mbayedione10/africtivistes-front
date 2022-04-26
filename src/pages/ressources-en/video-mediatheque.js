import React from 'react'
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import VideoPage from '../ressources/videotheque-mediatheque'

const VideoMediatheque = ({ data }) => (

<IntlContextConsumer>
    {({ language: currentLocale }) => 
        currentLocale === 'en' && <VideoPage data={data} />
    }
</IntlContextConsumer>
)

export default VideoMediatheque

export const query = graphql`
query {

  allWpPage(filter: {slug: {eq: "video-mediatheque"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  allWpPost(
    sort: {fields: date, order: DESC}
    filter: {language: {code: {eq: EN}}, categories: {nodes: {elemMatch: {slug: {eq: "video-mediatheque"}}}}}
  ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "en")
        excerpt
        link
        featuredImage {
          node {
            altText
            big: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 550,
                  height: 300,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            small: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 70,
                  height: 68,
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