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
  allWpTeam {
    nodes {
      title
      excerpt
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 89,
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
      social {
        facebook
        instagram
        linkedin
        twitter
      }
    }
  }
  contact: allWpPage(filter: {slug: {eq: "contact-us"}}) {
    nodes {
      title
      content
      slug
      link
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 555,
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
      translations {
        link
      }
    }
  }
}
`

export default Team