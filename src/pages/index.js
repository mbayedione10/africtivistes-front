import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <section id="blog-list" className="pt-80 pb-130">
      <div className="container">
      <h1>Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map(node => (
        <div key={node.slug}>
          {/* highlight-start */}
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          {/* highlight-end */}
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      </div>
    </section>
  </Layout>
)
//highlight-start
export const pageQuery = graphql`
  query {
    allWpPost(sort: {fields: [date], order: DESC}) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`
//highlight-end
export default IndexPage
