import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const SingleSliderBgcover = ({post,contacts}) => {
    const{title, date, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
    <div className="single-slider bg_cover d-flex align-items-center" style={{backgroundImage:`url(/images/slider/ss.jpeg)`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-10">
                    <div className="slider-content">
                        <Link to={link}><h2 className="mb-25" data-animation="bounceInLeft" data-delay="1s"><span>{title.substring(0, 48)}...</span></h2></Link>
                        <h4 className="mb-30" data-animation="fadeInLeft" data-delay="1.5s" dangerouslySetInnerHTML={{ __html: excerpt }}></h4>
                        {contacts.map(contact=>(
                        <a  className="main-btn" data-animation="fadeInUp" data-delay="2s" key={contact.id} data-filter={`.${contact.slug}`} href={contact.link}><FormattedMessage id ="contactUs"/></a>
                          ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default injectIntl (SingleSliderBgcover)
