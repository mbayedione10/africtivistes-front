import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ColLgMd = ({post}) => {
    const{title, date, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
        <div className="col-lg-4 col-md-6 col-sm-10">

        <div className="singel-features-2 text-center mt-30">
        <div className="icon pb-20">
          {/* <i className="flaticon-global"></i> */}
          <GatsbyImage image={image} alt={title} />
        </div>
        <div className="content pl-20">
          <h5 className="mb-20">{title}</h5>
          <p className="mb-15" dangerouslySetInnerHTML={{ __html: excerpt.substring(0, 290)}}/>
          {/* <a href="/"><FormattedMessage id="readMore"/><i className="fa fa-angle-right"></i></a> */}
        </div>
        <div className="date-details">
                <span className="date"><a href="# " aria-label="button">{date}</a></span>
                <span className="details"><a href={link} ><FormattedMessage id="readMore"/> <i className="flaticon-right-arrow"></i></a></span>
            </div>
      </div>
      </div>

    )
}

export default injectIntl(ColLgMd)
