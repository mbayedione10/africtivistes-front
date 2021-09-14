import React from 'react'
import {FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"
import Container from './containerService'

const Services = ({posts}) => (
    <section id="services-part" className="pt-120 pb-130">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="section-title text-center pb-15">
                        <h3><FormattedMessage id="planStrategique"/></h3>
                        <div className="underline">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <Container posts = {posts}/>
        </div>
    </section>
)

export default Services