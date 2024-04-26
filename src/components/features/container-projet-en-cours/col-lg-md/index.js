import React from 'react'
import { injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ColLgMd = ({ project }) => {
  return (
    <div className="card text-center">
      <div className="card-img-top">
        <a href={project.plateforme.url} target="_blank" rel="noopener noreferrer">
          <GatsbyImage image={getImage(project.featuredImage.node.localFile)} alt={project.featuredImage.node.altText} />
        </a>
      </div>
      <div className="card-body" style={{ backgroundColor: '#a63117' }}>
        <a href={project.plateforme.url} target="_blank" rel="noopener noreferrer">
          <h4 style={{ color: '#fff' }}>{project.title}</h4>
        </a>
      </div>
    </div>
  )
}

export default injectIntl(ColLgMd)
