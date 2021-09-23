import React from 'react'
import { graphql } from "gatsby"

import IndexPage from './index'

const Home = ({data}) => (
  <IndexPage data={data}/>
)

export const pageQuery = graphql`
query {
  allWpPage(filter: {slug: {eq: "home"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  
  allWpCategory(sort: {fields: count, order: DESC}, limit: 35
    filter: {language: {code: {eq: EN}}}) {
    edges {
      node {
        id
        name
        count
        slug
      }
    }
  }
  allWpProgrammeType {
    nodes {
      id
      name
      slug
    }
  }
  allWpProgramme(
    filter: {language: {code: {eq: EN}}}
    limit: 3
    sort: {fields: date, order: DESC}
    ) {
    nodes {
      id
      title
      link
      programmeTypes {
        nodes {
          slug
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 360, height: 250, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
      slug
      content
    }
  }
  programmeencours: allWpProgramme(
    filter: {language: {code: {eq: EN}}}
    limit: 3
    sort: {fields: date, order: DESC}
    ) {
    nodes {
      id
      title
      link
      programmeTypes {
        nodes {
          slug
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(width: 360, height: 250, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
      slug
      content
    }
  }

latestnews: allWpPost(
  limit: 9
  sort: {fields: [date], order: DESC},
   filter: {language: {code: {eq: EN}}}

   ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        slug
        language {
          slug
        }
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
nodes {

  slug
  language {
    slug
  }
}
}
  allWpPost(
    sort: {fields: [date], order: DESC},
     limit: 3
     filter: {language: {code: {eq: EN}}}

     ) {
      edges {
        node {
          id
          title
          date(formatString: "DD MMMM, YYYY", locale: "fr")
          excerpt
          slug
          language {
            slug
          }
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
  nodes {

    slug
    language {
      slug
    }
  }
 }
}
`

export default Home