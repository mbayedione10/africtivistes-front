import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PageBanner from "../../components/pageBanner"
import History from "../../components/history"

const HistoirePage = ({data}) => {
  const { title, translations} = data.allWpPage.nodes[0]
  const link = translations ? translations[0].link : ''
  return (<Layout translation={link}>
      <Seo title="À propos de nous" />
      <PageBanner title={title} />
      <History/>
    </Layout>)
}
export default HistoirePage

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "histoire"}}) {
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
}
`