import React from 'react'
import { Link } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { ImportScript } from '../../services'

const ProjectsPage = ({programmes, projects}) => {

  ImportScript("/js/load/project2.js");

  return (
  <section id="project-page" className="pt-90 pb-130">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="project-2-menu text-center mt-20">
            <ul>
              <li data-filter="*" className="active"><FormattedMessage id="all"/></li>
                {programmes.map(programme=>(
                  <li key={programme.id} data-filter={`.${programme.slug}`} >{programme.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="row grid">
        {projects.map(project=>(
          <div key={project.id} className={`col-lg-4 col-md-6 ${project.programmeTypes.nodes.map(type => type.slug).join(' ')}`}>
            <div className="single-project-2 mt-50">
              <div className="project-image">
                <GatsbyImage image={getImage(project.featuredImage.node.localFile)} alt={project.featuredImage.node.altText} />
              </div>
              <div className="project-content">
                <div className="name">
                  <Link to={project.link}><h4>{project.title}</h4></Link>
                  <span>25 June, 2018</span>
                </div>
                <div className="view">
                  <Link to={project.link}><FormattedMessage id="detail" /> <i className="flaticon-right-arrow"></i></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="project-more text-center mt-50">
            <a className="main-btn" href="# " aria-label="button"><FormattedMessage id="more" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

export default injectIntl(ProjectsPage)