import React from "react";
import Layout from "../components/layout";
import ListePosts from "../components/ListePost/listePost";
import PageBanner from "../components/pageBanner";

const CategoryTemplate = ({ pageContext }) => {
    const { category, posts, totalPages, currentPage } = pageContext
    return (
        <Layout>
            <PageBanner title={category} />
            <div className="container mt-5">
                <ListePosts 
                posts={posts} 
                categories={category}
                totalPages={totalPages} 
                currentPage={currentPage}/>
            </div>
        </Layout>
    );
};



export default CategoryTemplate;