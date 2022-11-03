import * as React from "react"
import { graphql } from "gatsby"
import Adherer from '../../components/adherer'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import PageBanner from '../../components/pageBanner'
import CallAction from "../../components/callAction"

const AdhererPage = ({data}) => {
    const { title, content, translations} = data.allWpPage.nodes[0]
    const link = translations ? translations[0].link : ''
    return (<Layout translation={link}>
        <Seo title="Comment adhérer AfricTivistes ?" />
        <PageBanner title={title} />
        <div className="row justify-content-center" >
          <div className="col-lg-6" >
            <div className="section-title text-center pt-10 pb-10" >
              <br></br>
              <h1 className="mt-15 mb-15" dangerouslySetInnerHTML={{ __html: content }}></h1>
            {/* <div className="underline">
                <span></span>
                <span></span>
            </div> */}
        </div>
    </div>
</div>
        <Adherer content={content}/>
        <CallAction contacts={data.contact.nodes}/>
      </Layout>
    )
}
export default AdhererPage
export const query = graphql`
  query {
  allWpPage(filter: {slug: {eq: "adherer"}}) {
    nodes {
      title
      content
      translations {
        link
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