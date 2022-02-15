import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import {FormattedMessage } from "gatsby-plugin-react-intl"
import { node } from 'prop-types'


const Category = ({posts}) => {
    return (
        <div class="col-lg-12 col-md-8">
            <div class="blog-catagory mt-50 rounded">
                <div class="title mb-15">
                    <h4><FormattedMessage id ="category"/></h4>
                </div> 
                <ul>
                    <StaticQuery query={graphql`
                        {
                            allWpCategory(sort: {fields: count, order: DESC}) {
                                edges {
                                  node {
                                    name
                                    count
                                  }
                                }
                            }
                        }
                        `}

                        render ={({allWpCategory}) => allWpCategory.edges.map(({node}) =>             
                            node.count && <li><a href="#"> {node.name}<span>({(node.count)})</span></a></li>
                        )}
                    />
                </ul>

            </div> 
        </div>
    )
}

export default Category


