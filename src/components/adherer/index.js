import React from 'react'

const Adherer = () => {
  <>
<section id="contact-page" className="pt-80 pb-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="contact-form mt-20">
            <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator">
              <div className="row">
                <div className="col-md-6">
                  <div className="single-form form-group">
                    <input name="name" type="text" placeholder="Name" data-error="Name is required." required="required"/>
                      <div className="help-block with-errors"></div>
                                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input name="email" type="email" placeholder="Email" data-error="Valid email is required." required="required"/>
                        <div className="help-block with-errors"></div>
                                    </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input name="subject" type="text" placeholder="Subject" data-error="Subject is required." required="required"/>
                          <div className="help-block with-errors"></div>
                                    </div>
                      </div>
                      <div className="col-md-6">
                        <div className="single-form form-group">
                          <input name="phone" type="text" placeholder="Phone" data-error="Phone is required." required="required"/>
                            <div className="help-block with-errors"></div>
                                    </div>
                        </div>
                        <div className="col-md-12">
                          <div className="single-form form-group">
                            <textarea name="message" placeholder="Message" data-error="Please,leave us a message." required="required"></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <p className="form-message"></p>
                        <div className="col-md-12">
                          <div className="single-form">
                            <button type="submit" className="main-btn">Submit</button>
                          </div>
                        </div>
                      </div>
                        </form>
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-1 col-md-5 col-sm-8">
                  <div className="contact-info mt-50">
                    <ul>
                      <li>
                        <div className="single-info d-flex">
                          <div className="icon">
                            <i className="flaticon-placeholder"></i>
                          </div>
                          <div className="content pl-15">
                            <p>155 Mark Street, Dixon Avenue New York, NY-45845</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-info d-flex">
                          <div className="icon">
                            <i className="flaticon-phone-call"></i>
                          </div>
                          <div className="content pl-15">
                            <p>+1 (254) 587-2548</p>
                            <p>+1(548) 215-3658</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-info d-flex">
                          <div className="icon">
                            <i className="flaticon-envelope"></i>
                          </div>
                          <div className="content pl-15">
                            <p>info@website.com</p>
                            <p>query@website.com</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="social mt-25">
                      <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
    </section>
    </>
}

export default Adherer
