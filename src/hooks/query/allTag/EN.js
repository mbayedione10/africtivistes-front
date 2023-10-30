import { useStaticQuery, graphql } from "gatsby"

export const useAllTagEN = () => {
  const {allWpTag} = useStaticQuery(
    graphql`
    query allTagEN {
        allWpTag(filter: {language: {code: {eq: EN}}}) {
            edges {
              node {
                id
                name
              }
            }
        }
      }
    `
  )
  return allWpTag.edges
}