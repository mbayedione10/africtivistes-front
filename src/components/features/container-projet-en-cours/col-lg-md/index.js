import React from 'react'
import { injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ColLgMd = ({ project }) => {
  return (
    <div className="card rounded-0 h-100">
      <div className="card-img-top" >
        <a href={project.plateforme.url} target="_blank" rel="noopener noreferrer">
          <GatsbyImage 
            image={getImage(project.featuredImage.node.localFile)} 
            alt={project.featuredImage.node.altText}
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </a>
      </div>
      <div className="card-body d-flex flex-column justify-content-center align-items-center text-center" 
          style={{ backgroundColor: '#a63117', minHeight: '100px', padding: '1rem' }}>
        <a href={project.plateforme.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
          <h5 className="card-title mb-0" style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.3' }}>{project.title}</h5>
        </a>
      </div>
    </div>
  )
}

export default injectIntl(ColLgMd)