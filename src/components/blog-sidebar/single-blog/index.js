import React from 'react'
import SingleBogMt from '../single-blog-mt'
import Pagination from '../pagination'

const SingleBlog = ({ posts, numPages, currentPage}) => {
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
            <div class="row justify-content-center">
                <Pagination totalPages={numPages} currentPage={currentPage} />
            </div> 
        </>
                
    )
}

export default SingleBlog
