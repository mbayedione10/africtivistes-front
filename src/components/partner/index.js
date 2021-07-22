import React from 'react'

import {ImportScript} from '../../services'

const Partner = () => {

  ImportScript("/js/load/partner.js");

  return (<section id="partner-part" className="pt-55 pb-55">
    <div className="container">
        <div className="row partner-active">
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/p-1.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/p-2.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/p-3.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/p-4.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/p-5.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/p-1.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/p-2.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/p-3.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/p-4.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/p-5.png" alt="Partner"/>
                </div>
            </div> 
        </div>
    </div>
  </section>
)
}

export default Partner