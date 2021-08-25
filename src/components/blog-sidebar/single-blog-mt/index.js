import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleBogMt = ({post}) => {
    const{title, date, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
        <div class="single-blog mt-50">
            <div class="blog-image">
                <GatsbyImage image={image} alt={title} />
            </div>
            <div class="blog-content">
            <   div class="date">
                    <ul>
                        <li><a href="#"><i class="flaticon-calendar"></i>{date}</a></li>
                        <li><a href="#"><i class="flaticon-folder"></i> Finance</a></li>
                    </ul>
                </div>
                <div class="content">
                    <a href={link} class="mb-15"><h4>{title.substring(0, 48)}...</h4></a>
                    <p class="mb-15" dangerouslySetInnerHTML={{ __html: excerpt }} />
                    <a href={link}><FormattedMessage id ="readMore"/> <i class="fa fa-angle-right"></i></a>
                </div>
            </div>
        </div> 
    )
}

export default injectIntl(SingleBogMt)
