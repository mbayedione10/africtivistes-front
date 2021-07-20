import * as React from "react"

const Top = () => (
  <>
    {/* ====== header top PART START ====== */}
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
            </div>{/*  -- meta -- */}
          </div>
          <div className="col-lg-3">
            <div className="social-icon text-center text-lg-right pt-15">
              <ul>
                <li><a href="/"><i className="flaticon-facebook" aria-label="facebook"></i></a></li>
                <li><a href="/"><i className="flaticon-twitter-logo-silhouette" aria-label="twitter"></i></a></li>
                <li><a href="/"><i className="flaticon-google-plus" aria-label="google"></i></a></li>
                <li><a href="/"><i className="flaticon-linkedin-logo" aria-label="linkedin"></i></a></li>
                <li><a href="/"><i className="flaticon-instagram-social-network-logo-of-photo-camera" aria-label="instagram"></i></a></li>
              </ul>
            </div> {/*-- social icon -- */}
          </div>
        </div> {/*-- row -- */}
      </div> {/*-- container -- */}
    </div>
    {/* ====== header top PART ENDS ====== */}
  </>
)

export default Top