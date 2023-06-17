import React from 'react'
import Search from './search'
import RecentPost from './recent-post'
import Category from './category'
import Tags from './tags'
import Subscribe from './subscribe'
import SingleBlog from './single-blog'

const BlogSidebar = ({ posts,categs,tagues, numPages, currentPage}) => {
    return (
    <section id="blog-sidebar" className="pt-25 pb-25">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <SingleBlog posts={posts} numPages={numPages} currentPage={currentPage} />
                </div>
            </div> 
        </div>
        </section>
    )
}

export default BlogSidebar

