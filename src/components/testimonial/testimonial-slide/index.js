import React from 'react'
import SingleTestimonial from '../single-testimonial'

const TestmonialSlide = ({posts}) => {
    return (
        <div className="row testimonial-slide-2">
        {posts.map(post => {
                    return(
                        <div className="col-lg-4">
                            <SingleTestimonial post = {post} key={post.id}/>
                        </div>
                    )
                })} 
        </div>
    )
}
export default TestmonialSlide