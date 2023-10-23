import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import RecentPost from '../../components/blog-sidebar/recent-post'
import RelatedPost from '../../components/blog-sidebar/related'

const DetailsPost = ({ project,relateds, recents}) => {

  const { title, content, featuredImage } = project
  const image = featuredImage && getImage(featuredImage.node.localFile)

return (
    <section id="project-details" className="pt-50 pb-50">
    <div className="container">
    <div className="row">
        <div className="col-xl offset-xl col-lg">
        <div className="image">
            <GatsbyImage image={image} alt={title}/>
        </div>
        <div className="project-details-content pt-45">

            <h4 className="mb-15">{title}</h4>
            {content && <div dangerouslySetInnerHTML={{ __html: content }} />}

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