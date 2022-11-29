import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import ProjectDetail from "../components/projects/details"
import ProjectPart from '../components/projects/part'
import Projects from "../components/projects"
import RecentPost from '../components/blog-sidebar/recent-post'
import RelatedPost from '../components/blog-sidebar/related'
import CallAction from "../components/callAction"

export default function DetailPost({ data}) {
  const { title,date, content, featuredImage} = data.allWpPost.nodes[0]
  const image = featuredImage && getImage(featuredImage.node.localFile)
    return (
        <Layout>
        <Seo title={title}/>
        {/* <PageBanner title= {title} date={date}/> */}
    <section id="project-details"  class="pt-10 pb-10">
        <div class="container">
            <div class="row">
                <div className="col-lg-8">
                    <div className="project-details mt-50">
                        <div className="project-details-image">
                            <GatsbyImage image={image} alt={title}/>
                        </div>
                        <div className="project-details-content">
                            <h3 className="mt-25">{title}</h3>
                            <div className="project-details-date mt-10">
                                <ul>
                                    <li><a href="#"><i className="flaticon-calendar"></i>{date}</a></li>
                                    {/* <li><a href="#"><i className="flaticon-heart"></i> 50 Likes</a></li> */}
                                    {/* <li><a href="#"><i className="flaticon-comment"></i> 25 Comments</a></li> */}
                                    {/* <li><a href="#"><i className="flaticon-folder"></i> Finance</a></li> */}
                                </ul>
                            </div>
                            <br></br>
                            <p class="mb-15" dangerouslySetInnerHTML={{ __html: content }} ></p>
                        </div> 
                        
                    </div> 
                </div>
                <div class="col-lg-4">
                    <div class="blog-sidebar ">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 col-md-8">
                            <RecentPost posts={data.recent.edges}/>
                            <RelatedPost posts={data.related.edges}/>
                            </div> 
                        </div> 
                    </div> 
                </div>
                </div>
                </div>
                </section>
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
    recent: allWpPost(
        limit: 15
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
                      width: 750,
                      height: 360,
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
