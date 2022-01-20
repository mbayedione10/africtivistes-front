import React from 'react'
import { graphql } from "gatsby"
import PolitiquePage from './politique-confidentialite'

const PrivacyPolicy = ({data}) => {
    return (
        <PolitiquePage data = {data}/>
    )
}

export default PrivacyPolicy
export const query = graphql`
  query {
    allWpPage(filter: {slug: {eq: "policy"}, language: {code: {eq: EN}}}) {
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