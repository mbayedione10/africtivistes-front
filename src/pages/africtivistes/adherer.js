import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PageBanner from '../../components/pageBanner'
import Adherer from '../../components/adherer'

const AdhererPage = ({data}) => {
    const { title, translations} = data.allWpPage.nodes[0]
    const link = translations ? translations[0].link : ''
    return (<Layout translation={link}>
        <Seo title="Comment adhérer AfricTivistes ?" />
        <PageBanner title={title} />
        
        <Adherer/>
         
      </Layout>
    )
}

export default AdhererPage

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "adherer-africtivistes"}}) {
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