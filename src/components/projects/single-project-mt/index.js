import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleProjectMt = ({post}) => {
    const{title, date, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node)

    return (
        
        <div className="singel-project mt-50 text-center">
            <div className="image">
            <GatsbyImage image={image} alt={title} />

                {/* <img src="/images/project/pj-1.jpg" alt="Project"/> */}
            </div>
            <div className="content">
                <ul className="mb-25">
                    <li><a className="project-popup" href="/images/project/pj-1.jpg" aria-label="button" ><i className="flaticon-full-screen"></i></a></li>
                    <li><a href="project-details.html" aria-label="button"><i className="flaticon-link"></i></a></li>
                </ul>
                <a href="/"><h4>{title.substring(0, 40)}...</h4></a>
                <span>{date}</span>
            </div>
        </div>
    )
}

export default injectIntl(SingleProjectMt)
