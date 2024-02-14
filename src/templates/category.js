import React from "react";
import Layout from "../components/layout";
import ListePosts from "../components/ListePost/ListePost";
import PageBanner from "../components/Banner";
import CategoryList from "../components/CategoryList";
import Underline from "../components/Underline";
import Pagination from "../components/pagination";
import NewsletterForm from "../components/NewsletterForm";

const CategoryTemplate = ({ pageContext }) => {
    const { category, posts, totalPages, currentPage, categoryNames, categoryName } = pageContext
    const basePath = `/${category}/`
    return (
        <Layout>
            <PageBanner title={categoryName} />
            <div className="container mt-5">
                <div className="row">                
                    <div className="col-lg-8">
                        <ListePosts 
                            posts={posts}
                        />
                    <div class="row justify-content-center">
                        <Pagination 
                            totalPages={totalPages} 
                            currentPage={currentPage} 
                            basePath={basePath} />
                    </div>  
                    </div>
                    <div className="col-lg-4">
                            <div className="blog-sidebar">
                                    <NewsletterForm />
                                    <Underline/>
                                    <CategoryList categoryNames={categoryNames} />
                            </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};



export default CategoryTemplate;