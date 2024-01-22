import * as React from "react"
import { graphql } from "gatsby"
import {FormattedMessage } from "gatsby-plugin-react-intl"
import Layout from "../components/layout"
import Seo from "../components/seo"
import History from "../components/elearning"
import CallAction from "../components/callAction"

const ElearningPage = ({data}) => {
  const { title, translations} = data.allWpPage.nodes[0]
  const link = translations ? translations[0].link : ''
  return (<Layout translation={link}>
      <Seo title={title}/>
      <section id="page-banner" className="bg_cover pt-200 pb-150" style={{ backgroundImage: `url(/images/elearning.jpeg`}} data-overlay="6">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-content text-center">
                        <h2>{title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="/" aria-label="button"><FormattedMessage id="home" /></a></li>
                                <br></br>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                <br></br>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
      {/* <PageBanner title={title} /> */}
      <History/>
      <CallAction contacts={data.contact.nodes}/>

    </Layout>)
}
export default ElearningPage

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "elearning"}}) {
    nodes {
      title
      content
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