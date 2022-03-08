import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ColLgMd = ({project}) => {

    return (
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="singel-features-2 text-justify mt-30">
          <div className="icon pb-20 singel-news ">
            {/* <i className="flaticon-global"></i> */}
            <GatsbyImage image={getImage(project.featuredImage.node.localFile)} alt={project.featuredImage.node.altText} />
          </div>
          <div className="content pl-20">
            <h4 className="mb-20">{project.title}</h4>
            <p className="mb-15" dangerouslySetInnerHTML={{ __html: project.content.substring(0, 600)}}/>
            <span className="details"><a href={project.link} ><FormattedMessage id="readMore"/> <i className="flaticon-right-arrow"></i></a></span>
        </div>
      </div>
      </div>

    )
}

export default injectIntl(ColLgMd)
