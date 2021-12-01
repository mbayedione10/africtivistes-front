import React from 'react'
import {FormattedMessage} from "gatsby-plugin-react-intl"
import {ImportScript} from '../../services'

const Partner = () => {

  ImportScript("/js/load/partner.js");

  return (<section id="partner-part" className="pt-55 pb-55">
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-20">
            <h3><FormattedMessage id="partner"/> </h3>
              <div className="underline">
                <span></span>
                <span></span>
              </div>
          </div>
        </div>
      </div>
        <div className="row partner-active">

            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/wacsi.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/AFDB.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/cfi.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/wathi.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/raddho.jpg" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/sunu2012.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/nalla1.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/osiwa.png" alt="Partner"/>
                </div>
            </div> 

            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/africajom.jpg" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/clemson.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/article19.jpg" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/africansrissing.png" alt="Partner"/>
                </div>
            </div> 
        </div>

        <div className="row partner-active">
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/cnn.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/endcode.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/oxfam.png" alt="Partner"/>
                </div>
            </div> 

 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/internews.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/notreafrik.png" alt="Partner"/>
                </div>
            </div> 

            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/internetsansfrontieres.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/guineevote.png" alt="Partner"/>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/irex.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/kansas.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/lanets.png" alt="Partner"/>
                </div>
            </div> 
        </div>
    
        <div className="row partner-active">
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/mondoblog.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/ndi.png" alt="Partner"/>
                </div>
            </div>
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/globalvoices.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/pagespeed.png" alt="Partner"/>
                </div>
            </div> 

            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/ushahidi.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/voa.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/pplaaf.png" alt="Partner"/>
                </div>
            </div> 
            <div className="col-lg-2">
                <div className="single-partner">
                    <img src="/images/partner-logo/image.png" alt="Partner"/>
                </div>
            </div> 
        </div>
    </div>
  </section>
)
}

export default Partner