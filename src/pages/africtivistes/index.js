import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PageBanner from "../../components/pageBanner"
import About3 from "../../components/about/about3"
import Intervention from '../../components/intervention'
import Team from '../../components/team'
import Counter2 from '../../components/counter/counter2'
import Testimonial2 from '../../components/testimonial/testimonial2'
import CallAction2 from '../../components/callAction/callactions2'

const AfrictivistesPage = ({data}) => {
  const { title, content, translations, featuredImage} = data.allWpPage.nodes[0]
  const link = translations ? translations[0].link : ''
  return (<Layout translation={link}>
      <Seo title="À propos de nous" />
      <PageBanner title={title} />
      <About3 content={content} picture={featuredImage.node.localFile}/>
      <Intervention/>
      <Team teams={data.allWpTeam.nodes}/>
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
  allWpTeam {
    nodes {
      title
      excerpt
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 89,
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
      social {
        facebook
        instagram
        linkedin
        twitter
      }
    }
  }
}
`