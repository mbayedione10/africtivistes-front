import React from 'react'

const About = () => (
  <section id="about-part" className="about-part bg_cover pt-175" style={{backgroundImage:`url(/images/bg-1.jpg`}}>
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-6 col-lg-7 offset-lg-5">
          <div className="about-content">
            <div className="video">
              <a className="video-popup" href="https://www.youtube.com/watch?v=2uA4XOmsrrA" aria-label="button"><i className="flaticon-music-player-play"></i></a>
            </div>
            <div className="about-text">
              <span>WHO WE ARE?</span>
              <h3 className="mb-25">Become a Partner of Our Company</h3>
              <p className="mb-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br/>
              <br/>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="signature">
              <img src="/images/signature.png" alt="Signature"/>
              <h6 className="mt-30">JHON DEO</h6>
              <span>- Senior Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About