import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const EquipePage = ({data}) => {
const post = data.allWpPage.nodes[0]
const link = post.translations ? post.translations[0].link : ''
return(<Layout translation={link}>
  <Seo title="L'équipe" />
    <h1>{post.title}</h1>
  </Layout>
)}
export default EquipePage
export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "equipe"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
}
`