import React from 'react'
import SingleNews from './single-news'
import {FormattedMessage} from "gatsby-plugin-react-intl"

const LatestNews = ({posts}) => {
return(
  <section id="latest-news" className="pt-30 pb-30">
    <div className="container">
      <SingleNews posts={posts}/>
    </div>
  </section>

)
}

export default LatestNews