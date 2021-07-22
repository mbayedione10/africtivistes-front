import React from 'react'
import { graphql } from "gatsby"

import AfrictivistesPage from '../africtivistes'

const Africtivistes = ({ data }) => (
    <AfrictivistesPage data={data} />
)

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "africtivistes-en"}}) {
    nodes {
      title
    }
  }
}
`

export default Africtivistes