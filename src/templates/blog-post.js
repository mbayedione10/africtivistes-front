import React from "react"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import RecentPost from "../components/ListePost/ListePostSidebar"
import CallAction from "../components/callAction"
import ShareButtons from "../components/ShareButtons"
import ListePosts from "../components/ListePost/ListePost"
import Underline from "../components/Underline"
import { FormattedMessage } from "gatsby-plugin-react-intl"
import NewsletterForm from "../components/NewsletterForm";


export default function BlogPost({ data }) {
  const {title, date, content, featuredImage, categories, terms} = data.allWpPost.nodes[0]
  const image = featuredImage && getImage(featuredImage.node.localFile)
  const location = useLocation()
  const currentPath = location.href

    return (
        <Layout>
        <Seo title={title}/>
    <section id="blog-sidebar"  class="pt-10 pb-10">
          <div class="container mt-3">
            <div class="row">
                <div className="col-lg-8">
                    <div className="blog-details">
                        <div className="image">
                            <GatsbyImage image={image} alt={title}/>
                        </div>
                        <div className="content">
                            <h3 className="mt-25">{title}</h3>
                            <div className="d-flex align-items-center">
                                    
                      <div className="mr-auto">
                        {
                          categories.nodes.map(category=>(
                             <Link to={`/${category.slug}`} >
                              <button type="button"  class="btn btn-outline" style={{ color: '#a63117' }}>{category?.name}
                              </button>
                            </Link>

                          ))
                        }
                      </div>

                          <div className="date">
                            <i className="flaticon-calendar"></i> {date}
                          </div>  
                          </div>
                            <br></br>
                            <div dangerouslySetInnerHTML={{ __html: content }}></div>
                        </div> 
                  <div style={{ display: 'flex' }}>
                          {
                            terms.nodes.map(term =>(
                              <div className="mb-2"style={{ marginRight: '10px' }}>
                                <a style={{ color: '#a63117' }}>
                                  {term.name}
                                </a>
                              </div>
                            ))
                          }
                      </div>
                  {/* Intégration du composant SocialShare */}
                  <div>
                    <ShareButtons title={title} url={currentPath} tags={['AfricTivistes']}/>
                  </div>
                    </div> 
                </div>
                <div class="col-lg-4">
                    <div class="blog-sidebar ">
                        
                      <NewsletterForm />
                      <Underline />
                      <RecentPost/>
                           
                    </div> 
                </div>    
                </div>
                </div>
                <div>
                      <h3 className="text-center" ><FormattedMessage id='related' /></h3>
                </div>
                <Underline/>
                <div>
                      <ListePosts
                        posts={data.related.edges}
                        isBlogPostPage={true}
                      />
                </div>
          
                </section>
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
        slug
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
