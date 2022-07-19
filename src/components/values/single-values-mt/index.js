import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {injectIntl } from "gatsby-plugin-react-intl"

const SingleValuesMt = ({post}) => {
    const{title,content, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
        <div class="row">
        <div class="col-lg-6">
            {/* <div class="history-image mt-50"> */}
            <div className="company-about-image mt-50">

                {/* <img src="/images/company-history/ch-2.jpg" alt="company history"/> */}
                <GatsbyImage image={image} alt={title} />
            </div>

        </div>
        <div class="col-lg-6">
            <div class="our-history-content mt-50">
                {/* <span class="mb-10">{date}</span> */}
                <h4 class="mb-15">{title}</h4>
                <p  class="mb-15" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
        </div>
    )
}

export default injectIntl(SingleValuesMt)
