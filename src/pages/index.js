import * as React from "react"
import {graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "../components/slider"
import Partner from '../components/partner'
import About from "../components/about"
import About2 from '../components/about/about2'
import Projects from "../components/projects"
import LatestNews from '../components/latestNews'
import CallAction from '../components/callAction'
import Counter from '../components/counter'
import Features from '../components/features'
import ProjectsPage from '../components/projects/page'
import NosChampions from "../components/noschampions"
import{FormattedMessage} from 'react-intl'
import Testimonial2 from "../components/testimonial/testimonial2"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title={data.allWpPage.nodes.title} />
    <Slider posts={data.slider.edges} contacts={data.contact.nodes}/>
    <LatestNews posts={data.allWpPost.edges}/>
    <Features projects={data.programmeencours.nodes}/>
    <div className="row justify-content-center" >
    <div className="col-lg-6" >
        <div className="section-title text-center pt-10 pb-10" >
        <br></br>
            <a href='ressources/nos-rapports-dactivites/'><h2><FormattedMessage id="rapports"/></h2></a>
            <div className="underline">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</div>
    <NosChampions posts={data.rapports.edges} />
    <div className="row">
          <div className="col-lg-12">
              <div className="project-more text-center">
                <a className="main-btn"  href="ressources/nos-publications" ><FormattedMessage id="more"/></a>
              </div>
          </div>
      </div>
      <br></br>
    <About posts={data.abidjan.nodes} actu={data.latestnews.edges}/>
    <Counter posts={data.sommet.nodes}/>
    <div className="row justify-content-center" >
    <div className="col-lg-6" >
        <div className="section-title text-center pt-10 pb-10" >
        <br></br>
            <a href='ressources/nos-champions/'><h2><FormattedMessage id="champions"/></h2></a>
            <div className="underline">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</div>

    <NosChampions posts={data.champions.edges} />
    {/* <About2/> */}
    {/* <Services posts={data.plan.edges}/> */}
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
    {/* <Testimonial/> */}
    <div className="row justify-content-center" >
    <div className="col-lg-6" >
        <div className="section-title text-center pt-10 pb-10" >
        <br></br>
            <a href='ressources/nos-champions/'><h2><FormattedMessage id="learn"/></h2></a>
            <div className="underline">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</div>
    <Testimonial2 posts={data.learn.edges}/>
    <Projects posts={data.latestnews.edges} pages={data.allWpPage.nodes}/>
    <ProjectsPage programmes={data.allWpProgrammeType.nodes} projects={data.allWpProgramme.nodes} />
    <Partner/>
    <CallAction contacts={data.contact.nodes}/>

  </Layout>
)

export const pageQuery = graphql`
  query {
    allWpPage(filter: {slug: {eq: "accueil"}, language: {slug: {eq: "FR"}}}) {
    nodes {
      title
      translations {
        link
      }
    }
  }
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
    allWpProgrammeType(
      filter: {language: {code: {eq: FR}}}
    ) {
      nodes {
        id
        name
        slug
      }
    }
    allWpProgramme(
      filter: {language: {code: {eq: FR}}},
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
                  width: 300, 
                  height: 280, 
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
    limit: 4
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
                width: 300, 
                height: 280,
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
    limit: 6
    sort: {fields: [date], order: DESC}
    filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "actualites"}}}}}

     ) {
      edges {
        node {
          id
          title
          date(formatString: "DD MMMM, YYYY", locale: "fr")
          excerpt
          content
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
                    width: 1500,
                    height: 1200,
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
   filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "actualites"}}}}}

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
                  width: 1500,
                  height: 1200,
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
       filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "a-la-une"}}}}}

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
                slug
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
  actu: allWpPage(filter: {slug: {eq: "actualites"}, language: {code: {eq: FR}}}) {
    nodes {
      title
      translations {
        link
      }
      link
    }
  }
  abidjan: allWpPage(filter: {slug: {eq: "discours-de-cheikh-fall-abidjan2021"}, language: {code: {eq: FR}}}) {
    nodes {
      title
      translations {
        link
      }
      link
      content
    }
  }
  sommet: allWpPage(filter: {slug: {eq: "sommet-africtivistes"}, language: {code: {eq: FR}}}) {
    nodes {
      title
      content
      link
      translations {
        link
      }
    }
  }

  rapports: allWpPost(
    sort: {fields: date, order: DESC},
    limit: 3
    filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "nos-publications"}}}}}
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
                  width: 550,
                  height: 300,
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

  champions:  allWpPost(
    sort: {fields: date, order: DESC}
    filter: {language: {code: {eq: FR}}, categories: {nodes: {elemMatch: {slug: {eq: "nos-championnes"}}}}}
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
                  width: 550,
                  height: 300,
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

  learn: allWpPost(
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
}
`
export default IndexPage
