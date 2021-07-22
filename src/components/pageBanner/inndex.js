import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-react-intl'

const PageBanner = ({ title}) => (
    <section id="page-banner" className="bg_cover pt-150 pb-150" style={{ backgroundImage: `url(/images/page-banner.jpg`}} data-overlay="6">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-banner-content text-center">
                        <h2>{title}</h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="/" ><FormattedMessage id="home" /></a></li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default PageBanner