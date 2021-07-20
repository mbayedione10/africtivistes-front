import * as React from "react"

import Social from '../../social'

const Top = () => {

  return(<>
    <div className="header-top pb-15">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <div className="meta pt-15 text-center text-lg-left">
              <ul>
                <li><i className="fa fa-envelope"></i> support@contact.com</li>
                <li><i className="fa fa-phone"></i> +880 17162 48413</li>
                <li><i className="fa fa-clock-o"></i> Sun - Fri : 9.00 am to 18.pm (Sat Weekend)</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
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