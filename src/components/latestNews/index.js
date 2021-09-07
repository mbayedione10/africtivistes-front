import React from 'react'
import SingleNews from './single-news'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const LatestNews = ({posts}) => {
return(
  <section id="latest-news" className="pt-120 pb-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-20">
            <h3><FormattedMessage id="latestnews"/> </h3>
              <div className="underline">
                <span></span>
                <span></span>
              </div>
          </div>
        </div>
      </div>
      <SingleNews posts={posts}/>
    </div>
  </section>

)
}

export default LatestNews