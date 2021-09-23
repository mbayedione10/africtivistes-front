import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SingleSliderBgcover = ({post}) => {
    const{title, date, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
    <div className="single-slider bg_cover d-flex align-items-center" style={{backgroundImage:`url(/images/bg-1.jpg`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-10">
                    <div className="slider-content">
                        <h2 className="mb-25" data-animation="bounceInLeft" data-delay="1s"><span>{title.substring(0, 48)}...</span></h2>
                        <p className="mb-30" data-animation="fadeInLeft" data-delay="1.5s" dangerouslySetInnerHTML={{ __html: excerpt }}></p>
                        <a href="/" className="main-btn" data-animation="fadeInUp" data-delay="2s"><FormattedMessage id ="contactUs"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default injectIntl (SingleSliderBgcover)
