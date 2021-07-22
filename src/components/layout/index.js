import * as React from "react"
// import { Helmet } from "react-helmet"
// import { withPrefix } from "gatsby"
import PropTypes from "prop-types"

import Header from "../header"
import Search from '../search'
import Footer from "../footer"

const Layout = ({ children, translation }) => {
  return (
    <>
      <Header translation={translation} />
      <Search/>
      {children}
      <Footer/>
      {/* <Helmet>
        <script src={withPrefix('/js/vendor/modernizr-3.6.0.min.js')} type="text/javascript" />
        <script src={withPrefix('/js/vendor/jquery-1.12.4.min.js')} type="text/javascript" />
        <script src={withPrefix('/js/bootstrap.min.js')} type="text/javascript" />
        <script src={withPrefix('/js/slick.min.js')} type="text/javascript" />
        <script src={withPrefix('/js/jquery.magnific-popup.min.js')} type="text/javascript" />
        <script src={withPrefix('/js/isotope.pkgd.min.js')} type="text/javascript" />
        <script src={withPrefix('/js/imagesloaded.pkgd.min.js')} type="text/javascript" />
        <script src={withPrefix('/js/waypoints.min.js')} type="text/javascript" />
        <script src={withPrefix('/js/jquery.counterup.min.js')} type="text/javascript" />
        <script src={withPrefix('/js/jquery.nice-number.min.js')} type="text/javascript" />
        <script src={withPrefix('/js/validator.min.js')} type="text/javascript" />
        <script src={withPrefix('/js/ajax-contact.js')} type="text/javascript" />
        <script src={withPrefix('/js/main.js')} type="text/javascript" />
        <script src={withPrefix('https://maps.googleapis.com/maps/api/js?key=AIzaSyDC3Ip9iVC0nIxC6V14CKLQ1HZNF_65qEQ')} type="text/javascript" />
        <script src={withPrefix('/js/map-script.js')} type="text/javascript" />
      </Helmet> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
