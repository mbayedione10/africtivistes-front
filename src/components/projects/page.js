import React from 'react'
import { Link } from "gatsby"
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { ImportScript } from '../../services'

const ProjectsPage = ({programmes, projects}) => {

  ImportScript("/js/load/project2.js");

  return (
  <section id="project-page" className="pt-30 pb-30">
    <div className="container" style={{ maxWidth: '1300px' }}>
    <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="section-title text-center pb-15">
                        <h3><FormattedMessage id="planStrategique"/></h3>
                        <div className="underline">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
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
 <div key={project.id} className={`col-lg-3 col-md-8 ${project.programmeTypes.nodes.map(type => type.slug).join(' ')}`}>
 <div className="card rounded-0 h-100 blog-card- mt-30 text-center"> {/* Added text-center class */}
   <div className="project-image mx-auto"> {/* Added mx-auto class to center horizontally */}
     <GatsbyImage image={project.featuredImage && getImage(project.featuredImage.node.localFile)} alt={project.title} />
   </div>
   <div className="card-body-plateforme">
     <div className="author-name">
       <span>
         <Link to={project.link}><h6 className="card-title-plateforme">{project.title}</h6></Link><br/>
       </span>
       <br/>
     </div>
   </div>
 </div>
</div>

        ))}
    
      </div>
      
    </div>
    
  </section>
)}

export default injectIntl(ProjectsPage)