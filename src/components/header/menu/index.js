import * as React from "react"

const Menu = () => (
  <>
    {/* ====== HEADER MENU PART START ====== */}

    <div className="header-nemu">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-11 order-last order-lg-first">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
                <img src="images/logo.svg" alt="Logo" />
              </a> {/* -- logo -- */}
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="active" href="/">Home</a>
                    <ul className="sub-menu">
                      <li><a href="/">Home 01</a></li>
                      <li><a href="/">Home 02</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a href="/">Services</a>
                    <ul className="sub-menu">
                      <li><a href="/">Services</a></li>
                      <li><a href="/">Service Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/">Projects</a>
                    <ul className="sub-menu">
                      <li><a href="/">Projects</a></li>
                      <li><a href="/">Project Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/">Pages</a>
                    <ul className="sub-menu">
                      <li><a href="/">Team</a></li>
                      <li><a href="/">Team Details</a></li>
                      <li><a href="/">Faq's</a></li>
                      <li><a href="/">pricing</a></li>
                      <li><a href="/">Testimonial</a></li>
                      <li><a href="/">Company History</a></li>
                      <li><a href="/">404 Page</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/">Shop</a>
                    <ul className="sub-menu">
                      <li><a href="/">Shop</a></li>
                      <li><a href="/">Shop Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/">blog</a>
                    <ul className="sub-menu">
                      <li><a href="/">blog grid</a></li>
                      <li><a href="/">blog grid Sidebar</a></li>
                      <li><a href="/">blog list</a></li>
                      <li><a href="/">blog list Sidebar</a></li>
                      <li><a href="/">blog Details left Sidebar</a></li>
                      <li><a href="/">blog Details rihght Sidebar</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/">contact</a>
                    <ul className="sub-menu">
                      <li><a href="/">contact 01</a></li>
                      <li><a href="/">contact 02</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav> {/*-- nav --*/}
          </div>
          <div className="col-lg-1 order-first order-lg-last">
            <div className="search-icon text-right">
              <a id="search" href="/"><i className="fa fa-search" aria-label="search"/></a>
            </div> {/*-- search icon --*/}
          </div>
        </div> {/*-- row --*/}
      </div> {/*-- container --*/}
    </div>

    {/* ====== HEADER MENU PART ENDS ====== */}
  </>
)

export default Menu