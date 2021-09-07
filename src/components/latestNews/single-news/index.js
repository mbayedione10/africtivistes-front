import React from 'react'
import SingleNewsMt from '../single-news-mt'

const SingleNews = ({posts}) => {
    return (
            <div className="row justify-content-center"> 
                    {posts.map(post => {
                        return(
                            <SingleNewsMt post = {post} key={post.id} />
                            )
                    })} 
            </div>
    )
}

export default SingleNews