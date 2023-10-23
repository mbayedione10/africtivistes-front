import React from 'react'
import ContainerPEC from './container-projet-en-cours'

const Features = ({projects}) => (
  <section id="features-part-2" className="featuera-2 pt-30 pb-30" text-align="center">

    <div className="container">
        <ContainerPEC projects={projects}/>
    </div>
  </section>
)

export default Features