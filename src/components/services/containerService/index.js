import React from 'react'
import RowJustify from '../row-justify'

const Container = ({posts}) => {
    return (
        <div className="row justify-content-center">
            {posts.map(post => {
                        return(
                            <RowJustify post = {post} key={post.id} />
                            )
                    })} 
                    
                
            </div>
    )
}

export default Container
