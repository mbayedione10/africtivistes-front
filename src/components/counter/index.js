import React from 'react'

import { ImportScript } from '../../services'

const Counter = () => {

  ImportScript("/js/load/counter.js");

  return (<section id="counter-part-2">
    <div className="counter-part-2 pt-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span className="counter">1750</span>
              <p>Project Completed</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span className="counter">750</span>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span className="counter">17</span>
              <p>Awards Won</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span><span className="counter">7</span>M+</span>
              <p>Social Follower</p>
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
              <img src="/images/video.jpg" alt="Video"/>
                <div className="content">
                <a className="video-popup" href="https://www.youtube.com/watch?v=2uA4XOmsrrA" aria-label="button"><i className="flaticon-music-player-play"></i></a>
                </div>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)}

export default Counter