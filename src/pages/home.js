import React from 'react'
import { graphql } from "gatsby"

import IndexPage from './index'

const Home = ({data}) => (
  <IndexPage data={data}/>
)

export const pageQuery = graphql`
  query {
    allWpPost(sort: {fields: [date], order: DESC}, limit: 10) {
    nodes {
      title
      excerpt
      slug
      language {
        slug
      }
    }
   }
  }
`

export default Home