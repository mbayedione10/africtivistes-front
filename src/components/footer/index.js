import * as React from "react"

const Footer = () => (
  <>
    {/* --====== FOOTER PART START ======-- */}

    <section id="footer-part" className="footer-part pt-70 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-description pt-50">
              <div className="logo mb-20">
                <a href="/">
                  <img src="images/logo-2.png" alt="Logo"/>
                </a>
              </div>
                <p className="mb-15">ur clients range from FTSE comp anies, to large organisations and some small local businesses who are striving to expand.</p>
                <ul>
                  <li><a href="/"><i className="flaticon-facebook" aria-label="facebook"/></a></li>
                <li><a href="/"><i className="flaticon-twitter-logo-silhouette" aria-label="twitter"/></a></li>
                <li><a href="/"><i className="flaticon-google-plus" aria-label="google"/></a></li>
                <li><a href="/"><i className="flaticon-linkedin-logo" aria-label="linkedin"/></a></li>
                <li><a href="/"><i className="flaticon-instagram-social-network-logo-of-photo-camera" aria-label="instagram"/></a></li>
                </ul>
              </div> {/*-- footer description --*/}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-link pt-45 pl-50">
                <div className="title mb-30">
                  <h4>Usefull Links</h4>
                </div>
                <ul>
                <li><a href="/"><i className="fa fa-angle-right" aria-label="link"/> About Us</a></li>
                <li><a href="/"><i className="fa fa-angle-right" aria-label="link"/> Company News</a></li>
                <li><a href="/"><i className="fa fa-angle-right" aria-label="link"/> Our Blog</a></li>
                <li><a href="/"><i className="fa fa-angle-right" aria-label="link"/> About Career</a></li>
                <li><a href="/"><i className="fa fa-angle-right" aria-label="link"/> Clients</a></li>
                </ul>
              </div> {/*-- footer link --*/}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-contact pt-45">
                <div className="title mb-35">
                  <h4>Contact Us</h4>
                </div>
                <ul>
                  <li>
                    <p>+12 345 678 9008 </p>
                    <p>+12 987 654 7566</p>
                  </li>
                  <li>
                    <p>contactus@buildetic.com</p>
                    <p>info@support.com</p>
                  </li>
                  <li>
                    <p>721/A Central Street, New York. South East Addril, CEO 12309</p>
                  </li>
                </ul>
              </div> {/*-- footer contact --*/}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-subscribe pt-45">
                <div className="title mb-35">
                  <h4>Subscribe Us</h4>
                </div>
                <p>Join 90,000+ awesome subscribers and update yourself with our exclusive offers.</p>
                <div className="subscribe-form mt-25">
                  <form action="#">
                    <input type="text" placeholder="Enter your Email"/>
                  <button type="button"><i className="flaticon-send" aria-label="send"/></button>
                  </form>
                </div>
                </div>  {/*-- footer subscribe --*/}
              </div>
            </div> {/*-- row --*/}
          </div> {/*-- container --*/}
    </section>

    {/* --====== FOOTER PART ENDS ======-- */}

    {/* --====== COPYRIGHT PART START ======-- */}

    <section id="copyright-part" className="copyright-part pt-15 pb-25">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="copyright-content text-center text-lg-left pt-10">
              <p>&copy; 2019 All Rights Reserved. Designed By NIKNA</p>
            </div> {/*-- copyright content --*/}
          </div>
          <div className="col-lg-6">
            <div className="copyright-policy text-center text-lg-right pt-10">
              <ul>
                <li><a href="/">Terms & Condition</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div> {/*-- row --*/}
      </div> {/*-- container -- */}
    </section>

    {/* --====== COPYRIGHT PART ENDS ======-- */}

    {/* --====== BACK TO TOP PART START ======-- */}

    <a href="#header-part" className="back-to-top">
      <i className="flaticon-chevron-up"></i>
    </a>

    {/* --====== BACK TO TOP PART ENDS ======-- */}
  </>
)

export default Footer