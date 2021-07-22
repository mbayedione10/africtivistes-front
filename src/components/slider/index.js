import React from 'react'

import {ImportScript} from '../../services'

const Slider = () => {
  
  ImportScript("/js/load/slider.js")

  return (
    <section id="slider-part" className="slider-active">
        <div className="single-slider bg_cover d-flex align-items-center" style={{ backgroundImage: `url(/images/slider/s-1.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-10">
                        <div className="slider-content">
                            <h2 className="mb-25" data-animation="bounceInLeft" data-delay="1s">The Best Business <span>Consulting</span> Team</h2>
                            <p className="mb-30" data-animation="fadeInLeft" data-delay="1.5s">Business Consulting offers a wide range of services to businesses either before or during tough financial times. What sets us apart from other firms in the industry is over three decades.</p>
                            <a href="contact.html" className="main-btn" data-animation="fadeInUp" data-delay="2s">contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="single-slider bg_cover d-flex align-items-center" style={{ backgroundImage: `url(/images/slider/s-2.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-10">
                        <div className="slider-content">
                            <h2 className="mb-25" data-animation="bounceInLeft" data-delay="1s">The Best Business <span>Consulting</span> Team</h2>
                            <p className="mb-30" data-animation="fadeInLeft" data-delay="1.5s">Business Consulting offers a wide range of services to businesses either before or during tough financial times. What sets us apart from other firms in the industry is over three decades.</p>
                            <a href="contact.html" className="main-btn" data-animation="fadeInUp" data-delay="2s">contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="single-slider bg_cover d-flex align-items-center" style={{ backgroundImage: `url(/images/slider/s-3.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-10">
                        <div className="slider-content">
                            <h2 className="mb-25" data-animation="bounceInLeft" data-delay="1s">The Best Business <span>Consulting</span> Team</h2>
                            <p className="mb-30" data-animation="fadeInLeft" data-delay="1.5s">Business Consulting offers a wide range of services to businesses either before or during tough financial times. What sets us apart from other firms in the industry is over three decades.</p>
                            <a href="contact.html" className="main-btn" data-animation="fadeInUp" data-delay="2s">contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Slider