import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleBogMt = ({post}) => {
    const{title, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.big)

    return (
        <div className="row">
        <div >
            <div className="blog-image">
            <a href={link}> <GatsbyImage image={image} alt={title}/></a>

           
                <a></a>
            </div>
        </div>
        <div className="col-xl-8 col-lg-8">
            <div className="blog-content">
                <a href={link} className="mt-25"><h4>{title}</h4></a>

                <p className="mt-15 mb-15" dangerouslySetInnerHTML={{ __html: excerpt }} />
                <a href={link}><FormattedMessage id ="readMore"/> <i class="fa fa-angle-right"></i></a>
                <br></br>
            </div>
        </div>
    </div> 
      
    )
}

export default injectIntl(SingleBogMt)
