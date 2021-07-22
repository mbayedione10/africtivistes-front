import * as React from "react"

import Francais from './francais'
import English from './English'

const Menu = () => (
  <>
    <div className="header-nemu">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-11 order-last order-lg-first">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img src="/images/logo.svg" alt="Logo" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <Francais/>
                  <English/>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-lg-1 order-first order-lg-last">
            <div className="search-icon text-right">
              <a id="search" href="/"><i className="fa fa-search" aria-label="search"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Menu