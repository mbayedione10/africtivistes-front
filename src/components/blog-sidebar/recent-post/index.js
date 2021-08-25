import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"


const RecentPost = () => {
    return (
        <div class="recent-post mt-50 rounded">
        <div class="title">
            <h4><FormattedMessage id="recentPost"/></h4>
        </div> 
        <ul>
            <li>
                <a href="blog-details-right-sidebar.html">
                    <span class="single-post mt-30">
                        <span class="image">
                            <img src="/images/blog/blog-list-sidebar/post/p-1.jpg" alt="post"/>
                        </span>
                        <span class="content pl-85">
                            <h6>Build Up products and Make somthing</h6>
                            <span><i class="flaticon-calendar"></i> 25 June, 2018</span>
                        </span>
                    </span> 
                </a> 
            </li>
            <li>
                <a href="blog-details-right-sidebar.html">
                    <span class="single-post mt-30">
                        <span class="image">
                            <img src="/images/blog/blog-list-sidebar/post/p-2.jpg" alt="post"/>
                        </span>
                        <span class="content pl-85">
                            <h6>Build Up products and Make somthing</h6>
                            <span><i class="flaticon-calendar"></i> 25 June, 2018</span>
                        </span>
                    </span> 
                </a> 
            </li>
            <li>
                <a href="blog-details-right-sidebar.html">
                    <span class="single-post mt-30">
                        <span class="image">
                            <img src="/images/blog/blog-list-sidebar/post/p-3.jpg" alt="post"/>
                        </span>
                        <span class="content pl-85">
                            <h6>Build Up products and Make somthing</h6>
                            <span><i class="flaticon-calendar"></i> 25 June, 2018</span>
                        </span>
                    </span> 
                </a> 
            </li>
        </ul>
    </div>

    )
}

export default injectIntl(RecentPost)
