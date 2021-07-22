import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-react-intl'

const PageBanner = ({ title}) => (
    <section id="page-banner" class="bg_cover pt-150 pb-150" style={{ backgroundImage: `url(/images/page-banner.jpg`}} data-overlay="6">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-banner-content text-center">
                        <h2>{title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center">
                                <li class="breadcrumb-item"><a href="/" ><FormattedMessage id="home" /></a></li>
                                <li class="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default PageBanner