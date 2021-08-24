import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageBanner from '../components/pageBanner'
import BlogSidebar from '../components/blog-sidebar'


const ContactPage = ({data}) => {
  const { title, translations} = data.allWpPage.nodes[0]
  const link = translations ? translations[0].link : ''
  return (<Layout translation={link}>
      <Seo title="À propos de nous" />
      <PageBanner title={title} />
      <BlogSidebar/>
     
    
    </Layout>)
}
export default ContactPage

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "actualites"}}) {
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
}
`