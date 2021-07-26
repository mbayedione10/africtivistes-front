import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FormattedMessage } from 'gatsby-plugin-react-intl'

const Contact = () => {

  const data = useStaticQuery(graphql`query {
  site{
      siteMetadata {
        email
        tels
        adresse
      }
    }
  }`)
  const { email, tels, adresse } = data.site.siteMetadata
  
  return (<div className="footer-contact pt-45">
    <div className="title mb-35">
      <h4><FormattedMessage id="contact"/></h4>
    </div>
    <ul>
      <li>
        {tels.map(tel=><p>{tel}</p>)}
      </li>
      <li>
        <p>{email}</p>
      </li>
      <li>
        <p>{adresse}</p>
      </li>
    </ul>
  </div>)
  }

export default Contact