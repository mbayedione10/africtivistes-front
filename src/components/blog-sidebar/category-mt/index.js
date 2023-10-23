import React from 'react'
import { injectIntl } from "gatsby-plugin-react-intl"

const CategoryMt = ({categ}) => {
    const{count, name}=categ.node
    return (

        <ul>
       
            <li>
              <a>
                {name}
                <span>({count})</span>
                </a>
            </li>

        </ul>
    )
}

export default injectIntl(CategoryMt)
