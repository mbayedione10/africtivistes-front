import * as React from "react"
import { graphql } from "gatsby"
import PageBanner from "../../components/pageBanner"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Team from '../../components/team'
import CallAction from "../../components/callAction"

const EquipePage = ({data}) => {
const {title, translations} = data.allWpPage.nodes[0]
const link = translations ? translations[0].link : ''
return(<Layout translation={link}>
    <Seo title="L'équipe" />
    <PageBanner title={title} />
    <Team teams={data.allWpTeam.nodes}/>
    {/* <CallAction2/> */}
    <CallAction contacts={data.contact.nodes}/>
  </Layout>
)}
export default EquipePage
export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "equipe"}}) {
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
  contact: allWpPage(filter: {slug: {eq: "nous-contacter"}}) {
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