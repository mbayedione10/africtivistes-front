import { useStaticQuery, graphql } from "gatsby"

export const useAllTagFR = () => {
  const {allWpTag} = useStaticQuery(
    graphql`
    query allTagFR {
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