import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Social from '../../social'
import Switchlanguage from '../switchlanguage'

const Top = ({translation}) => {
  const data = useStaticQuery(graphql`query {
  site{
      siteMetadata {
        email
        tels
      }
    }
  }`)
  const { email, tels } = data.site.siteMetadata
  return(<>
    <div className="header-top pb-15">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10">
            <div className="meta pt-15 text-center text-lg-right">
              <ul>
                <li><i className="fa fa-envelope"></i>{email[0]}</li>
                <li><i className="fa fa-phone"></i>{tels[0]}</li>
                {/* <li><i className="fa fa-clock-o"></i></li> */}
                <li><Switchlanguage translation={translation}/></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="social-icon text-center text-lg-right pt-15">
              <Social/>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Top