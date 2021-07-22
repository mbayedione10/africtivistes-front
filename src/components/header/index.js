import * as React from "react"
import PropTypes from "prop-types"

import Top from './top'
import Menu from './menu'

const Header = ({ translation }) => (
  <header id="header-part">
    <Top translation={translation}/>
    <Menu/>
  </header>
)

Header.propTypes = {
  translation: PropTypes.string,
}

Header.defaultProps = {
  translation: ``,
}

export default Header
