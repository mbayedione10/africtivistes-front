import React from 'react';
import { FormattedMessage } from 'react-intl';

const History = () => (
  <section id="company-history" className="pt-30 pb-30">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-15">
            <h2><FormattedMessage id="presentation_elearning" /></h2>
            <div className="underline">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
      <div className="col-lg-1">
          <div className="company-about-image">
          </div>
        </div>
        <div className="col-lg-10">
          <div className="years-experience">
            {/* <h4 className="mb-25"><FormattedMessage id="reseau" /></h4> */}
            <p className="mb-10"><FormattedMessage id="presentation_elearning_1" /></p>
          </div>
        </div>

      </div>

      <div className="our-history pt-30">
        <div className="our-single-history pb-30">
          <div className="row">
            <div className="col-lg-8">
              <div className="our-history-content mt-50">
                <h4 className="mb-15"><FormattedMessage id="presentation_elearning_2" /></h4>
                <p><FormattedMessage id="presentation_elearning_2_1" /></p>
                <p><FormattedMessage id="presentation_elearning_2_2" /></p>
                <p><FormattedMessage id="presentation_elearning_2_3" /></p>
                <p><FormattedMessage id="presentation_elearning_2_4" /></p>
              </div>
            </div>
            <div className="col-lg-4 pt-100">
              <div className="company-about-image">
                <img src="/images/mooc.webp" alt="company history" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-history pt-30">
        <div className="our-single-history pb-30">
          <div className="row">
            <div className="col-lg-7">
              <div className="our-history-content mt-50">
                <h4 className="mb-15"><FormattedMessage id="presentation_elearning_3" /></h4>
                <p><FormattedMessage id="presentation_elearning_3_1" /></p>
                <p><FormattedMessage id="presentation_elearning_3_2" /></p>
                <p><FormattedMessage id="presentation_elearning_3_3" /></p>
                <p><FormattedMessage id="presentation_elearning_3_4" /></p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="company-about-image">
                <img src="/images/logotaxawtemm.png" alt="company history" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="our-history pt-30">
        <div className="our-single-history pb-30">
          <div className="row">
            <div className="col-lg-7">
              <div className="our-history-content mt-50">
                <h4 className="mb-15"><FormattedMessage id="presentation_elearning_4" /></h4>
                <p><FormattedMessage id="presentation_elearning_4_1" /></p>
                <p><FormattedMessage id="presentation_elearning_4_2" /></p>
                <p><FormattedMessage id="presentation_elearning_4_3" /></p>
              </div>
            </div>
            <div className="col-lg-4 pt-90">
                <div className="company-about-image">
                    <img src="/images/cybersecurity.png" alt="company history" />
                </div>
                </div>

          </div>
        </div>
      </div>
      {/* <div className="our-single-history pb-30">
        <div className="row">
          <div className="col-lg-12">
            <div className="years-experience mt-45">
              <h4 className="mb-15"><FormattedMessage id="reseau-dinfluence" /></h4>
              <p><FormattedMessage id="desc-reseau-dinfluence" /></p><br></br>
              <ul>
                <li><FormattedMessage id="construction" /></li>
                <li><FormattedMessage id="conception" /></li>
                <li><FormattedMessage id="capacite" /></li>
                <li><FormattedMessage id="influence" /></li>
                <li><FormattedMessage id="capacitation" /></li>
                <li><FormattedMessage id="promotion" /></li>
                <li><FormattedMessage id="developpement" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </section>
);

export default History;
