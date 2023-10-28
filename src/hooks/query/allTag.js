import { useStaticQuery, graphql } from "gatsby"

export const useAllTag = () => {
  const {allWpTag} = useStaticQuery(
    graphql`
    query allTag {
        allWpTag(filter: {language: {code: {eq: FR}}}) {
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