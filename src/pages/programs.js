import * as React from "react"
import { graphql } from "gatsby"
import { IntlContextConsumer, injectIntl } from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"

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
        currentLocale === 'en' && <Layout translation={link}>
          <Seo lang={intl.locale} title={title} />
          <PageBanner title={title} />
          <ProjectsPage programmes={data.allWpProgrammeType.nodes} projects={data.allWpProgramme.nodes} />
          <Counter2 />
          <CallAction2 />
        </Layout>
    }
  </IntlContextConsumer>
  )}

export const pageQuery = graphql`
  query {
  allWpPage(filter: {slug: {eq: "programs"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  allWpProgrammeType {
    nodes {
      id
      name
      slug
    }
  }
  allWpProgramme(filter: {language: {code: {eq: EN}}}) {
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