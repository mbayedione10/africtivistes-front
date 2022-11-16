import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ColLgMd = ({project}) => {

    return (
      <div className="col-lg-3 col-md-6 col-sm-10">
        <div className="singel-news">
          <br></br>
          <div className="news-content">
          <div className="news-thumb">
            <GatsbyImage  image={getImage(project.featuredImage.node.localFile)} alt={project.featuredImage.node.altText} />
          </div>
          <br></br>
            <a href={project.link} className="mb-15"><h4>{project.title}</h4></a>
            <br></br>
        </div>
        <div className="date-details">
                <span className="details"><a href={project.link} ><FormattedMessage id="readMore"/> <i className="flaticon-right-arrow"></i></a></span>
            </div>
      </div>
      </div>

    )
}

export default injectIntl(ColLgMd)
