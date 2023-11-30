import React from 'react'
import SingleBogMt from '../single-blog-mt'

const SingleBlog = ({ posts}) => {
    return (
        <>
            <div class="row justify-content-center">
                {posts.map(post => {
                    return(
                        <div>
                            <SingleBogMt post = {post} key={post.id}/>
                        </div>
                    )
                })} 
            </div> 
        </>
    )
}

export default SingleBlog
