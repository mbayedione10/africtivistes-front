import React from 'react'
import {FormattedMessage } from "gatsby-plugin-react-intl"
import { ImportScript } from '../../services'

const Counter = ({posts}) => {

  ImportScript("/js/load/counter.js");

  return (<section id="counter-part-2" pt-30 pb-30 >
    {/* style={{backgroundImage:`url(/images/slider/ss.jpeg)`}} */}
          <div className="row justify-content-center" style={{backgroundColor: '#f5f5f5'}} >
                <div className="col-lg-6" >
                    <div className="section-title text-center ppt-30 pb-30" >
                    <br></br>
                        <h2><FormattedMessage id="abidjan2021"/></h2>
                        <div className="underline">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
        </div>
    <div className="counter-part-2 pt-80  bg_cover d-flex align-items-center" style={{backgroundImage:`url(/images/elephants.png)`}}>
      <div className="container" >

        <div className="row align-items">
        <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span className="counter">22</span>
              <p><FormattedMessage id="n_pays"/></p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span className="counter">20</span>
              <p><FormattedMessage id="n_part_insti"/></p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span className="counter">120</span>
              <p><FormattedMessage id="n_africtivistes"/> </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span className="counter">111</span>
              <p><FormattedMessage id="n_part_panel"/></p>
            </div>
          </div>
          {/* <div className="col-lg-3 col-sm-6">
            <div className="singel-counter text-center mt-40">
              <span>30</span>
              <p><FormattedMessage id="n_expert"/></p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    <div className="video-area-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="video-2">
              <img src="/images/abidjan2021pf.jpg" alt="Video"/>
                <div className="content">
                {posts.map(post=>(
                  <a  key={post.id} className="video-popup" href={post.link} aria-label="button"><i className="flaticon-music-player-play"></i></a>

              ))}</div>
                        </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </section>
)}
export default Counter