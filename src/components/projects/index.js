import React from 'react'
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import { ImportScript } from '../../services'
import Container from './containerProjects'

const Projects = ({posts}) => {
  ImportScript("/js/load/project.js");
  return (
  <section id="project-part" >
    <div className="container">
      <Container posts = {posts}/>
      </div>
  </section>
  
)}

export default injectIntl (Projects)