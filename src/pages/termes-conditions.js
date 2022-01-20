import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageBanner from '../components/pageBanner'

const TermesPage = ({data}) => {
  const link = data.allWpPage.nodes[0] ? data.allWpPage.nodes[0].link : ''
  return (<Layout translation={link}>
      <Seo title="À propos de nous" />
      <PageBanner title={data.allWpPage.nodes.title} />
    </Layout>)
}
export default TermesPage

export const query = graphql`
  query {
    allWpPage(filter: {slug: {eq: "termes"}, language: {code: {eq: FR}}}) {
      nodes {
        title
        content
        link
        translations {
          link
        }
      }
    }
}
`