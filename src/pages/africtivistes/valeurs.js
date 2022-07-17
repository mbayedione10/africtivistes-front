import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Values from "../../components/values"
import CallAction from "../../components/callAction"

const ValeursPage = ({data}) => {
  const {translations} = data.allWpPage.nodes[0]
  const link = translations ? translations[0].link : ''
  return (<Layout translation={link}>
      <Seo title={data.allWpPage.nodes.title}/>
      {/* <PageBanner title={title} /> */}
      <section id="page-banner" className="bg_cover pt-200 pb-200" style={{ backgroundImage: `url(/images/nosvaleurs.png`}} data-overlay="6">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-content text-center">
                        <nav aria-label="breadcrumb">
                            
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <Values posts={data.allWpPage.edges}/>
      <CallAction contacts={data.contact.nodes}/>

    </Layout>)
}
export default ValeursPage

export const query = graphql`
  query {
    allWpPage(filter: {slug: {eq: "valeurs"}, language: {code: {eq: FR}}}) {
        nodes {
          title
          translations {
            link
          }
        }
        edges {
          node {
            id
            date(locale: "")
            content
            link
            title
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