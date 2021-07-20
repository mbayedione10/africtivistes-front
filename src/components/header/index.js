import * as React from "react"
import PropTypes from "prop-types"

import Top from './top'
import Menu from './menu'

const Header = ({ siteTitle }) => (
  <header id="header-part">
    <Top/>
    <Menu/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
