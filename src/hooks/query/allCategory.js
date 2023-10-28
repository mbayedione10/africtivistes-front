import { useStaticQuery, graphql } from "gatsby"

export const useAllCategory = () => {
  const {allWpCategory} = useStaticQuery(
    graphql`
    query allCategory {
        allWpCategory(filter: {language: {code: {eq: FR}}, count: {ne: null}}) {
            edges {
              node {
                name
                count
              }
            }
        }
      }
    `
  )
  return allWpCategory.edges
}