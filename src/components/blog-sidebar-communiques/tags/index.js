import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import TagMt from '../tag-mt'

const Tags = ({tagues}) => {
    return (
        <div class="col-lg-12 col-md-12">
        <div class="blog-tags mt-50 rounded">
            <div class="title mb-25">
                <h4><FormattedMessage id="tags"/></h4>
            </div> 
            {tagues && tagues.map(tague => {
                    return(
                            <TagMt tague = {tague} key={tague.id} />
                    )
                })}
        </div> 
    </div>
    )
}

export default injectIntl(Tags)
