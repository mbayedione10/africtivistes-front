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
import ProjectsPage from '../components/projects/page'

const IndexPage = ({data, intl}) => (
  <Layout>
      <Seo title="À propos de nous" />
    <Slider posts={data.slider.edges} contacts={data.contact.nodes}/>
    <Features projects={data.programmeencours.nodes}/>
    <About/>
    <About2/>
    {/* <Services posts={data.plan.edges}/> */}
    <ProjectsPage programmes={data.allWpProgrammeType.nodes} projects={data.allWpProgramme.nodes} />
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
    <Projects posts={data.latestnews.edges}  categorys={data.allWpCategory.edges}/>

    <Partner/>
    <CallAction contacts={data.contact.nodes}/>

  </Layout>
)

export const pageQuery = graphql`
  query {
    allWpCategory(sort: {fields: count, order: DESC}, limit: 35
      filter: {language: {code: {eq: FR}}}) {
      edges {
        node {
          id
          name
          count
          slug
        }
      }
    }
    allWpProgrammeType {
      nodes {
        id
        name
        slug
      }
    }
    allWpProgramme(
      filter: {language: {code: {eq: FR}}}
      sort: {fields: date, order: DESC}
      ) {
      nodes {
        id
        title
        link
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        programmeTypes {
          nodes {
            slug
            name
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 360, 
                  height: 250, 
                  placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
        slug
        content
      }
    }
  programmeencours: allWpProgramme(
    filter: {language: {code: {eq: FR}}}
    limit: 3
    sort: {fields: date, order: DESC}
    ) {
    nodes {
      id
      title
      link
      date(formatString: "DD MMMM, YYYY", locale: "fr")
      programmeTypes {
        nodes {
          slug
          name
        }
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 360, 
                height: 250, 
                placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
      slug
      content
    }
  }

  latestnews: allWpPost(
    limit: 15
    sort: {fields: [date], order: DESC}
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
                  width: 1920,
                  height: 860,
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
slider: allWpPost(
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
                      width: 1920,
                      height: 800,
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
                placeholder: TRACED_SVG
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
export default IndexPage
