import React from 'react'

import { ImportScript } from '../../services'

const ProjectPart = () => {

  ImportScript("/js/load/project3.js");

  return (<section id="project-part" className="gray-bg pt-120 pb-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-50">
            <h3>Related Projects</h3>
            <div className="underline">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row project-active">
        <div className="col-lg-4">
          <div className="single-project-2 ">
            <div className="project-image">
              <img src="/images/project/project-2/p-1.jpg" alt="Project"/>
                        </div>
              <div className="project-content">
                <div className="name">
                  <a href="project-details.html"><h4>Rural Tower</h4></a>
                  <span>25 June, 2018</span>
                </div>
                <div className="view">
                  <a href="project-details.html">View Detail <i className="flaticon-right-arrow"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-project-2">
              <div className="project-image">
                <img src="/images/project/project-2/p-2.jpg" alt="Project"/>
                        </div>
                <div className="project-content">
                  <div className="name">
                    <a href="project-details.html"><h4>Rural Tower</h4></a>
                    <span>25 June, 2018</span>
                  </div>
                  <div className="view">
                    <a href="project-details.html">View Detail <i className="flaticon-right-arrow"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-project-2">
                <div className="project-image">
                  <img src="/images/project/project-2/p-3.jpg" alt="Project"/>
                        </div>
                  <div className="project-content">
                    <div className="name">
                      <a href="project-details.html"><h4>Rural Tower</h4></a>
                      <span>25 June, 2018</span>
                    </div>
                    <div className="view">
                      <a href="project-details.html">View Detail <i className="flaticon-right-arrow"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-project-2">
                  <div className="project-image">
                    <img src="/images/project/project-2/p-4.jpg" alt="Project"/>
                        </div>
                    <div className="project-content">
                      <div className="name">
                        <a href="project-details.html"><h4>Rural Tower</h4></a>
                        <span>25 June, 2018</span>
                      </div>
                      <div className="view">
                        <a href="project-details.html">View Detail <i className="flaticon-right-arrow"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
  )
}

export default ProjectPart