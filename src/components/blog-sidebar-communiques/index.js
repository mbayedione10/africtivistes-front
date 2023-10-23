import React from 'react'
import SingleBlog from './single-blog'

const BlogSidebar = ({ posts, numPages, currentPage}) => {
    return (
        <section id="blog-grid" className="">
        <div className="container">
                    <SingleBlog posts={posts} numPages={numPages} currentPage={currentPage} />
        </div>
        </section>
    )
}

export default BlogSidebar

