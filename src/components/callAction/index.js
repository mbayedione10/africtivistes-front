import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const CallAction = () => (
  <section id="call-to-action" className="pt-20 pb-50 gray-bg">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-10 col-lg-6 col-md-12 col-sm-12">
          <div className="call-action-cont pt-30 text-center text-lg-left">
            <h2><FormattedMessage id ="callAction"/></h2>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
          <div className="call-action-btn pt-30 text-center">
            <a href="/" className="main-btn"><FormattedMessage id="contact"/></a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CallAction