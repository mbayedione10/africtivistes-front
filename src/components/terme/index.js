import React from 'react'
import SingleValues from './single-values'
import {FormattedMessage } from "gatsby-plugin-react-intl"

const Termes = ({posts}) => (
  <section id="company-history">
        <div className="container">
            <div className="our-history pt-30 pb-30">
                <SingleValues posts={posts} />
            </div>
        </div>
    </section>
)

export default Termes