import React from 'react'
import SinglePost from './SinglePost'

const ListePosts = ({ posts, isBlogPostPage }) => {
    
    return (    
        <div className='container'> 
            <div class="card-deck">
                    {posts.map(post => {
                        return (
                            <div className={isBlogPostPage ? "col-md-3" : "col-md-6 mb-4"} key={post.id}>
                               
                                    <SinglePost post={post} />
                                
                            </div>
                        )
                    })}

            </div>
        </div>    

    )
}

export default ListePosts

