import React from 'react'
import { graphql } from "gatsby"

import EquipePage from '../africtivistes/equipe'

const Team = ({ data }) => (
    <EquipePage data={data} />
)

export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "team"}}) {
    nodes {
      title
    }
  }
}
`

export default Team