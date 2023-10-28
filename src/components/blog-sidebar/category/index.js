import React from 'react';
import { FormattedMessage } from "gatsby-plugin-react-intl"
import CategoryMt from '../category-mt';
import {useAllCategory} from "../../../hooks/query/allCategory"

const Category = () => {
  
  const categs = useAllCategory()

  return (
    <div className="col-lg-12 col-md-8">
      <div className="blog-catagory mt-50 rounded">
        <div className="title mb-15">
          <h4><FormattedMessage id="category" /></h4>
        </div>
        {categs && categs.map(categ => (
          <CategoryMt categ={categ} key={categ.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;
