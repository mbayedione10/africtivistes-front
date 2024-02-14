import React from "react"
import { IntlContextConsumer, FormattedMessage } from "gatsby-plugin-react-intl"
import SinglePost from './SinglePostSidebar'

import {useRenctPostsEN} from "../../hooks/query/recentPosts/EN"
import {useRenctPostsFR} from "../../hooks/query/recentPosts/FR"



const ListePostSidebar = ({posts}) => {
    return (
        <div class="recent-post mt-50 rounded">
            <div class="title">
                <h4><FormattedMessage id="recentPost"/></h4>
            </div>                 
            {posts.map(post => {
                return(
                    <SinglePost post = {post} key={post.id}/>
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
                currentLocale === 'fr' ? <ListePostSidebar posts={postsFR} /> : <ListePostSidebar posts={postsEN} />}
      </IntlContextConsumer>
    )
  }

export default RecentPost