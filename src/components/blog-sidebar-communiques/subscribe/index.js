import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"


const Subscribe = ({intl}) => {
    return (
        <div class="col-lg-12 col-md-8">
        <div class="blog-subscribe mt-50 rounded">
            <div class="title mb-25">
                <h4><FormattedMessage id="subscribe"/></h4>
            </div> 
            <div class="subscribe-form">
                <form action="#">
                    <input type="email" placeholder= {intl.formatMessage({id:"enterEmail"})}/>
                    <button type="button"><i class="flaticon-send"></i></button>
                </form>
            </div>
        </div> 
    </div>
    )
}

export default injectIntl(Subscribe)
