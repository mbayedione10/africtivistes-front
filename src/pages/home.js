import React from 'react'
import { graphql } from "gatsby"

import IndexPage from './index'

const Home = ({data}) => (
  <IndexPage data={data}/>
)

export const pageQuery = graphql`
query {
  allWpPage(filter: {slug: {eq: "/"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  allWpProgrammeType (
    filter: {language: {code: {eq: EN}}}
  ) {
    nodes {
      id
      name
      slug
    }
  }
  allWpProgramme(
    filter: {language: {code: {eq: EN}}}
    sort: {fields: date, order: DESC}
    ) {
    nodes {
      id
      title
      link
      date(formatString: "DD MMMM, YYYY", locale: "en")
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
              gatsbyImageData(
                width: 360, 
                height: 250, 
                placeholder: DOMINANT_COLOR)
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
    date(formatString: "DD MMMM, YYYY", locale: "en")
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
            gatsbyImageData(
              width: 360, 
              height: 250, 
              placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
    slug
    content
  }
}

latestnews: allWpPost(
  limit: 15
  sort: {fields: [date], order: DESC}
   filter: {language: {code: {eq: EN}}}

   ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "en")
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
      date(formatString: "DD MMMM, YYYY", locale: "en")
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
                width: 1920,
                height: 860,
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
slider: allWpPost(
    sort: {fields: [date], order: DESC},
     limit: 3
     filter: {language: {code: {eq: EN}}}

     ) {
      edges {
        node {
          id
          title
          date(formatString: "DD MMMM, YYYY", locale: "en")
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
                    width: 1920,
                    height: 800,
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
 contact: allWpPage(filter: {slug: {eq: "nous-contacter"}}) {
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

export default Home