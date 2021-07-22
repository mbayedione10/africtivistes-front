import React from 'react'
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"

import AfrictivistesPage from '../africtivistes'

const Africtivistes = ({ data }) => (
  <IntlContextConsumer>
    {({ language: currentLocale }) =>
      currentLocale === 'en' && <AfrictivistesPage data={data} />
    }
  </IntlContextConsumer>
)

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "africtivistes-en"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
}
`

export default Africtivistes