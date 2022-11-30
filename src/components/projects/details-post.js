import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import RecentPost from '../../components/blog-sidebar/recent-post'
import RelatedPost from '../../components/blog-sidebar/related'

const DetailsPost = ({ project,relateds, recents}) => {

  const { title, content,date, featuredImage } = project
  const image = featuredImage && getImage(featuredImage.node.localFile)
  const altText = featuredImage && getImage(featuredImage.node.localFile)

  return (
    <section className="pt-10 pb-10">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="mt-50">
                        <div className="image">
                            <GatsbyImage image={image} alt={title}/>
                        </div>
                        <div className="content">
                            <h3 className="mt-25">{title}</h3>
                            <div className="date mt-10">
                                <ul>
                                    <li><a href="#"><i className="flaticon-calendar"></i>{date}</a></li>
                                    {/* <li><a href="#"><i className="flaticon-heart"></i> 50 Likes</a></li> */}
                                    {/* <li><a href="#"><i className="flaticon-comment"></i> 25 Comments</a></li> */}
                                    {/* <li><a href="#"><i className="flaticon-folder"></i> Finance</a></li> */}
                                </ul>
                            </div>
                            <br></br>
                            <p className="mb-15" dangerouslySetInnerHTML={{ __html: content }} ></p>
                        </div> 
                        
                    </div> 
                </div>
                <div className="col-lg-4">
                    <div className="blog-sidebar ">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-8">
                            <RecentPost posts={recents}/>
                            <RelatedPost posts={relateds}/>
                            </div> 
                        </div> 
                    </div> 
                </div>
                </div>
                </div>
                </section>
  )
}

export default DetailsPost