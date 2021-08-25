import React from "react"
import { graphql } from "gatsby"
import { IntlContextConsumer, injectIntl } from "gatsby-plugin-react-intl"


import Layout from "../components/layout"
import Seo from "../components/seo"
import PageBanner from '../components/pageBanner'
import ProjectDetail from '../components/projects/details'
import ProjectPart from '../components/projects/part'
import Testimonial2 from '../components/testimonial/testimonial2'

const ProgrammeDetail = ({ data, pageContext, intl }) =>{
    const {title, translations} = data.allWpProgramme.nodes[0]
    const translation = translations.lenght && translations[0].link
    return (
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          currentLocale === pageContext.lang && <Layout translation={translation}>
            <Seo lang={intl.locale} title={title} />
            <PageBanner title={'Recent Projects'} />
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
                width: 555,
                height: 515,
                placeholder: TRACED_SVG
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
