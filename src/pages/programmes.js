import * as React from "react"
import { graphql } from "gatsby"
import { IntlContextConsumer, injectIntl } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { FormattedMessage } from 'gatsby-plugin-react-intl'

import PageBanner from '../components/pageBanner'
import ProjectsPage from '../components/projects/page'
import Counter2 from '../components/counter/counter2'
import CallAction2 from '../components/callAction/callactions2'


const ProgrammesPage = ({ data, intl }) => {
  const { title, translations } = data.allWpPage.nodes[0]
  const link = translations ? translations[0].link : ''
  return (
    <IntlContextConsumer>
    {({ language: currentLocale }) =>
      currentLocale === 'fr' && <Layout translation={link}>
      <Seo lang={intl.locale} title={title} />
      {/* <PageBanner title={title} /> */}
      <section id="page-banner" className="bg_cover pt-200 pb-200" style={{ backgroundImage: `url(/images/titre.png`}} data-overlay="6">
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
      <ProjectsPage programmes={data.allWpProgrammeType.nodes} projects={data.allWpProgramme.nodes} />
      <Counter2/>
      <CallAction2/>
    </Layout>
    }
    </IntlContextConsumer>
  )}

export const pageQuery = graphql`
  query {
  allWpPage(filter: {slug: {eq: "programmes"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  allWpProgrammeType(
    filter: {language: {code: {eq: FR}}}

  ) {
    nodes {
      id
      name
      slug
    }
  }
  allWpProgramme(filter: {language: {code: {eq: FR}}}) {
    nodes {
      id
      title
      link
      programmeTypes {
        nodes {
          slug
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 360,
                height: 250,
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
export default injectIntl(ProgrammesPage)