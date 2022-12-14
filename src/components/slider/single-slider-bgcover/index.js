import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { Link } from "gatsby"

const SingleSliderBgcover = ({post,contacts}) => {
    const{title, link,excerpt, featuredImage, categories}=post.node
    const image = featuredImage && featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src
    const path= `${categories.nodes[0].slug}${link}`

    return (
        <section id="page-banner" className="single-slider bg_cover d-flex align-items-center" style={{backgroundImage:`url(${image})`}} data-overlay="8">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="page-banner-content">
                        <Link to={path}><h3 className="mb-5" style={{color:'#943126'}} data-animation="bounceInLeft" data-delay="1s" ><span>{title}</span></h3></Link>
                        <p className="mb-5" style={{color:'white'}} data-delay="1.5s" dangerouslySetInnerHTML={{ __html: excerpt }}/>
                        <a  className="main-btn" data-animation="fadeInUp" data-delay="1.5s" href={path}><FormattedMessage id ="suite"/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    // <div className="single-slider bg_cover d-flex align-items-center" 
    // style={{backgroundImage:`url(${image})`}} data-overlay="6">
    
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-lg-4">
    //                 <div className="slider-content">
    //                     <Link to={link}><h3 className="mb-5" style={{color:'#943126'}} data-animation="bounceInLeft" data-delay="1s"><span>{title}</span></h3></Link>
    //                     <p className="mb-5" style={{color:'black'}}  data-delay="1.5s" dangerouslySetInnerHTML={{ __html: excerpt }}/>
    //                     {contacts.map(contact=>(
    //                     <a  className="main-btn" data-animation="fadeInUp" data-delay="2s" key={contact.id} data-filter={`.${contact.slug}`} href={contact.link}><FormattedMessage id ="contactUs"/></a>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    )
}

export default injectIntl (SingleSliderBgcover)