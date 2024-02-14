import React from 'react'
import Pagination from '../pagination'
import SinglePost from './SinglePost'

const ListePosts = ({ posts, totalPages, currentPage, categories }) => {
    const basePath = `/${categories}/`
    return (
        <section id="category-grid" className="">
            <div class="card-deck">
                    {posts.map(post => {
                        return (
                            <div className="col-md-6 mb-4" key={post.id}>
                                <SinglePost post={post} />
                            </div>
                        )
                    })}
                </div>
            <div class="row justify-content-center">
                <Pagination totalPages={totalPages} currentPage={currentPage} basePath={basePath}/>
            </div>  

        </section>
    )
}

export default ListePosts

