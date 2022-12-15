import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { Link } from "gatsby"

const SingleSliderBgcover = ({post,contacts}) => {
    const{title, link,excerpt, featuredImage}=post.node
    const image = featuredImage && featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback.src

    return (
        <section id="page-banner" className="single-slider bg_cover d-flex align-items-center" style={{backgroundImage:`url(${image})`}} data-overlay="8">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="page-banner-content">
                        <Link to={link}><h3 className="mb-5" style={{color:'#943126'}} data-animation="bounceInLeft" data-delay="1s" ><span>{title}</span></h3></Link>
                        <p className="mb-5" style={{color:'white'}} data-delay="1.5s" dangerouslySetInnerHTML={{ __html: excerpt }}/>
                        <a  className="main-btn" data-animation="fadeInUp" data-delay="1.5s" href={link}><FormattedMessage id ="suite"/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default injectIntl (SingleSliderBgcover)