import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const Tags = () => {
    return (
        <div class="col-lg-12 col-md-8">
        <div class="blog-tags mt-50 rounded">
            <div class="title mb-25">
                <h4><FormattedMessage id="tags"/></h4>
            </div> 
            <ul>
                <li><a href="#">Analytics</a></li>
                <li><a href="#">Firm</a></li>
                <li><a href="#">Logo</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Tech</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Tech</a></li>
                <li><a href="#">Business</a></li>
            </ul>
        </div> 
    </div>
    )
}

export default injectIntl(Tags)
