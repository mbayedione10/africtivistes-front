import React from 'react'

import { ImportScript } from '../../services'

const Map = () => {
  
  ImportScript("/js/map-script.js");

  return (<section id="contact-map">

  </section>
)}

export default Map