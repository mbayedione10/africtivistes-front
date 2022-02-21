import React from "react"
import { graphql } from "gatsby"
import { IntlContextConsumer, injectIntl } from "gatsby-plugin-react-intl"
import { FormattedMessage } from 'gatsby-plugin-react-intl'
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectDetail from '../components/projects/details'
import ProjectPart from '../components/projects/part'
import Testimonial2 from '../components/testimonial/testimonial2'

const ProgrammeDetail = ({ data, pageContext, intl }) =>{
    const {title, translations,featuredImage} = data.allWpProgramme.nodes[0]
    const translation = translations.lenght && translations[0].link
    const image = featuredImage && featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src

    return (
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          currentLocale === pageContext.lang && <Layout translation={translation}>
            <Seo lang={intl.locale} title={title} />
            {/* <PageBanner title={'Recent Projects'} /> */}
            <section id="page-banner" className="bg_cover pt-150 pb-150" style={{ backgroundImage: `url(${image})`}} data-overlay="6">
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
            <ProjectDetail project={data.allWpProgramme.nodes[0]} />
            <ProjectPart/>
            <Testimonial2/>
        </Layout>
        }
      </IntlContextConsumer>
    )
}

export default injectIntl(ProgrammeDetail)

export const query = graphql`
  query($slug: String!) {
    allWpProgramme(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
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
