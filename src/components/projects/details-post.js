import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import RecentPost from '../../components/blog-sidebar/recent-post'
import RelatedPost from '../../components/blog-sidebar/related'

const DetailsPost = ({ project,relateds, recents}) => {

  const { title, content,date, featuredImage } = project
  const image = featuredImage && getImage(featuredImage.node.localFile)
  const altText = featuredImage && getImage(featuredImage.node.localFile)

  return (
    <section id="project-details"  class="pt-10 pb-10">
        <div class="container">
            <div class="row">
                <div className="col-lg-8">
                    <div className="project-details mt-50">
                        <div className="project-details-image">
                            <GatsbyImage image={image} alt={title}/>
                        </div>
                        <div className="project-details-content">
                            <h3 className="mt-25">{title}</h3>
                            <div className="project-details-date mt-10">
                                <ul>
                                    <li><a href="#"><i className="flaticon-calendar"></i>{date}</a></li>
                                    {/* <li><a href="#"><i className="flaticon-heart"></i> 50 Likes</a></li> */}
                                    {/* <li><a href="#"><i className="flaticon-comment"></i> 25 Comments</a></li> */}
                                    {/* <li><a href="#"><i className="flaticon-folder"></i> Finance</a></li> */}
                                </ul>
                            </div>
                            <br></br>
                            <p class="mb-15" dangerouslySetInnerHTML={{ __html: content }} ></p>
                        </div> 
                        
                    </div> 
                </div>
                <div class="col-lg-4">
                    <div class="blog-sidebar ">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 col-md-8">
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