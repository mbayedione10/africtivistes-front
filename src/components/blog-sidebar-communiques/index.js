import React from 'react'
import Search from './search'
import RecentPost from './recent-post'
import Category from './category'
import Tags from './tags'
import Subscribe from './subscribe'
import SingleBlog from './single-blog'

const BlogSidebar = ({ posts,categs,tagues, numPages, currentPage}) => {
    return (
        <section id="blog-grid" className="">
        <div className="container">
                    <SingleBlog posts={posts} numPages={numPages} currentPage={currentPage} />
        </div>
        </section>
    )
}

export default BlogSidebar

