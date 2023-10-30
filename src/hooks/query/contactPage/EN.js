import { useStaticQuery, graphql } from "gatsby"

export const useContactPageEN = () => {
  const {wpPage} = useStaticQuery(
    graphql`
    query contactPageEN {
        wpPage(slug: {eq: "contact-us"}) {
              id
              title
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
        }}
    `
  )
  return wpPage
}