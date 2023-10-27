import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
// import CallAction from "../components/callAction"
import DetailsPost from "../components/projects/details-post"

export default function DetailPost({ data}) {
  const { title} = data.allWpPost.nodes[0]
    return (
        <Layout>
        <Seo title={title}/>
        <DetailsPost project={data.allWpPost.nodes[0]} recents={[]} relateds={data.related.edges}/>
        {/* <CallAction contacts={data.contact.nodes}/> */}

        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        link
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 750,
                height: 750,
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
      related:  allWpPost(
        sort: {fields: date, order: DESC}
        filter: {          tags: {
          nodes: {
          elemMatch: {
            name: {eq: "Sahel Insight"}
          }
        }
        }, language: {code: {eq: FR}}}) {
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
                    gatsbyImageData(width: 360, height: 200, placeholder: DOMINANT_COLOR)
                  }
                }
                small: localFile {
                  childImageSharp {
                    gatsbyImageData(width: 70, height: 68, placeholder: DOMINANT_COLOR)
                  }
                }
              }
            }
          }
        }
      }
  }
`
