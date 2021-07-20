import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const AfrictivistesPage = ({data}) => {
    const post = data.allWpPage.nodes[0]
    return (<Layout>
      <Seo title="À propos de nous" />
        <h1>{post.title}</h1>
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