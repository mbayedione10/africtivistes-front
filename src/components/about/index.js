import React from 'react'
import {FormattedMessage} from "gatsby-plugin-react-intl"

const About = () => (
  <section id="about-part" className="about-part bg_cover pt-175" style={{backgroundImage:`url(/images/pdg.png`}}>
    
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-6 col-lg-7 offset-lg-5">
          <div className="about-content">
            <div className="video">
              <a className="video-popup" href="https://www.youtube.com/watch?v=0SIEc3CWrh4" aria-label="button"><i className="flaticon-music-player-play"></i></a>
            </div>
            <div className="about-text">
              <h3 className="mb-25"><FormattedMessage id="discours"/></h3>
              <p><FormattedMessage id="chershotes"/>
              <br/><FormattedMessage id="chersafrictivistes"/></p>
              <p className="mb-25"><FormattedMessage id="discourstexte"/><a href="https://abidjan2021.africtivistes.org/blog/discours-du-president-sur-abidjan2021"><FormattedMessage id="readMore"/></a>
              <br/>
              <br/>
              </p>
            </div>
            <div className="signature">
              {/* <img src="/images/signature.png" alt="Signature"/> */}
              <h6 className="mt-30">CHEIKH FALL</h6>
              <span>- <FormattedMessage id="president"/> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About