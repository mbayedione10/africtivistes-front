import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FormattedMessage } from 'gatsby-plugin-react-intl'

const DiscoursPage = ({data}) => {
    const { title,content,link} = data.allWpPage.nodes[0]
    // const link = translations ? translations[0].link : ''

  return (<Layout translation={link}>
      <Seo title={data.allWpPage.nodes.title} />
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
    <section id="company-about" className="pt-50 pb-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="company-about-cont pt-45" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          <div className="col-lg-6 pt-50">
            <div className="company-about-image">
           <iframe width="700" height="500" src="https://www.youtube.com/embed/0SIEc3CWrh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="years-experience mt-45">
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