import React from 'react'
import SingleValues from './single-values'
import {FormattedMessage } from "gatsby-plugin-react-intl"

const Values = ({posts}) => (
  <section id="company-history">
        <div class="container">
            <div class="our-history pt-50">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-title text-center">
                            <h3><FormattedMessage id="nosValeurs"/></h3>
                            <div class="underline">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <SingleValues posts={posts} />

            </div>
        </div>
    </section>
)

export default Values