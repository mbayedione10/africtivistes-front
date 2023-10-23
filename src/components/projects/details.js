import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectDetail = ({ project}) => {

  const { title, content, featuredImage } = project
  const image = featuredImage && getImage(featuredImage.node.localFile)
  const altText = featuredImage && getImage(featuredImage.node.localFile)

  return (
  <section id="project-details" className="pt-50 pb-50">
    <div className="container">
      <div className="row">
        <div className="col-xl offset-xl col-lg">
          <div className="project-details-content pt-45">
            <h4 className="mb-15">{title}</h4>
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}

          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="project-details-image pt-50">
            <GatsbyImage image={getImage(image)} alt={altText} />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ProjectDetail