import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ColLgMd = ({project}) => {

    return (
      <div className="col-lg-3 col-md-6 col-sm-10">
        <div className="singel-news mt-30">
        <div className="news-content">
        <div className="news-thumb">
        <a href={project.link}> <GatsbyImage  image={getImage(project.featuredImage.node.localFile)} alt={project.featuredImage.node.altText} /></a>
          </div>
          <br></br>
          <br></br>

            <a href={project.link} className="mb-15"><h4>{project.title}</h4></a>
        </div>
        
        {/* <div className="date-details">
                <span className="details"><a href={project.link} ><FormattedMessage id="readMore"/> <i className="flaticon-right-arrow"></i></a></span>
            </div> */}
      </div>
      </div>

    )
}

export default injectIntl(ColLgMd)
