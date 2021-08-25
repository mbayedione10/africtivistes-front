import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"


const Category = () => {
    return (
        <div class="col-lg-12 col-md-8">
        <div class="blog-catagory mt-50 rounded">
            <div class="title mb-15">
                <h4><FormattedMessage id ="category"/></h4>
            </div> 
            <ul>
                <li><a href="#">Technology <span>(32)</span></a></li>
                <li><a href="#">Finance <span>(25)</span></a></li>
                <li><a href="#">Web Design <span>(17)</span></a></li>
                <li><a href="#">Consultation <span>(03)</span></a></li>
                <li><a href="#">Development <span>(13)</span></a></li>
            </ul>
        </div> 
    </div>
    )
}

export default injectIntl(Category)
