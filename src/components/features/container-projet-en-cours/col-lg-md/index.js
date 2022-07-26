import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ColLgMd = ({project}) => {

    return (
      <div className="col-lg-3 col-md-6 col-sm-10">
        <div className="singel-news">
          <div className="news-thumb">
            {/* <i className="flaticon-global"></i> */}
            <GatsbyImage  image={getImage(project.featuredImage.node.localFile)} alt={project.featuredImage.node.altText} />
          </div>
          <div className="news-content" 
          style={{padding: '30px'}}>
            <h6 className="mb-20" href={project.link} >{project.title}</h6>
            <p className="mb-10" dangerouslySetInnerHTML={{ __html: project.content.substring(0, 350)}}/>
            <span className="details"><a href={project.link} ><FormattedMessage id="readMore" /> <i className="flaticon-right-arrow"></i></a></span>
        </div>
      </div>
      </div>

    )
}

export default injectIntl(ColLgMd)
