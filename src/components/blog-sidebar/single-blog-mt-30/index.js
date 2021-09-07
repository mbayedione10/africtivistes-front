import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {injectIntl } from "gatsby-plugin-react-intl"

const SingleBlogMt30 = ({post}) => {
    const{title, date, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.small)
    return (
        <ul>
            <li>
                <a href="blog-details-right-sidebar.html">
                    <span class="single-post mt-30">
                        <span class="image">
                        <GatsbyImage image={image} alt={title} />
                        </span>
                        <span class="content pl-85">
                            <h6>{title.substring(0, 40)}...</h6>
                            <span><i class="flaticon-calendar"></i>{date}</span>
                        </span>
                    </span> 
                </a> 
            </li>
        </ul>
    )
}

export default injectIntl(SingleBlogMt30)
