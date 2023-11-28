import React from 'react'
import Search from './search'
import RecentPost from './recent-post'
import Category from './category'
import Tags from './tags'
import Subscribe from './subscribe'
import SingleBlog from './single-blog'

const BlogSidebar = ({ posts, numPages, currentPage}) => {
    return (
<section id="blog-list" className="pt-25 pb-25">
    <div className="container-fluid"> {/* Utilisation de container-fluid pour un conteneur plein écran */}
        <div className="row justify-content-center"> {/* Utilisation de justify-content-center pour centrer le contenu */}
            <div className="col-lg-10"> {/* Utilisation d'une largeur de colonne plus grande */}
                <div className="row">
                    <div className="col-lg-8">
                        <SingleBlog posts={posts} numPages={numPages} currentPage={currentPage} />
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-sidebar">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-md-8">
                                    {/* Vos composants ici */}
                                    <Subscribe />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}

export default BlogSidebar

