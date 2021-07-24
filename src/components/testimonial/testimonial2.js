import React from 'react'

import { ImportScript } from '../../services'

const Testimonial2 = () => {

  ImportScript("/js/load/testimonial2.js");

  return (<section id="testimonial-part" className="pt-120 pb-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-15">
            <h3>Our Team Member</h3>
            <div className="underline">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row testimonial-slide-2">
        <div className="col-lg-4">
          <div className="single-testimonial mt-35">
            <div className="testimonial-content">
              <p>Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at. Mauris accumsan eros eget libero posuere.</p>
            </div>
            <div className="testimonial-author">
              <div className="author-image">
                <img src="/images/testmonials/ts-1.jpg" alt="author"/>
                            </div>
                <div className="author-name pl-100">
                  <h6>Mark Parker</h6>
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-testimonial mt-35">
              <div className="testimonial-content">
                <p>Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at. Mauris accumsan eros eget libero posuere.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="/images/testmonials/ts-2.jpg" alt="author"/>
                            </div>
                  <div className="author-name pl-100">
                    <h6>Mark Parker</h6>
                    <span>UI/UX Designer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-testimonial mt-35">
                <div className="testimonial-content">
                  <p>Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at. Mauris accumsan eros eget libero posuere.</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src="/images/testmonials/ts-3.jpg" alt="author"/>
                            </div>
                    <div className="author-name pl-100">
                      <h6>Mark Parker</h6>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-testimonial mt-35">
                  <div className="testimonial-content">
                    <p>Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at. Mauris accumsan eros eget libero posuere.</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src="/images/testmonials/ts-2.jpg" alt="author"/>
                            </div>
                      <div className="author-name pl-100">
                        <h6>Mark Parker</h6>
                        <span>UI/UX Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
)}

export default Testimonial2