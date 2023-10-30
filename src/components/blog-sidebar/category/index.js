import React from 'react';
import { FormattedMessage, IntlContextConsumer } from "gatsby-plugin-react-intl"
import CategoryMt from '../category-mt';
import {useAllCategoryEN} from "../../../hooks/query/allCategory/EN"
import {useAllCategoryFR} from "../../../hooks/query/allCategory/FR"

const Categories = ({categs}) =>
(
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
)

const Category = () => {
  
  const categoryEN = useAllCategoryEN()
  const categoryFR = useAllCategoryFR()

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Categories categs={categoryFR} /> : <Categories categs={categoryEN} />}
    </IntlContextConsumer>
  )
}

export default Category;
