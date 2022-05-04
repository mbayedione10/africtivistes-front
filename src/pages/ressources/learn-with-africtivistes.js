import * as React from "react"
import { graphql } from "gatsby"
import NosChampions from '../../components/noschampions'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PageBanner from '../../components/pageBanner'
import CallAction from "../../components/callAction"
import {FormattedMessage } from 'react-intl'
import Testimonial2 from '../../components/testimonial/testimonial2'

const LearnPage = ({data}) => {
    const { title, translations} = data.allWpPage.nodes[0]
    const link = translations ? translations[0].link : ''
    return (<Layout translation={link}>
        <Seo title={title} />
        <PageBanner title={title} />
        <div className="row justify-content-center" >
        <div className="col-lg-10" >
          <div className="section-title text-center pt-10 pb-10" >
            <br></br>
            <h3 className="text-justify"><FormattedMessage id="learnText"/></h3>
            <div className="underline">
                <span></span>
                <span></span>
            </div>
          </div>
        </div>
        </div>
        <Testimonial2 posts={data.allWpPost.edges}/>
        {/* <NosChampions posts={data.allWpPost.edges} /> */}
        <CallAction contacts={data.contact.nodes}/>
      </Layout>
    )
}
export default LearnPage

export const query = graphql`
query {

  allWpPage(filter: {slug: {eq: "learn-with-africtivistes"}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
  allWpPost(
    sort: {fields: date, order: DESC}
    filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "learn-with-africtivistes"}}}}}
  ) {
    edges {
      node {
        id
        title
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        link
        featuredImage {
          node {
            altText
            big: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 89,
                  height: 89,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            small: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 70,
                  height: 68,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            name
            count
          }
        }
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