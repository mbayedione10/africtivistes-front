import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectDetail = ({project}) => {

  const { title, content, featuredImage} = project
  const { localFile, altText  } = featuredImage.node
  return (<section id="project-details" className="pt-80 pb-130">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="project-details-image pt-50">
            <GatsbyImage image={getImage(localFile)} alt={altText} />
          </div>
          </div>
          <div className="col-xl-5 offset-xl-1 col-lg-6">
            <div className="project-details-content pt-45">
              <h4 className="mb-15">{title}</h4>
              {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
                  <ul className="mt-10">
                    <li><b>Client</b> <span>Jhon Deo</span></li>
                    <li><b>Date</b> <span>25 July, 2018</span></li>
                    <li><b>Location</b> <span>Newyork, USA</span></li>
                    <li><b>CATEGORY</b> <span>Apartment</span></li>
                    <li>
                      <b>Sahre</b>
                      <ul className="share">
                        <li><a href="# " aria-label="link"><i className="flaticon-facebook"></i></a></li>
                        <li><a href="# " aria-label="link"><i className="flaticon-twitter-logo-silhouette"></i></a></li>
                        <li><a href="# " aria-label="link"><i className="flaticon-google-plus"></i></a></li>
                        <li><a href="# " aria-label="link"><i className="flaticon-linkedin-logo"></i></a></li>
                        <li><a href="# " aria-label="link"><i className="flaticon-instagram-social-network-logo-of-photo-camera"></i></a></li>
                      </ul>
                    </li>
                  </ul>
                    </div>
                </div>
            </div>
          </div>
    </section>

    )
}

export default ProjectDetail