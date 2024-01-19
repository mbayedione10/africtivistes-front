import React from 'react'
import { injectIntl } from "gatsby-plugin-react-intl"
import { ImportScript } from '../../services'
import Container from './containerProjects'

const Projects = ({ posts, categoryNames = [], tagNames = [] }) => {
  const filteredPosts = posts
    .filter(post => (
      (categoryNames.length === 0 || (post.node.categories && post.node.categories.nodes.some(category => categoryNames.includes(category.name)))) &&
      (tagNames.length === 0 || (post.node.terms && post.node.terms.nodes.some(term => tagNames.includes(term.name))))
    ))
    .slice(0, 4);
  
  ImportScript("/js/load/project.js");
  return (
  <section id="project-part" className="pt-30 pb-30">
    <div className="container">
        <Container posts={filteredPosts}/>
      </div>
  </section>
  
)}

export default injectIntl (Projects)