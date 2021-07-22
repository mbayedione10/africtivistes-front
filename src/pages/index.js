import * as React from "react"
import { Link, graphql } from "gatsby"
import { IntlContextConsumer, FormattedMessage, injectIntl} from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "../components/slider"

const IndexPage = ({data, intl}) => (
  <Layout>
    <Seo lang={intl.locale} title={intl.formatMessage({ id: "home" })} />
    <Slider/>
    <section id="blog-list" className="pt-80 pb-130">
      <div className="container">
        <h1><FormattedMessage id="actualites" /></h1>
        <IntlContextConsumer>
          {({ language: currentLocale }) => (
            data.allWpPost.nodes.map(node => (
              (node.language.slug === currentLocale) && 
              <div key={node.slug}>
                <Link to={node.slug}>
                  <p>{node.title}</p>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            ))
          )}
        </IntlContextConsumer>
      </div>
    </section>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allWpPost(sort: {fields: [date], order: DESC}, limit: 10) {
    nodes {
      title
      excerpt
      slug
      language {
        slug
      }
    }
   }
  }
`
export default injectIntl(IndexPage)
