import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import VideoAbidjan from "../components/abidjan2021"

const SommetAfrictivistesPage = ({data}) => {
  const { translations } = data.allWpPage.nodes[0]
  const link = translations ? translations.link : ''
  return (<Layout translation={link}>
      <Seo title={data.allWpPage.nodes.title} />
      <section id="page-banner" className="bg_cover pt-30 pb-30" style={{ backgroundImage: `url(/images/sommet.png`}} data-overlay="6">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-content text-center">
                    <h2></h2>
                        <h2></h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li><a href="/"></a></li>
                                <li><a href="/"></a></li>
                                <li><a href="/"></a></li>

                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li><a href="/"></a></li>
                                <li><a href="/"></a></li>
                                <li><a href="/"></a></li>

                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li><a href="/"></a></li>
                                <li><a href="/"></a></li>
                                <li><a href="/"></a></li>

                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <VideoAbidjan/>
    </Layout>)
}
export default SommetAfrictivistesPage

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "sommet-africtivistes"}}) {
    nodes {
      title
      link
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
}
`