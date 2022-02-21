import React from 'react'
import {FormattedMessage } from "gatsby-plugin-react-intl"
import ContainerPEC from './container-projet-en-cours'

const Features = ({projects}) => (
  <section id="features-part-2" className="featuera-2 pt-100 pb-125">
    <div className="container">
      <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center pb-15">
                        <h3><FormattedMessage id="projetEnCours"/></h3>
                        <div className="underline">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
        </div>
        <ContainerPEC projects={projects}/>
    </div>
  </section>
)

export default Features