import React from 'react'
import SingleBogMt from '../single-blog-mt'
import Pagination from '../pagination'

const SingleBlog = ({ posts, numPages, currentPage}) => {
    return (
        <>
            <div class="row justify-content-center">
                {posts.map(post => {
                    return(
                        <div class="col-md-6 col-sm-9">
                            <SingleBogMt post = {post} key={post.id}/>
                        </div>
                    )
                })} 
            </div> 
            <div class="row">
                <Pagination numPages={numPages} currentPage={currentPage} />
            </div> 
        </>
                
    )
}

export default SingleBlog
