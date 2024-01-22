import React from 'react'
import { injectIntl } from "gatsby-plugin-react-intl"
import {FormattedMessage} from "gatsby-plugin-react-intl"

<style>
  {`
    .h1 {
      opacity: 0.5;
      border: 1px solid transparent;
      transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
      display: inline-block;
      padding: 5px;
    }
    
    .h1:hover {
      transform: scale(1.1);
      border-color: #ccc;
    }

    .inf-input-text input[type='text'] {
      transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;
    }
    
    .inf-input-text input[type='text']:hover {
      transform: scale(1.1);
      border-color: #ccc;
    }
  `}
</style>
const Newsletter = ({intl}) => {
  return(
    
  <section id="contact-page" className="pt-20 pb-20">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="contact-form mt-20">
          <div className="footer-subscribe pt-45">
          <div className="title mb-15">
            <span className="h1" style={{ opacity: '0.5' }}><FormattedMessage id="subscribe"/></span>

          </div>
          <span className="h3"><FormattedMessage id="newsletter"/></span>

        <div className="subscribe-form mt-25">        
        <form
  method="post"
  action="https://newsletter.infomaniak.com/external/submit"
  className="inf-form"
  target="_blank"
>
  {/* ... Autres éléments du formulaire ... */}
  <div className="inf-content">
    <div className="inf-input inf-input-text">
      <input
        type="text"
        name="inf[1]"
        data-inf-meta={1}
        data-inf-error="Merci de renseigner une adresse email"
        required="required"
        placeholder="Email"
        className="form-control form-control-lg" // Classe Bootstrap pour augmenter la taille du champ texte
      />
    </div>
    <div className="inf-submit">
      <button type="submit" className="btn btn-lg btn-primary">
        {/* Utilisation de classes Bootstrap pour augmenter la taille du bouton */}
        <i className="flaticon-send" />
      </button>
    </div>
  </div>
</form>

          </div>
  </div>
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
                            <p>BP 19968 Dakar , Cite Sofraco , VDN 3 prolongee</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-info d-flex">
                          <div className="icon">
                            <i className="flaticon-phone-call"></i>
                          </div>
                          <div className="content pl-15">
                            <p>(+221) 33 837 51 24</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="single-info d-flex">
                          <div className="icon">
                            <i className="flaticon-envelope"></i>
                          </div>
                          <div className="content pl-15">
                            <p>info@africtivistes.org</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="social mt-25">
                      <li><a href="https://web.facebook.com/africtivistes/"><i className="fa fa-facebook-f"></i></a></li>
                      <li><a href="https://twitter.com/AFRICTIVISTES"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="https://sn.linkedin.com/in/africtivistes"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
    </section>
)
  }

export default injectIntl(Newsletter)