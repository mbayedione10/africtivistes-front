import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const Features = () => (
  <section id="features-part-2" className="featuera-2 pt-100 pb-125">
    <div className="container">
    <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="section-title text-center pb-15">
                        <h3><FormattedMessage id="projetEnCours"/></h3>
                        <div className="underline">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="singel-features-2 text-center mt-30">
            <div className="icon pb-20">
              {/* <i className="flaticon-global"></i> */}
              <img src="/images/acap-pt.jpg" alt="Logo" />
            </div>
            <div className="content pl-20">
              <h5 className="mb-20"><FormattedMessage id="acap"/></h5>
              <p className="mb-15"><FormattedMessage id="acapArticle"/></p>
              {/* <a href="/"><FormattedMessage id="readMore"/><i className="fa fa-angle-right"></i></a> */}
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="singel-features-2 text-center mt-30">
            <div className="icon pb-20">
              {/* <i className="flaticon-shopping"></i> */}
              <img src="/images/log-pt.jpg" alt="Logo" />

            </div>
            <div className="content pl-20">
              <h5 className="mb-20"><FormattedMessage id="log"/></h5>
              <p className="mb-15"><FormattedMessage id="logArticle"/></p>
              {/* <a href="/"><FormattedMessage id="readMore"/> <i className="fa fa-angle-right"></i></a> */}
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="singel-features-2 text-center mt-30">
            <div className="icon pb-20">
              {/* <i className="flaticon-creative-idea"></i> */}
              <img src="/images/cpa-pt.jpg" alt="Logo" />
            </div>
            <div className="content pl-20">
              <h5 className="mb-20"><FormattedMessage id="cpa"/></h5>
              <p className="mb-15"><FormattedMessage id="cpaArticle"/></p>
              {/* <a href="/"><FormattedMessage id="readMore"/><i className="fa fa-angle-right"></i></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Features