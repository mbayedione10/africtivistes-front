import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PageBanner from "../../components/pageBanner"
import Values from "../../components/values"


const ValeursPage = ({data}) => {
  const { title, translations} = data.allWpPage.nodes[0]
  const link = translations ? translations[0].link : ''
  return (<Layout translation={link}>
      <Seo title="À propos de nous" />
      <PageBanner title={title} />
      <Values posts={data.allWpPage.edges}/>
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
}
`