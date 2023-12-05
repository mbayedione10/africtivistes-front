import React from 'react'
import SingleBlog from './single-blog'

const NosChampions = ({ posts}) => {
    return (
<section id="blog-list" className="pt-25 pb-25">
    <div className="container"> {/* Utilisation de container-fluid pour un conteneur plein écran */}
        <div className="row justify-content-center"> {/* Utilisation de justify-content-center pour centrer le contenu */}
            <div className="col-lg-10" > {/* Utilisation d'une largeur de colonne plus grande */}
                <div className="row">
                    <div className="col-lg-12">
                        <SingleBlog posts={posts}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default NosChampions