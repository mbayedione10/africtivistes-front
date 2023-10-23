import React from 'react'
import { ImportScript } from '../../services'
import TestmonialSlide from './testimonial-slide'

const Testimonial2 = ({posts}) => {

  ImportScript("/js/load/testimonial2.js");

  return (<section id="testimonial-part" className="pt-20 pb-30">
    <div className="container">
      <TestmonialSlide posts={posts} />
            </div>
    </section>
)}

export default Testimonial2