import React from 'react'

const LatestNews = () => (
  <section id="latest-news" className="pt-120 pb-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-20">
            <h3>Latest News</h3>
            <div className="underline">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-10">
          <div className="singel-news mt-30">
            <div className="news-thumb">
              <img src="/images/news/n-1.jpg" alt="Latest News"/>
            </div>
              <div className="news-content">
                <div className="share">
                <a href="# " aria-label="button"><i className="flaticon-share"></i></a>
                </div>
                <a href="blog-details-right-sidebar.html" className="mb-15"><h4>Build your dream with us!</h4></a>
                <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat volutpat odio.</p>
              </div>
              <div className="date-details">
              <span className="date"><a href="# " aria-label="button">July 25, 18</a></span>
                <span className="details"><a href="blog-details-right-sidebar.html">View Detail <i className="flaticon-right-arrow"></i></a></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="singel-news mt-30">
              <div className="news-thumb">
                <img src="/images/news/n-2.jpg" alt="Latest News"/>
              </div>
                <div className="news-content">
                  <div className="share">
                <a href="# " aria-label="button"><i className="flaticon-share"></i></a>
                  </div>
                  <a href="blog-details-right-sidebar.html" className="mb-15"><h4>Build your dream with us!</h4></a>
                  <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat volutpat odio.</p>
                </div>
                <div className="date-details">
              <span className="date"><a href="# " aria-label="button">July 25, 18</a></span>
                  <span className="details"><a href="blog-details-right-sidebar.html">View Detail <i className="flaticon-right-arrow"></i></a></span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="singel-news mt-30">
                <div className="news-thumb">
                  <img src="/images/news/n-3.jpg" alt="Latest News"/>
                </div>
                  <div className="news-content">
                    <div className="share">
                    <a href="# " aria-label="button"><i className="flaticon-share"></i></a>
                    </div>
                    <a href="blog-details-right-sidebar.html" className="mb-15"><h4>Build your dream with us!</h4></a>
                    <p className="mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat volutpat odio.</p>
                  </div>
                  <div className="date-details">
                    <span className="date"><a href="# " aria-label="button">July 25, 18</a></span>
                    <span className="details"><a href="blog-details-right-sidebar.html">View Detail <i className="flaticon-right-arrow"></i></a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </section>
)

export default LatestNews