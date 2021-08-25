import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleBogMt = () => {
    return (
        <div class="single-blog mt-50">
            <div class="blog-image">
                <img src="/images/blog/blog-grid/b-1.jpg" alt="Blog"/>
            </div>
            <div class="blog-content">
            <   div class="date">
                    <ul>
                        <li><a href="#"><i class="flaticon-calendar"></i> 25 June, 2018</a></li>
                        <li><a href="#"><i class="flaticon-folder"></i> Finance</a></li>
                    </ul>
                </div>
                <div class="content">
                    <a href="blog-details-right-sidebar.html" class="mb-15"><h4>Ui design is not same with ux</h4></a>
                    <p class="mb-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="blog-details-right-sidebar.html"><FormattedMessage id ="readMore"/> <i class="fa fa-angle-right"></i></a>
                </div>
            </div>
        </div> 
    )
}

export default injectIntl(SingleBogMt)
