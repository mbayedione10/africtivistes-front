import React from 'react'
import SingleBogMt from '../single-blog-mt'

const SingleBlog = ({ posts, numPages, currentPage}) => {
    return (
        <div className="row justify-content-center">
                {posts.map(post => {
                    return(
                        <div className="col-lg-4 col-md-6 col-sm-9">
                        <SingleBogMt post = {post} key={post.id}/>
                        </div>
                    )
                })} 
            </div> 
                
    )
}

export default SingleBlog
