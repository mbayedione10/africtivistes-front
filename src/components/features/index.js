import React from 'react'
import ContainerPEC from './container-projet-en-cours'

const Features = ({projects}) => (
  <section id="features-part-2" className="featuera-2 pt-30 pb-30" text-align="center">
    <div id="counter-part-3" className="bg_cover pt-20 pb-50" style={{backgroundImage:`url(/images/slider/backgroundplateforme.png)`}}>

    <div className="container" style={{ maxWidth: '1500px' }}>
  <ContainerPEC projects={projects}/>
</div>
    </div>
  </section>
)

export default Features