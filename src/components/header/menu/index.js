import * as React from "react"
import {graphql, StaticQuery, Link} from 'gatsby'
import {flatListToHierarchical} from '../../../services'

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
                  <StaticQuery query={graphql`
                    {
                      wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
                        id
                        name
                        menuItems {
                          nodes {
                            id
                            label
                            title
                            path
                            parentId
                          }
                        }
                      }
                    }
                  `}
                  render={(data) => {
                    const menu = flatListToHierarchical(data.wpMenu.menuItems.nodes)
                    return (
                      <ul className="navbar-nav">
                        {menu.map((item, index) => (
                            <li className="nav-item" key={index}>
                              <Link activeClassName={'active'} to={item.path}>
                                {item.label}
                              </Link>
                              { item.children && item.children.length > 0 && (
                                <ul className="sub-menu">
                                  {item.children.map((item, index) => (
                                    <li key={index}>
                                      <Link to={item.path}>
                                        {item.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>)
                              }
                            </li>
                          )
                        )}
                      </ul>)}
                  }
                  />
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