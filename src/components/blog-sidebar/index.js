import React from 'react'
import Search from './search'
import RecentPost from './recent-post'
import Category from './category'
import Tags from './tags'
import Subscribe from './subscribe'
import SingleBlog from './single-blog'

const BlogSidebar = ({ posts, numPages, currentPage}) => {
    return (
       <section id="blog-sidebar" className="pt-80 pb-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                  <SingleBlog posts={posts} numPages={numPages} currentPage={currentPage} />
                </div>
                <div className="col-lg-4">
                <div class="blog-sidebar ">
                    <div class="row justify-content-center">
                        <div class="col-lg-12 col-md-8">
                            <Search/>
                            <RecentPost posts={posts} numPages={numPages} currentPage={currentPage}/>
                            <Category posts={posts}/>
                            <Tags/>
                            <Subscribe/>
                        </div> 
                    </div>
                </div>
                </div> 
            </div> 
        </div>
        </section>
    )
}

export default BlogSidebar

