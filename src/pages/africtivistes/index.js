import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PageBanner from "../../components/pageBanner/inndex"
import About3 from "../../components/about/about3"
import Team from '../../components/team'
import Counter2 from '../../components/counter/counter2'
import Testimonial2 from '../../components/testimonial/testimonial2'
import CallAction2 from '../../components/callAction/callactions2'

const AfrictivistesPage = ({data}) => {
  const page = data.allWpPage.nodes[0]
  const link = page.translations ? page.translations[0].link : ''
  return (<Layout translation={link}>
      <Seo title="À propos de nous" />
      <PageBanner title={page.title} />
      <About3/>
      <Team/>
      <Counter2/>
      <Testimonial2/>
      <CallAction2/>
    </Layout>)
}
export default AfrictivistesPage

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "africtivistes"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
}
`