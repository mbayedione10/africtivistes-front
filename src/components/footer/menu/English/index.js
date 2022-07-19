import React from "react"
import { graphql, StaticQuery, Link } from 'gatsby'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"

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

const English = () => {
    return (
        <IntlContextConsumer>
            {({ language: currentLocale }) => (
                currentLocale === 'en' && <StaticQuery query={graphql`
                    {
                      wpMenu(locations: { eq: GATSBY_FOOTER_MENU___EN }) {
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

export default English