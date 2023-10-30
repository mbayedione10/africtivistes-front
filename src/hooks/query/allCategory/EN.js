import { useStaticQuery, graphql } from "gatsby"

export const useAllCategoryEN = () => {
  const {allWpCategory} = useStaticQuery(
    graphql`
    query allCategoryEN {
        allWpCategory(filter: {language: {code: {eq: EN}}, count: {ne: null}}) {
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