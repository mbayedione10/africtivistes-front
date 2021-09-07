import React from 'react'

import {ImportScript} from '../../services'
import SingleSlider from './single-slider'


const Slider = ({posts}) => {
  
  ImportScript("/js/load/slider.js")

  return (
        <SingleSlider posts={posts}/>
    )
}

export default Slider