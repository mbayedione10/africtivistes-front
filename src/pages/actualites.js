import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageBanner from '../components/pageBanner'
import BlogSidebar from '../components/blog-sidebar'


const ActualitesPage = ({data}) => {
  const { title, translations} = data.allWpPage.nodes[0]
  const link = translations ? translations[0].link : ''
  return (<Layout translation={link}>
      <Seo title="À propos de nous" />
      <PageBanner title={title} />
      <BlogSidebar posts={data.allWpPost.edges} />
       
    </Layout>)
}
export default ActualitesPage

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "actualites"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  allWpPost(
    limit: 6
    sort: {fields: date, order: DESC}
    filter: {language: {code: {eq: FR}}}
  ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        link
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 360,
                  height: 200,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            name
            count
          }
        }
      }
    }
  }
}
`