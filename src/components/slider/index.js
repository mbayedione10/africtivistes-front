import React from 'react'

import {ImportScript} from '../../services'
import SingleSlider from './single-slider'


const Slider = ({posts, contacts}) => {
  
  ImportScript("/js/load/slider.js")

  return (
        <SingleSlider posts={posts} contacts={contacts}/>
    )
}

export default Slider