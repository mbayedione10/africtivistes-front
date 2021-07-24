import * as React from "react"
import { Link, graphql } from "gatsby"
import { IntlContextConsumer, FormattedMessage, injectIntl} from "gatsby-plugin-react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "../components/slider"
import Partner from '../components/partner'
import Services from "../components/services"
import About from "../components/about"
import About2 from '../components/about/about2'
import Projects from "../components/projects"
import LatestNews from '../components/latestNews'
import CallAction from '../components/callAction'
import Counter from '../components/counter'
import Features from '../components/features'
import Testimonial from '../components/testimonial'

const IndexPage = ({data, intl}) => (
  <Layout>
    <Seo lang={intl.locale} title={intl.formatMessage({ id: "home" })} />
    <Slider/>
    <Features/>
    <About2/>
    <Services/>
    <About/>
    <LatestNews/>
    <Counter/>
    <Projects/>
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
    <Testimonial/>
    <Partner/>
    <CallAction/>
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
