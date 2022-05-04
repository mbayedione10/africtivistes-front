import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleTestimonial = ({post}) => {
    const{title, date, link,excerpt,name, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.big)

    return (
    <div className="single-testimonial mt-35">
            <div className="testimonial-content">
            <p className="mt-15 mb-15" dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 65) }}/>...
            </div>
            <div className="testimonial-author">
            <div className="author-image">
                <a href={link}> <GatsbyImage image={image} alt={title}/></a>
                    </div>
                <div className="author-name pl-100">
                <a href={link} className="mt-25"><h6>{title}</h6></a>
                </div>
            </div>
            </div>
    )
}

export default injectIntl(SingleTestimonial)
