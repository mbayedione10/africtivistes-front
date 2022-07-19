import * as React from "react"
import {FormattedMessage, injectIntl} from 'gatsby-plugin-react-intl'

import Social from '../social'
import Menu from "./menu"
import Newsletter from './newsletter'
import Contact from "./contact"
import Copyright from './copyright'

const Footer = () => (
  <>
    <section id="footer-part" className="footer-part pt-70 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-description pt-50">
              <div className="logo mb-20">
                <a href="/">
                  <img src="/images/logo-white.svg" alt="Logo"/>
                </a>
              </div>
              {/* <p className="mb-15"><FormattedMessage id="description" /></p> */}
                <Social/>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <Menu/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <Contact/>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <Newsletter/>
            </div>
            </div>
          </div>
    </section>

    <Copyright/>

    <a href="#header-part" className="back-to-top">
      <i className="flaticon-chevron-up"></i>
    </a>
  </>
)

export default injectIntl(Footer)