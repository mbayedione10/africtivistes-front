import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { ImportScript } from '../../services'

const Counter = () => {

  ImportScript("/js/load/counter.js");

  return (<section id="counter-part-2">
          <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center pb-15">
                        <h3><FormattedMessage id="ouaga2018"/></h3>
                        <div className="underline">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
        </div>
    <div className="counter-part-2 pt-80">
      <div className="container">

        <div className="row align-items-center">
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span className="counter">200</span>
              <p><FormattedMessage id="n_africtivistes"/> </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span className="counter">40</span>
              <p><FormattedMessage id="n_pays"/></p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span className="counter">2015</span>
              <p><FormattedMessage id="n_date_creation"/></p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span>2022</span>
              <p><FormattedMessage id="n_date_creation"/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="video-area-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="video-2">
              <img src="/images/ouaga2018.png" alt="Video"/>
                <div className="content">
                <a className="video-popup" href="https://www.youtube.com/playlist?list=PLQjNVx8Nv7w-GkhYtFN9DwqYcpovqcyu0" aria-label="button"><i className="flaticon-music-player-play"></i></a>
                </div>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)}
export default Counter