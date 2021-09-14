import React from 'react'
import RowJustify from '../row-justify'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"


const Container = ({posts}) => {
    return (
        <div className="row justify-content-center">
            {posts.map(post => {
                        return(
                            <RowJustify post = {post} key={post.id} />
                            )
                    })} 
                    
                
            </div>
    )
}

export default Container
