import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageBanner from '../components/pageBanner'
import BlogSidebar from '../components/blog-sidebar'


const ActualitesPage = ({ data, pageContext}) => {
  const { title, translations} = data.allWpPage.nodes[0]
  const { numPages, currentPage } = pageContext
  const link = translations ? translations[0].link : ''

  return (<Layout translation={link}>
      <Seo title="À propos de nous" />
      <PageBanner title={title} />
    <BlogSidebar posts={data.allWpPost.edges} numPages={numPages} currentPage={currentPage} />
       
    </Layout>)
}
export default ActualitesPage

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    
  allWpPage(filter: {slug: {eq: "actualites"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  allWpPost(
    limit: $limit
    skip: $skip
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
            big: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 360,
                  height: 200,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            small: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 70,
                  height: 68,
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