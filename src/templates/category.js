import React from "react";
import Layout from "../components/layout";
import ListePosts from "../components/ListePost/listePost";
import PageBanner from "../components/pageBanner";
import CategoryList from "../components/CategoryList";
import Newsletter from "../components/Newsletter";

const CategoryTemplate = ({ pageContext }) => {
    const { category, posts, totalPages, currentPage, categoryNames, categoryName } = pageContext
    console.log(categoryNames)
    return (
        <Layout>
            <PageBanner title={categoryName} />
            <div className="container mt-5">
                <div className="row">                
                <div className="col-lg-8">
                    <ListePosts 
                    posts={posts} 
                    categories={category}
                    totalPages={totalPages} 
                    currentPage={currentPage}/>
                </div>
                <div className="col-lg-4">
                <div className="blog-sidebar">
                      
                        <Newsletter/>
                            <div>
                                <h4>Liste des catégories</h4>
                                <CategoryList categoryNames={categoryNames} />
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};



export default CategoryTemplate;