import { useStaticQuery, graphql } from "gatsby"

export const useRenctPostsFR = () => {
  const {allWpPost} = useStaticQuery(
    graphql`
    query recentPostFR {
        allWpPost(
          limit: 15
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
                      gatsbyImageData(width: 750, height: 360, placeholder: DOMINANT_COLOR)
                    }
                  }
                  small: localFile {
                    childImageSharp {
                      gatsbyImageData(width: 70, height: 68, placeholder: DOMINANT_COLOR)
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return allWpPost.edges
}