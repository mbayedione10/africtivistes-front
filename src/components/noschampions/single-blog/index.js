import React from 'react'
import SingleBogMt from '../single-blog-mt'

const SingleBlog = ({ posts}) => {
    return (
        <div className="container">
        

                                {posts.map(post => {
                    return(
                        <div className="single-blog-list mt-20">
                            <SingleBogMt post = {post} key={post.id}/>
                        </div>
                    )
                })} 
            </div> 
    )
}

export default SingleBlog
