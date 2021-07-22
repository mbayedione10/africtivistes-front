import React from 'react'

const Slider = () => (    
  <section id="slider-part" class="slider-active slider-2">
    <div class="single-slider bg_cover d-flex align-items-center" style={{ backgroundImage: `url(/images/slider/s-2.jpg)`}}>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-10">
            <div class="slider-content">
              <h2 class="mb-25" data-animation="bounceInLeft" data-delay="1s">The Best Business <span>Consulting</span> Team</h2>
              <p class="mb-30" data-animation="fadeInLeft" data-delay="1.5s">Business Consulting offers a wide range of services to businesses either before or during tough financial times. What sets us apart from other firms in the industry is over three decades.</p>
              <a href="contact.html" class="main-btn" data-animation="fadeInUp" data-delay="2s">contact us</a>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </section>
)

export default Slider