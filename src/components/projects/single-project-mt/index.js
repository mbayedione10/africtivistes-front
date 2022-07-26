import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleProjectMt = ({post}) => {
    const{title,excerpt, date, link, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
        <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="singel-news mt-30">
            <div className="news-thumb">
            <GatsbyImage image={image} alt={title} />
            </div>
            <div className="news-content">
                <a href={link} className="mb-15"><h4>{title.substring(0, 40)}...</h4></a>
                <p className="mb-20" dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 245)}}/>
            </div>
            <div className="date-details">
                <span className="date"><a href="# " aria-label="button">{date}</a></span>
                <span className="details"><a href={link} ><FormattedMessage id="readMore"/> <i className="flaticon-right-arrow"></i></a></span>
            </div>
        </div>
    </div>
    )
}

export default injectIntl(SingleProjectMt)
