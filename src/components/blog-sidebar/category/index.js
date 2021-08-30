import React from 'react'
import BlogCategoryMt from '../blog-category-mt'
import {FormattedMessage } from "gatsby-plugin-react-intl"


const Category = ({posts}) => {
    return (
        <div class="col-lg-12 col-md-8">
        <div class="blog-catagory mt-50 rounded">
            <div class="title mb-15">
                <h4><FormattedMessage id ="category"/></h4>
            </div> 
                {posts.map(post => {
                    return(
                        <BlogCategoryMt post = {post} key={post.id}/>
                    )
                })} 

        </div> 
    </div>
    )
}

export default Category


