import { useStaticQuery, graphql } from "gatsby"

export const useContactPage = () => {
  const {wpPage} = useStaticQuery(
    graphql`
    query contactPage {
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