import * as React from "react"
import { graphql } from "gatsby"
import CallAction from "../../components/callAction"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PageBanner from '../../components/pageBanner'
import BlogSidebar from '../../components/blog-sidebar'


const OurReleases = ({ data, pageContext}) => {
  const { title, translations} = data.allWpPage.nodes[0]
  const { numPages, currentPage } = pageContext
  const link = translations ? translations[0].link : ''

  return (<Layout translation={link}>
      <Seo title={title}/>
    <PageBanner title={title} />
    <BlogSidebar posts={data.allWpPost.edges} 
                categs={data.allWpCategory.edges} 
                tagues={data.allWpTag.edges} 
                // postsrelated={data.related.edges} 
                numPages={numPages} 
                currentPage={currentPage} />
    <CallAction contacts={data.contact.nodes}/>
    </Layout>)
}
export default OurReleases

export const query = graphql`
  query
  # ($limit: Int!, $skip: Int!)
   {
    
  allWpPage(filter: {slug: {eq: "our-releases"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  allWpPost(
    # limit: $limit
    # skip: $skip
    sort: {fields: date, order: DESC}
    filter: {language: {code: {eq: EN}}, categories: {nodes: {elemMatch: {slug: {eq: "releases"}}}}}
  ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "en")
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
  allWpCategory(filter: {language: {code: {eq: EN}}}) {
    edges {
      node {
        name
        count
      }
    }
  }
  allWpTag(filter: {language: {code: {eq: EN}}}) {
    edges {
      node {
        name
      }
    }
  }
  contact: allWpPage(filter: {slug: {eq: "contact-us"}}) {
    nodes {
      title
      content
      slug
      link
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 555,
                placeholder: DOMINANT_COLOR
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