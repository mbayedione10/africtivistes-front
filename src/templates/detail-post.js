import React from "react"
import { graphql } from "gatsby"
import { IntlContextConsumer, injectIntl } from "gatsby-plugin-react-intl"
import { FormattedMessage } from 'gatsby-plugin-react-intl'
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectDetail from '../components/projects/details'
import ProjectPart from '../components/projects/part'
import Testimonial2 from '../components/testimonial/testimonial2'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const DetailPost = ({ data, pageContext, intl }) =>{
    const {title, translations,featuredImage} = data.allWpPost.nodes[0]
    const translation = translations.lenght && translations[0].link
  const { localFile, altText  } = featuredImage.node
    const image = featuredImage && featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src

    return (
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          currentLocale === pageContext.lang && <Layout translation={translation}>
            <Seo lang={intl.locale} title={title} />
            {/* <PageBanner title={'Recent Projects'} /> */}
            <section id="blog-sidebar"  class="pt-10 pb-10">
        <div class="container">
            <div class="row">
                <div className="col-lg-12">
                    <div className="blog-details mt-10">
                        <div className="image">
                        <GatsbyImage image={getImage(localFile)} alt={altText} />
                        </div>
                    </div> 
                </div>
 
                </div>
                </div>
                </section>
            <ProjectDetail project={data.allWpPost.nodes[0]} />
            {/* <ProjectPart projects={data.allWpPost.nodes} /> */}
            {/* <Testimonial2/> */}
        </Layout>
        }
      </IntlContextConsumer>
    )
}

export default injectIntl(DetailPost)

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        link
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1150,
                height: 550,
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
    recent: allWpPost(
        limit: 10
        sort: {fields: date, order: DESC}
        filter: {language: {code: {eq: FR}}}
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
                      width: 360,
                      height: 200,
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
          }
        }
      }
      related:  allWpPost(
        sort: {fields: date, order: DESC}
        filter: {          tags: {
          nodes: {
          elemMatch: {
            name: {eq: "Sahel Insight"}
          }
        }
        }, language: {code: {eq: FR}}}) {
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
                    gatsbyImageData(width: 360, height: 200, placeholder: DOMINANT_COLOR)
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
  }
`
