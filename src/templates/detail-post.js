import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import ProjectDetail from "../components/projects/details"
import CallAction from "../components/callAction"

export default function DetailPost({ data}) {
  const { title,date, content, featuredImage} = data.allWpPost.nodes[0]
  const image = featuredImage && getImage(featuredImage.node.localFile)
    return (
        <Layout>
        <Seo title={title}/>
        {/* <PageBanner title= {title} date={date}/> */}
        <ProjectDetail project={data.allWpPost.nodes[0]} />
        <CallAction contacts={data.contact.nodes}/>
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
                placeholder: DOMINANT_COLOR
                height: 500
                width: 500
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
    recent: allWpPost(
        limit: 10
        sort: {fields: date, order: DESC}
        filter: {language: {code: {eq: FR}}}
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
                      width: 360,
                      height: 200,
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
