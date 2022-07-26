import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectDetail = ({ project }) => {

  const { title, content, featuredImage } = project
  const image = featuredImage && getImage(featuredImage.node.localFile)
  const altText = featuredImage && getImage(featuredImage.node.localFile)

  return (<section id="project-details" className="pt-50 pb-50">
    <div className="container">
      <div className="row">
        {/* <div className="col-xl-5 offset-xl-1 col-lg-6"> */}
        <div className="col-xl offset-xl col-lg">
          <div className="project-details-content pt-45">
            <h4 className="mb-15">{title}</h4>
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}

          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="project-details-image pt-50">
            <GatsbyImage image={getImage(image)} alt={altText} />
            <div className="col-xl offset-xl col-lg">
<<<<<<< Updated upstream
              <div className="project-details-content pt-45">
                <ul className="mt-10">
                  <li><b>Partenaire</b> <span>partenaire</span></li>
                  <li><b>Date</b> <span>jj/mm/aa</span></li>
                  <li><b>Location</b> <span>localisation</span></li>
                  <li><b>CATEGORY</b> <span>category</span></li>
                  <li>
                    <b>Share</b>
                    <ul className="share">
                      <li><a href="# " aria-label="link"><i className="flaticon-facebook"></i></a></li>
                      <li><a href="# " aria-label="link"><i className="flaticon-twitter-logo-silhouette"></i></a></li>
                      <li><a href="# " aria-label="link"><i className="flaticon-linkedin-logo"></i></a></li>
                      <li><a href="# " aria-label="link"><i className="flaticon-instagram-social-network-logo-of-photo-camera"></i></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
=======
            <div className="project-details-content pt-45">
            {/* <ul className="mt-10">
                    <li><b>Partenaire</b> <span>partenaire</span></li>
                    <li><b>Date</b> <span>jj/mm/aa</span></li>
                    <li><b>Location</b> <span>localisation</span></li>
                    <li><b>CATEGORY</b> <span>category</span></li>
                    <li>
                      <b>Sahre</b>
                      <ul className="share">
                        <li><a href="# " aria-label="link"><i className="flaticon-facebook"></i></a></li>
                        <li><a href="# " aria-label="link"><i className="flaticon-twitter-logo-silhouette"></i></a></li>
                        <li><a href="# " aria-label="link"><i className="flaticon-linkedin-logo"></i></a></li>
                        <li><a href="# " aria-label="link"><i className="flaticon-instagram-social-network-logo-of-photo-camera"></i></a></li>
                      </ul>
                    </li>
                  </ul> */}
                    </div>
                </div>
>>>>>>> Stashed changes
          </div>
        </div>

      </div>
    </div>
  </section>

  )
}

export default ProjectDetail