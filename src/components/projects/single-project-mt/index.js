import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const SingleProjectMt = ({post}) => {
    const{title, date, link,excerpt, featuredImage}=post.node
    const image = featuredImage && getImage(featuredImage.node.localFile)

    return (
        
        <div className="col-lg-4 col-md-6" >

        <div className="singel-news mt-50 " >
            <div className="news-thumb" >

                           <a href={link} ><GatsbyImage image={image} alt={title} /> </a>

            </div>
            <div className="content"  style={{height: '100px'} , {width: '360px'}} >
                {/* <ul className="mb-15" >
                    <li><a className="project-popup" href={link}  aria-label="button" ><i className="flaticon-full-screen"></i></a></li>
                    <li className="details"><a href={link}  aria-label="button"><i className="flaticon-right-arrow"></i></a></li>
                </ul> */}
                <br/>{date}<br/>
                <span><a href={link} ><h5 style={{color: '#383937'}}>{title.substring(0, 70)}...</h5></a></span><a href={link} style={{color: '#7f7f7f'}}> 
                 < FormattedMessage id="readMore"/></a><br/><br/>
            </div>
        </div>
        <br/>
        </div>
        

    )
}

export default injectIntl(SingleProjectMt)
