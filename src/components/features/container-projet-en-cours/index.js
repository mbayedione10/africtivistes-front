import React from 'react'
import ColLgMd from './col-lg-md'

const ContainerPEC = ({posts}) => {
    return (
        <div className="row justify-content-center">

            {posts.map(post => {
                        return(
                            <ColLgMd post = {post} key={post.id} />
                            )
                    })}
        </div>
        
    )
}

export default ContainerPEC
