import React from 'react'
import SingleBlog from './single-blog'
import Search from '../search'
import Category from '../blog-sidebar/category'
import RecentPost from '../blog-sidebar/recent-post'
import Tags from '../blog-sidebar/tags'
import Subscribe from '../blog-sidebar/subscribe'

const NosChampions = ({ posts}) => {
    return (
<section id="blog-list" className="pt-25 pb-45">

                <SingleBlog posts={posts} />

        </section>
    )
}

export default NosChampions