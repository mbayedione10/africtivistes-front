import React from 'react'
import SingleBlogMt30 from '../single-blog-mt-30'
import {FormattedMessage } from "gatsby-plugin-react-intl"

const RecentPost = ({posts,numPages,currentPage}) => {
    return (
        <div class="recent-post mt-50 rounded">
            <div class="title">
                <h4><FormattedMessage id="recentPost"/></h4>
            </div>                 
            {posts.map(post => {
                    return(
                            <SingleBlogMt30 post = {post} key={post.id} numPages={numPages} currentPage={currentPage}/>
                    )
                })}
        </div>
    )
}

export default RecentPost