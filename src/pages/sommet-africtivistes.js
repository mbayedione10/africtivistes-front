import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FormattedMessage } from 'gatsby-plugin-react-intl'
import VideoAbidjan from "../components/abidjan2021"

const SommetAfrictivistesPage = ({data}) => {
  const { title, translations} = data.allWpPage.nodes[0]
  const link = translations ? translations.link : ''
  return (<Layout translation={link}>
      <Seo title="À propos de nous" />
      <section id="page-banner" className="bg_cover pt-200 pb-200" style={{ backgroundImage: `url(/images/sommet.png`}} data-overlay="6">
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