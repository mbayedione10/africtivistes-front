import React from 'react'
import { graphql } from "gatsby"
import { IntlContextConsumer } from "gatsby-plugin-react-intl"

import EquipePage from '../africtivistes/equipe'

const Team = ({ data }) => (
  <IntlContextConsumer>
    {({ language: currentLocale }) => 
      currentLocale === 'en' && <EquipePage data={data} />
    }
  </IntlContextConsumer>
)

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "team"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
}
`

export default Team