import React from 'react'
import { injectIntl } from "gatsby-plugin-react-intl"


const Search = ({intl}) => {
    return (
        <div class="blog-search mt-50">
        <form action="#">
            <input type="search" placeholder= {intl.formatMessage({id:"search"})} />
            <button type="button"><span class="fa fa-search"></span></button>
        </form>
    </div> 
    )
}

export default injectIntl(Search)
