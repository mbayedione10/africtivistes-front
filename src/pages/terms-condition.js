import React from 'react'
import { graphql } from "gatsby"
import TermesPage from './termes-conditions'

const TermsCondition = ({data}) => {
    return (
        <TermesPage data = {data}/>
    )
}

export default TermsCondition
export const query = graphql`
  query {
    allWpPage(filter: {slug: {eq: "terms"}, language: {code: {eq: EN}}}) {
        nodes {
          title
          content
          link
          translations {
            link
          }
        }
      }
}
`