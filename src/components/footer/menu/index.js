import React from 'react'
import Francais from './francais'
import English from './English'

const Menu = () => (
  <div className="footer-link pt-45 pl-50">
    <div className="title mb-30">
      <h4>Menu</h4>
      <nav className="navbar navbar-expand-lg">
              <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <Francais/>
                  <English/>
              </div>
            </nav>
    </div>
    </div>
)

export default Menu