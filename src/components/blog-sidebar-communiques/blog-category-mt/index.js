import React from 'react'
import {injectIntl } from "gatsby-plugin-react-intl"

const BlogCategoryMt = ({post}) => {
    const{name, count}=post.node.categories

    return (
        <ul>
            <li><a href="#">{name} <span>(32){count}</span></a></li>
        </ul>
    )
}

export default injectIntl(BlogCategoryMt)
