import React from 'react'

import { ImportScript } from '../../services'

const Projects = () => {

  ImportScript("/js/load/project.js");

  return (<section id="project-part" className="pt-120 pb-130">
    <div className="container">
      <div className="row justify-content-center">
          <div className="col-lg-4">
              <div className="section-title text-center pb-15">
                  <h3>Our Projects</h3>
                  <div className="underline">
                      <span></span>
                      <span></span>
                  </div>
              </div>
          </div>
        </div>
      <div className="row">
          <div className="col-lg-12">
              <div className="project-menu text-center pt-25">
                  <ul>
                      <li data-filter="*" className="active">All</li>
                      <li data-filter=".business">Business</li>
                      <li data-filter=".finance">Finance</li>
                      <li data-filter=".corporate">Corporate</li>
                  </ul>
              </div>
          </div>
      </div>
      <div className="row grid">
          <div className="col-lg-4 col-md-6 business finance">
              <div className="singel-project mt-50 text-center">
                  <div className="image">
                      <img src="/images/project/pj-1.jpg" alt="Project"/>
                  </div>
                  <div className="content">
                      <ul className="mb-25">
                        <li><a className="project-popup" href="/images/project/pj-1.jpg" aria-label="button" ><i className="flaticon-full-screen"></i></a></li>
                        <li><a href="project-details.html" aria-label="button"><i className="flaticon-link"></i></a></li>
                      </ul>
                      <a href="/"><h4>Rural Tower</h4></a>
                      <span>25 June, 2018</span>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 corporate">
              <div className="singel-project mt-50 text-center">
                  <div className="image">
                      <img src="/images/project/pj-2.jpg" alt="Project"/>
                  </div>
                  <div className="content">
                      <ul className="mb-25">
                <li><a className="project-popup" href="/images/project/pj-2.jpg" aria-label="button"><i className="flaticon-full-screen"></i></a></li>
                <li><a href="project-details.html" aria-label="button"><i className="flaticon-link"></i></a></li>
                      </ul>
                      <a href="/"><h4>Rural Tower</h4></a>
                      <span>25 June, 2018</span>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 finance">
              <div className="singel-project mt-50 text-center">
                  <div className="image">
                      <img src="/images/project/pj-3.jpg" alt="Project"/>
                  </div>
                  <div className="content">
                      <ul className="mb-25">
                <li><a className="project-popup" href="/images/project/pj-3.jpg" aria-label="button"><i className="flaticon-full-screen"></i></a></li>
                <li><a href="project-details.html"><i className="flaticon-link" aria-label="button"></i></a></li>
                      </ul>
                      <a href="/"><h4>Rural Tower</h4></a>
                      <span>25 June, 2018</span>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 business">
              <div className="singel-project mt-50 text-center">
                  <div className="image">
                      <img src="/images/project/pj-4.jpg" alt="Project"/>
                  </div>
                  <div className="content">
                      <ul className="mb-25">
                <li><a className="project-popup" href="/images/project/pj-4.jpg" aria-label="button"><i className="flaticon-full-screen"></i></a></li>
                <li><a href="project-details.html" aria-label="button"><i className="flaticon-link"></i></a></li>
                      </ul>
                      <a href="/"><h4>Rural Tower</h4></a>
                      <span>25 June, 2018</span>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 corporate">
              <div className="singel-project mt-50 text-center">
                  <div className="image">
                      <img src="/images/project/pj-5.jpg" alt="Project"/>
                  </div>
                  <div className="content">
                      <ul className="mb-25">
                <li><a className="project-popup" href="/images/project/pj-5.jpg" aria-label="button"><i className="flaticon-full-screen"></i></a></li>
                <li><a href="project-details.html" aria-label="button"><i className="flaticon-link"></i></a></li>
                      </ul>
                      <a href="/"><h4>Rural Tower</h4></a>
                      <span>25 June, 2018</span>
                  </div>
              </div>
          </div>
          <div className="col-lg-4 col-md-6 business">
              <div className="singel-project mt-50 text-center">
                  <div className="image">
                      <img src="/images/project/pj-1.jpg" alt="Project"/>
                  </div>
                  <div className="content">
                      <ul className="mb-25">
                <li><a className="project-popup" href="/images/project/pj-1.jpg" aria-label="button"><i className="flaticon-full-screen"></i></a></li>
                <li><a href="project-details.html" aria-label="button"><i className="flaticon-link"></i></a></li>
                      </ul>
                      <a href="/"><h4>Rural Tower</h4></a>
                      <span>25 June, 2018</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-lg-12">
              <div className="project-more text-center mt-50">
                  <a className="main-btn" href="# ">View more</a>
              </div>
          </div>
      </div>
    </div>
  </section>
)}

export default Projects