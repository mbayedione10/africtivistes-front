import React from 'react';
import { Link } from 'gatsby';

const CategoryList = ({ categoryNames }) => {
    return (
        <ul>
            {categoryNames.map(category => (
                <li key={category.slug}>
                    <Link to={`/${category.slug}`}>{category.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default CategoryList;
