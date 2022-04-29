import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PageBanner from '../../components/pageBanner'
import CallAction from "../../components/callAction"

const PhotoPage = ({data}) => {
    const {title, translations} = data.allWpPage.nodes[0]
    const link = translations ? translations[0].link : ''
    return (<Layout translation={link}>
        <Seo title={title} />
        <PageBanner title={title} />
        {/* <NosChampions posts={data.allWpPost.edges} /> */}
        <CallAction contacts={data.contact.nodes}/>
      </Layout>
    )
}
export default PhotoPage
export const query = graphql`
query {
  allWpPage(filter: {slug: {eq: "albums-photos"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  allWpPost(
    sort: {fields: date, order: DESC}
    filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "albums-photos"}}}}}
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