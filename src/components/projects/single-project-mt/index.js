import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleProjectMt = ({post}) => {
    const{title, date, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
        
        <div className="col-lg-4 col-md-6" >

        <div className="singel-project mt-50 text-center" >
            <div className="image" >
            <GatsbyImage image={image} alt={title} />
            </div>
            <div className="content"  style={{height: '100px'} , {width: '300px'}} >
                <ul className="mb-15" >
                    {/* <li><a className="project-popup" href={link}  aria-label="button" ><i className="flaticon-full-screen"></i></a></li> */}
                    <li className="details"><a href={link}  aria-label="button"><i className="flaticon-right-arrow"></i></a></li>
                </ul>
                <span><a href={link} style={{backgroundColor:`#FEFEFE`}}><h6>{title.substring(0, 70)}...<br/>
                <br/>{date}</h6></a></span><br/>
            </div>
        </div>
        </div>
        

    )
}

export default injectIntl(SingleProjectMt)
