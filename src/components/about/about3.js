import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const About3 = ({ content, picture}) => {
  
  const image = getImage(picture)

  return(<section id="company-about" className="pt-30 pb-30">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="company-about-cont pt-45" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          <div className="col-lg-6 pt-50">
            <div className="company-about-image">
            <GatsbyImage image={image} alt={picture.altText}/>
            <div class="years-experience mt-45">
              <ul>
                <li><a href="/"><h3>Nos valeurs</h3></a></li>
                <li><a href="/"><h3>Notre Histoire</h3></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)}

export default About3