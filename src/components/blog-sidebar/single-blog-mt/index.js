import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl";

const SingleBlogMt = ({ post }) => {
    const { title, date, link, excerpt, name, featuredImage } = post.node;
    const image = featuredImage && getImage(featuredImage.node.big);

    return (
        <div className='single-blog-list mt-50'>
            <div className="row">
                <div className="col-xl-5 col-lg-6">
                 
                        {image && (
                            <GatsbyImage
                                image={image}
                                alt={title}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        )}

                </div>
                
            
                <div className="col-xl-7 col-lg-8">
                    <div className="blog-content">
                        <a href={link}>
                            <h4>{title}</h4>
                        </a>
                        <p className="mb-15" dangerouslySetInnerHTML={{ __html: excerpt }} />
                        <a href={link}>
                            <FormattedMessage id="readMore" /> <i className="fa fa-angle-right"></i>
                        </a>
                        <a className="text-muted float-right">
                            <i className="flaticon-calendar"></i> {date}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default injectIntl(SingleBlogMt);
