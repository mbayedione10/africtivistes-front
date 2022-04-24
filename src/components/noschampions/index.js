import React from 'react'
import SingleBlog from './single-blog'

const NosChampions = ({ posts}) => {
    return (
    <section id="noschampions" className="pt-25 pb-25">
        <div className="container">
            <div className="row">
                <div className="col-lg">
                <SingleBlog posts={posts} />
                </div>
            </div> 
        </div>
        </section>
    )
}

export default NosChampions

