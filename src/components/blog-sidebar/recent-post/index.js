import React from 'react'
import SingleBlogMt30 from '../single-blog-mt-30'
import {FormattedMessage } from "gatsby-plugin-react-intl"
import {useRenctPosts} from "../../../hooks/query/recentPosts"

const RecentPost = () => {
    const posts = useRenctPosts()
    return (
        <div class="recent-post mt-50 rounded">
            <div class="title">
                <h4><FormattedMessage id="recentPost"/></h4>
            </div>                 
            {posts.map(post => {
                return(
                    <SingleBlogMt30 post = {post} key={post.id}/>
                )
            })}
        </div>
    )
}

export default RecentPost