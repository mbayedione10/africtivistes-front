import React from 'react'
import SingleSliderBgcover from '../single-slider-bgcover'

const SingleSlider = ({posts}) => {
    return (

        <section id="slider-part" className="slider-active">

        {posts.map(post => {
            return(
                <SingleSliderBgcover post = {post} key={post.id} />
                )
        })} 
    </section>
    )
}

export default SingleSlider
