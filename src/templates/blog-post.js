import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import RecentPost from '../components/blog-sidebar/recent-post'
import CallAction from "../components/callAction"
import Projects from "../components/projects"


export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0];
  const categoryNames = post.categories.nodes.map(category => category.name);
  const tagNames = post.terms && post.terms.nodes ? post.terms.nodes.map(term => term.name) : [];
  const image = post.featuredImage && getImage(post.featuredImage.node.localFile)

    return (
        <Layout>
        <Seo title={post.title}/>
    <section id="blog-sidebar"  class="pt-10 pb-10">
        <div class="container">
            <div class="row">
                <div className="col-lg-8">
                    <div className="blog-details mt-50">
                        <div className="image">
                            <GatsbyImage image={image} alt={post.title}/>
                        </div>
                        <div className="content">
                            <h3 className="mt-25">{post.title}</h3>
                            <div className="date mt-10">
                                <ul>
                                    <li><a href="#"><i className="flaticon-calendar"></i>{post.date}</a></li>
                                </ul>
                            </div>
                            <br></br>
                            <div class="mb-15" dangerouslySetInnerHTML={{ __html: post.content }} ></div>
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
        <Projects posts={data.related.edges} categoryNames={categoryNames} tagNames={tagNames} />
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
`;

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        ...PostFields
      }
    }
    related:  allWpPost(
      filter: {
        slug: { ne: $slug } 
      }
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
