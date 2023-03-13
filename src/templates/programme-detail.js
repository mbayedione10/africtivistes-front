import React from "react"
import { graphql } from "gatsby"
import { IntlContextConsumer, injectIntl } from "gatsby-plugin-react-intl"
import { FormattedMessage } from 'gatsby-plugin-react-intl'
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectDetail from '../components/projects/details'
import ProjectPart from '../components/projects/part'
import Testimonial2 from '../components/testimonial/testimonial2'
import CallAction from "../components/callAction"
import Projects from "../components/projects"

const ProgrammeDetail = ({ data, pageContext, intl }) =>{
    const {title, translations,featuredImage} = data.allWpProgramme.nodes[0]
    const translation = translations.lenght && translations[0].link
    const image = featuredImage && featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src

    return (
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          currentLocale === pageContext.lang && <Layout translation={translation}>
            <Seo lang={intl.locale} title={title} />
            {/* <PageBanner title={'Recent Projects'} /> */}
            <section id="page-banner" className="bg_cover pt-150 pb-150" style={{ backgroundImage: `url(${image})`}} data-overlay="6">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-content text-center">
                        <h2>{title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="/" aria-label="button"><FormattedMessage id="home" /></a></li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
            <ProjectDetail project={data.allWpProgramme.nodes[0]} />
            <Projects posts={data.related.edges}/>

            <ProjectPart projects={data.prog.nodes} />
            {/* <Testimonial2/> */}
            <CallAction contacts={data.contact.nodes}/>
        </Layout>
        }
      </IntlContextConsumer>
    )
}

export default injectIntl(ProgrammeDetail)

export const query = graphql`
  query($slug: String!) {
    allWpProgramme(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                height: 280
                width: 300
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
    related:  allWpPost(
        limit: 4
        sort: {fields: date, order: DESC}
        filter: {language: {code: {eq: FR}}}) {
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
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1000, height: 800, placeholder: DOMINANT_COLOR)
                  }
                }
                small: localFile {
                  childImageSharp {
                    gatsbyImageData(width: 70, height: 68, placeholder: DOMINANT_COLOR)
                  }
                }
              }
            }
          }
        }
      }
    prog: allWpProgramme(
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
