import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const CategoryTemplate = ({ pageContext }) => {
    const {category, posts} = pageContext
    return (
        <Layout>
            <div>
                <h1>Articles dans la catégorie : {category}</h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={post.link}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};



export default CategoryTemplate;
