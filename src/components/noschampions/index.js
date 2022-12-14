import React from 'react'
import SingleBlog from './single-blog'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const NosChampions = ({ posts}) => {
    return (
<section id="blog-list" className="pt-25 pb-35">
                <SingleBlog posts={posts} />
        </section>
    )
}

export default NosChampions