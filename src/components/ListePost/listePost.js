import React from 'react'
import SinglePost from './singlePost'

const ListePosts = ({ posts }) => {
    return (
        <section id="category-grid" className="">
            <div class="card-deck">
                    {posts.map(post => {
                        return (
                            <div className="col-md-4 mb-4" key={post.id}>
                                <SinglePost post={post} />
                            </div>
                        )
                    })}
                </div>
        </section>
    )
}

export default ListePosts

