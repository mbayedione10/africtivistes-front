import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import RecentPost from '../components/blog-sidebar/recent-post'
import CallAction from "../components/callAction"
import Projects from "../components/projects"

export default function BlogPost({ data}) {
  const { title,date, content, featuredImage} = data.allWpPost.nodes[0]
  const image = featuredImage && getImage(featuredImage.node.localFile)
    return (
        <Layout>
        <Seo title={title}/>
    <section id="blog-sidebar"  class="pt-10 pb-10">
        <div class="container">
            <div class="row">
                <div className="col-lg-8">
                    <div className="blog-details mt-50">
                        <div className="image">
                            <GatsbyImage image={image} alt={title}/>
                        </div>
                        <div className="content">
                            <h3 className="mt-25">{title}</h3>
                            <div className="date mt-10">
                                <ul>
                                    <li><a href="#"><i className="flaticon-calendar"></i>{date}</a></li>
                                </ul>
                            </div>
                            <br></br>
                            <div class="mb-15" dangerouslySetInnerHTML={{ __html: content }} ></div>
                        </div> 
                        
                    </div> 
                </div>
                <div class="col-lg-4">
                    <div class="blog-sidebar ">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 col-md-8">
                              <RecentPost/>
                            </div> 
                        </div> 
                    </div> 
                </div>    
                </div>
                </div>
                </section>
                <Projects posts={data.related.edges}/>
                <CallAction/>

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
        limit: 4
        sort: {fields: date, order: DESC}
        filter: {language: {code: {eq: FR}}}) {
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
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1000, height: 800, placeholder: DOMINANT_COLOR)
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
