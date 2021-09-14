import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import SingleProjectMt from '../single-project-mt'

const Container = ({posts}) => {
    
    return (
        <div className="row grid">

        
        {posts.map(post => {
                    return(
                            <SingleProjectMt post = {post} key={post.id}/>
                    )
                })} 
    </div>


    )
}

export default Container
