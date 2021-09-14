import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "../components/slider"
import Partner from '../components/partner'
import Services from "../components/services"
import About from "../components/about"
import About2 from '../components/about/about2'
import Projects from "../components/projects"
import LatestNews from '../components/latestNews'
import CallAction from '../components/callAction'
import Counter from '../components/counter'
import Features from '../components/features'
import Testimonial from '../components/testimonial'

const IndexPage = ({data, intl}) => (
  <Layout>
      <Seo title="À propos de nous" />
    <Slider posts={data.allWpPost.edges }/>
    <Features posts={data.projetencours.edges}/>
    <About2/>
    <Services posts={data.plan.edges}/>
    <About/>
    <LatestNews posts={data.allWpPost.edges}/>
    <Counter/>
    {/* <section id="blog-list" className="pt-80 pb-130">
      <div className="container">
        <h1><FormattedMessage id="actualites" /></h1>
        <IntlContextConsumer>
          {({ language: currentLocale }) => (
            data.allWpPost.nodes.map(node => (
              (node.language.slug === currentLocale) && 
              <div key={node.slug}>
                <Link to={node.slug}>
                  <p>{node.title}</p>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            ))
          )}
        </IntlContextConsumer>
      </div>
    </section> */}
    <Testimonial/>
    
    <Projects posts={data.allWpPost.edges} />

    <Partner/>
    <CallAction/>

  </Layout>
)

export const pageQuery = graphql`
  query {
    allWpCategory(sort: {fields: count, order: DESC}, limit: 35) {
      edges {
        node {
          id
          name
          count
          slug
        }
      }
  }
  projetencours: allWpPost(
    sort: {fields: [date], order: DESC}
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Les Projets en cours"}}}}}
  ) {
    edges {
      node {
        id
        title
        excerpt
        slug
        language {
          slug
        }
        link
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300, height: 150, placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
    }
  }
  plan: allWpPost(
    sort: {fields: [date], order: DESC}
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Plan stratégique 2020-2021"}}}}}
  ) {
    edges {
      node {
        id
        title
        excerpt
        slug
        language {
          slug
        }
        link
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300, height: 150, placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
    }
  }
    allWpPost(
      sort: {fields: [date], order: DESC},
       limit: 3
       filter: {language: {code: {eq: FR}}}

       ) {
        edges {
          node {
            id
            title
            date(formatString: "DD MMMM, YYYY", locale: "fr")
            excerpt
            slug
            language {
              slug
            }
            link
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 360,
                      height: 200,
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
    nodes {

      slug
      language {
        slug
      }
    }
   }
}
`
export default IndexPage
