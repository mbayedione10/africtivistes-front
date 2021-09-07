import React from 'react'
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"

import AdhererPage from '../africtivistes/adherer'


const Join = ({ data }) => (
  
<IntlContextConsumer>
    {({ language: currentLocale }) => 
        currentLocale === 'en' && <AdhererPage data={data} />
    }
  </IntlContextConsumer>
  )

export default Join

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "join"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
}
`
