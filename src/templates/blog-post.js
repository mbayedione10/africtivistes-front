import React from "react"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import RecentPost from '../components/blog-sidebar/recent-post'
import CallAction from "../components/callAction"
import Projects from "../components/projects"
import ShareButtons from "../components/ShareButtons"
import parse from "html-react-parser"


export default function BlogPost({ data }) {
  const {title, date, content, featuredImage} = data.allWpPost.nodes[0]
  const image = featuredImage && getImage(featuredImage.node.localFile)
  const location = useLocation()
  const currentPath = location.href

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
                                <i className="flaticon-calendar"></i> {date}
                            </div>
                            <br></br>
                        <div 
                            dangerouslySetInnerHTML={{ __html: content }}
                        ></div>
                        </div> 
                  {/* Intégration du composant SocialShare */}
                  <div>
                    <ShareButtons title={title} url={currentPath} tags={['AfricTivistes']}/>
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
        <Projects posts={data.related.edges} />
                <CallAction/>

        </Layout>
    )
}


// Fragment pour les données communes entre les deux requêtes
export const postFields = graphql`
  fragment PostFields on WpPost {
    title
    content
    link
    excerpt
    categories {
      nodes {
        name
      }
    }
    terms {
        nodes {
          name
        }
      }
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
`

export const query = graphql`
  query($slug: String!, $categories: [String]!, $tags: [String]!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        ...PostFields
      }
    }
    related:  allWpPost(
      filter: {
        slug: { ne: $slug },
        categories: {nodes: {elemMatch: {name: {in: $categories}}}},
        tags: { nodes: { elemMatch: { name: { in: $tags } } } } 
      }
      limit: 4
      sort: {fields: date, order: DESC}
    ) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`
