import React from "react"
import { IntlContextConsumer, FormattedMessage } from "gatsby-plugin-react-intl"
import SingleBlogMt30 from '../single-blog-mt-30'

import {useRenctPostsEN} from "../../../hooks/query/recentPosts/EN"
import {useRenctPostsFR} from "../../../hooks/query/recentPosts/FR"



const Posts = ({posts}) => {
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

const RecentPost = () => {
  
    const postsEN = useRenctPostsEN()
    const postsFR = useRenctPostsFR()
  
    return (
      <IntlContextConsumer>
        {({ language: currentLocale }) =>
          currentLocale === 'fr' ? <Posts posts={postsFR} /> : <Posts posts={postsEN} />}
      </IntlContextConsumer>
    )
  }

export default RecentPost