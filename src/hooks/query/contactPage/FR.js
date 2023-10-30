import { useStaticQuery, graphql } from "gatsby"

export const useContactPageFR = () => {
  const {wpPage} = useStaticQuery(
    graphql`
    query contactPageFR {
        wpPage(slug: {eq: "nous-contacter"}) {
            id
            title
            slug
            link
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 555, placeholder: DOMINANT_COLOR)
                  }
                }
              }
            }
            translations {
              link
            }
          }
      }
    `
  )
  return wpPage
}