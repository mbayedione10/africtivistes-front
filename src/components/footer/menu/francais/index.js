import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { IntlContextConsumer, Link } from "gatsby-plugin-react-intl"

import { flatListToHierarchical } from '../../../../services'

const renderMenu = (data) => {
  const menu = flatListToHierarchical(data)
  return (
    <ul>
      {menu.map((item, index) => (
        <li className="nav-item" key={index}>
          <Link activeClassName={'active'} to={item.path}>
            {item.label}
          </Link>
          {item.children && item.children.length > 0 && (
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
    </ul>)
}

const Francais = () => {
  return (
    <IntlContextConsumer>
        {({ language: currentLocale }) => (
            currentLocale === 'fr' && <StaticQuery query={graphql`
                    {
                      wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
                        menuItems {
                          nodes {
                            id
                            label
                            path
                            parentId
                          }
                        }
                      }
                    }`
            }
                render={(data) => renderMenu(data.wpMenu.menuItems.nodes)}
            />
        )}
    </IntlContextConsumer>
  )
}

export default Francais