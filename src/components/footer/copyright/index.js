import React from 'react'
import { FormattedMessage, injectIntl, IntlContextConsumer } from 'gatsby-plugin-react-intl'

const Copyright = () => {

  const year = new Date().getFullYear()

  return (<section id="copyright-part" className="copyright-part pt-15 pb-25">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="copyright-content text-center text-lg-left pt-10">
            <p>&copy; {year} <FormattedMessage id="copyright" /></p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="copyright-policy text-center text-lg-right pt-10">
            <IntlContextConsumer>
              {({ language: currentLocale }) => {
                if(currentLocale === 'en') {
                  return (<ul>
                  <li><a href="/" aria-label="link"><FormattedMessage id="terms" /></a></li>
                  <li><a href="/" aria-label="link"><FormattedMessage id="privacy" /></a></li>
                  <li><a href="/" aria-label="link"><FormattedMessage id="contact" /></a></li>
                </ul>)}
                if(currentLocale === 'fr') {
                  return (<ul>
                  <li><a href="/" aria-label="link"><FormattedMessage id="terms" /></a></li>
                  <li><a href="/" aria-label="link"><FormattedMessage id="privacy" /></a></li>
                  <li><a href="/" aria-label="link"><FormattedMessage id="contact" /></a></li>
                </ul>)}
              }}
            </IntlContextConsumer>
          </div>
        </div>
      </div>
    </div>
  </section>)
  }

export default injectIntl(Copyright)