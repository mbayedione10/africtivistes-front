import React from 'react'
import { injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ColLgMd = ({ project }) => {

  return (
    <div className="card text-center">
      <div className="card-img-top" >
        <a href={project.link}> <GatsbyImage image={getImage(project.featuredImage.node.localFile)} alt={project.featuredImage.node.altText} /></a>
      </div>
      <div class="card-body" style={{
        backgroundColor: '#a63117'
      }}>
        <a href={project.link}><h4 style={{ color: '#fff' }}>{project.title}</h4></a>
      </div>
    </div>
  )
}

export default injectIntl(ColLgMd)
