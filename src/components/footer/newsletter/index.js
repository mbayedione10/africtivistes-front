import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-react-intl'

const Newsletter = ({intl}) => (
  <div className="footer-subscribe pt-45">
    <div className="title mb-35">
      <h4><FormattedMessage id="subscribe"/></h4>
    </div>
    <p><FormattedMessage id="newsletter"/></p>
    <div className="subscribe-form mt-25">
      <form action="#">
        <input type="text" placeholder={intl.formatMessage({ id: "enterEmail" })} />
        <button type="button"><i className="flaticon-send" aria-label="send" /></button>
      </form>
    </div>
  </div>
)

export default injectIntl(Newsletter)