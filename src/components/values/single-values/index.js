import React from 'react'
import SingleValuesMt from '../single-values-mt'

const SingleValues = ({posts}) => {
    return (
        <div class="our-single-history pb-80">
                {posts.map(post => {
                    return(
                        <div class="row justify-content-center">
                        <SingleValuesMt post = {post} key={post.id}/>
                        </div>
                    )
                })} 
        </div>
    )
}

export default SingleValues
