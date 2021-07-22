import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PageBanner from "../../components/pageBanner/inndex"

const AfrictivistesPage = ({data}) => {
    const page = data.allWpPage.nodes[0]
    return (<Layout>
      <Seo title="À propos de nous" />
      <PageBanner title={page.title} />
    </Layout>)
}
export default AfrictivistesPage

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "africtivistes"}}) {
    nodes {
      title
    }
  }
}
`