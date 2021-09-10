import React from 'react'
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ImportScript } from '../../services'
import { graphql, StaticQuery } from 'gatsby'
import Container from './container'


const Projects = ({posts}) => {

  ImportScript("/js/load/project.js");

  return (
  <section id="project-part" className="pt-120 pb-130">
    <div className="container">
      <div className="row justify-content-center">
          <div className="col-lg-4">
              <div className="section-title text-center pb-15">
                  <h3><FormattedMessage id="allArticles"/></h3>
                  <div className="underline">
                      <span></span>
                      <span></span>
                  </div>
              </div>
          </div>
        </div>
      <div className="row">
          <div className="col-lg-12">
              <div className="project-menu text-center pt-25">
                  <ul>
                  <li data-filter="*" className="active"><FormattedMessage id="all"/></li>
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
                            <li>{node.name}</li>
                        )}
                    />

                  </ul>
              </div>
          </div>
      </div>
      <div className="row grid">
          <Container posts = {posts}/>
      </div>
      <div className="row">
          <div className="col-lg-12">
              <div className="project-more text-center mt-50">
                  <a className="main-btn" href="# " ><FormattedMessage id="more"/></a>
              </div>
          </div>
      </div>
    </div>
  </section>
)}

export default injectIntl (Projects)