import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleNewsMt = ({post}) => {
    const{title, date, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
    <div className="card">
        <div className="card-img-top" >
            <GatsbyImage image={image} alt={title} />
        </div>
        <div class="card-body">
            <h5 class="card-title" href={link}>{title}</h5>
            <div class="card-text" dangerouslySetInnerHTML={{ __html: excerpt}}></div>
        </div>
        <div class="card-footer">
                    <span class="text-muted"><a>{date}</a></span>
                    <span class="text-muted float-right"><a href={link} ><FormattedMessage id="readMore"/> <i className="flaticon-right-arrow"></i></a></span>
        </div>
        </div>
    )
}

export default injectIntl(SingleNewsMt) 
