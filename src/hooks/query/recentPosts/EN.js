import { useStaticQuery, graphql } from "gatsby"

export const useRenctPostsEN = () => {
  const {allWpPost} = useStaticQuery(
    graphql`
    query recentPostEN {
        allWpPost(
          limit: 15
          sort: {fields: date, order: DESC}
          filter: {language: {code: {eq: EN}}}
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