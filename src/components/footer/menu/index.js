import React from 'react'
import { Link } from "gatsby-plugin-react-intl"
import Francais from './francais'
import English from './English'

const Menu = () => (
  <div className="footer-link pt-45 pl-50">
    <div className="title mb-30">
      <h4>Menu</h4>
    </div>
          <div className="col-lg-11 order-last order-lg-first">
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