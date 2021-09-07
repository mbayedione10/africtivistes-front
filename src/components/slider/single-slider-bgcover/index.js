import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SingleSliderBgcover = ({post}) => {
    const{title, date, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
        <>
    <div className="single-slider bg_cover d-flex align-items-center" style={{ backgroundImage: `url(/images/slider/ss.jpeg)`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-10">
                    <div className="slider-content">
                        <h2 className="mb-25" data-animation="bounceInLeft" data-delay="1s">The Best Business <span>Consulting</span> Team</h2>
                        <p className="mb-30" data-animation="fadeInLeft" data-delay="1.5s">Business Consulting offers a wide range of services to businesses either before or during tough financial times. What sets us apart from other firms in the industry is over three decades.</p>
                        <a href="http://localhost:8000/fr/nous-contacter/" className="main-btn" data-animation="fadeInUp" data-delay="2s"><FormattedMessage id ="contactUs"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="single-slider bg_cover d-flex align-items-center" style={{ backgroundImage: `url(/images/slider/acap.png)`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-10">
                    <div className="slider-content">
                        <h2 className="mb-25" data-animation="bounceInLeft" data-delay="1s">The Best Business <span>Consulting</span> Team</h2>
                        <p className="mb-30" data-animation="fadeInLeft" data-delay="1.5s">Business Consulting offers a wide range of services to businesses either before or during tough financial times. What sets us apart from other firms in the industry is over three decades.</p>
                        <a href="contact.html" className="main-btn" data-animation="fadeInUp" data-delay="2s"><FormattedMessage id ="contactUs"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="single-slider bg_cover d-flex align-items-center" style={{ backgroundImage: `url(/images/slider/log.jpg)`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-10">
                    <div className="slider-content">
                        <h2 className="mb-25" data-animation="bounceInLeft" data-delay="1s">The Best Business <span>Consulting</span> Team</h2>
                        <p className="mb-30" data-animation="fadeInLeft" data-delay="1.5s">Business Consulting offers a wide range of services to businesses either before or during tough financial times. What sets us apart from other firms in the industry is over three decades.</p>
                        <a href="contact.html" className="main-btn" data-animation="fadeInUp" data-delay="2s"><FormattedMessage id ="contactUs"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default injectIntl (SingleSliderBgcover)


