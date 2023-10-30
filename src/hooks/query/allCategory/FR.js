import { useStaticQuery, graphql } from "gatsby"

export const useAllCategoryFR = () => {
  const {allWpCategory} = useStaticQuery(
    graphql`
    query allCategoryFR {
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