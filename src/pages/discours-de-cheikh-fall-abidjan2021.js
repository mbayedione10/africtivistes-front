import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FormattedMessage } from 'gatsby-plugin-react-intl'

const DiscoursPage = ({data}) => {
    const { title,content,link} = data.allWpPage.nodes[0]
    // const link = translations ? translations[0].link : ''

  return (<Layout translation={link}>
       <Seo title="À propos de nous" />
       <section id="page-banner" className="bg_cover pt-150 pb-150" style={{ backgroundImage: `url(/images/cheikh.png`}} data-overlay="6">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-content text-center">
                        <h2>{title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="/" aria-label="button"><FormattedMessage id="home" /></a></li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="blog-sidebar" style={{backgroundColor: '#f5f5f5'}}>
        <div class="container">
            <div class="row">
                <div className="col-lg-6">
                    <div className="blog-details mt-50">
                        <div className="content" width="800" height="500">
                            <p   dangerouslySetInnerHTML={{ __html: content }} ></p>
                        </div> 
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="blog-details mt-50">
                        <div className="content">
                        <iframe width="700" height="800" src="https://www.youtube.com/embed/xzyRXi0sRSk?list=PLalgaepOVrI_wxO5BLGwkkknIpWvezZNj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <a><FormattedMessage id="abidjan2021"/></a>
  
                    </div> 
                </div>
                </div>
                </div>
                </div>
                </section>
       
    </Layout>)
}
export default DiscoursPage

export const query = graphql`
  query {
    allWpPage(
        filter: {slug: {eq: "discours-de-cheikh-fall-abidjan2021"}}
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