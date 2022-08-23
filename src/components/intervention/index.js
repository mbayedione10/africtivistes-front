import React from 'react'
import { injectIntl, FormattedMessage} from 'gatsby-plugin-react-intl'

const Intervention = () => (
    <section id="services-part" className="pt-30 pb-30">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="section-title text-center pb-15">
                        <h3><FormattedMessage id="intervention"/></h3>
                        <div className="underline">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="singel-services text-center mt-45">
                        <div className="icon mb-30">
                            <i className="flaticon-work"></i>
                        </div>
                        <div className="content">
                            <a aria-label="link"><h4><FormattedMessage id="democracy" /></h4></a>
                            {/* <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipisicing elit, sed.</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="singel-services text-center mt-45">
                        <div className="icon mb-30">
                            <i className="flaticon-diagram"></i>
                        </div>
                        <div className="content">
                            <a aria-label="link"><h4><FormattedMessage id="governance" /></h4></a>
                            {/* <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipisicing elit, sed.</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="singel-services text-center mt-45">
                        <div className="icon mb-30">
                            <i className="flaticon-analysis"></i>
                        </div>
                        <div className="content">
                            <a aria-label="link"><h4><FormattedMessage id="transparency" /></h4></a>
                            {/* <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipisicing elit, sed.</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="singel-services text-center mt-45">
                        <div className="icon mb-30">
                            <i className="flaticon-branding"></i>
                        </div>
                        <div className="content">
                            <a aria-label="link"><h4><FormattedMessage id="corruption" /></h4></a>
                            {/* <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipisicing elit, sed.</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="singel-services text-center mt-45">
                        <div className="icon mb-30">
                            <i className="flaticon-worldwide"></i>
                        </div>
                        <div className="content">
                            <a aria-label="link"><h4><FormattedMessage id="peace" /></h4></a>
                            {/* <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipisicing elit, sed.</p> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="singel-services text-center mt-45">
                        <div className="icon mb-30">
                            <i className="flaticon-risk"></i>
                        </div>
                        <div className="content">
                            <a aria-label="link"><h4><FormattedMessage id="cybersecurity" /></h4></a>
                            {/* <p className="mt-20">Lorem ipsum dolor sit amet, consectetur adipLorem ipsum dolor sit amet, consectetur adipisicing elit, sed.</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default injectIntl(Intervention)