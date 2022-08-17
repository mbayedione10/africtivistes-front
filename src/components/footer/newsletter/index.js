import React from 'react'
import { FormattedMessage, injectIntl } from 'gatsby-plugin-react-intl'

const Newsletter = ({intl}) => (
      <div className="footer-subscribe pt-45">
        <div className="title mb-35">
          <h4><FormattedMessage id="subscribe"/></h4>
        </div>
        <form
              method="post"
              action="https://newsletter.infomaniak.com/external/submit"
              className="inf-form"
              target="_blank"
            >
              <input type="email" name="email" style={{ display: "none" }} />
              <input
                type="hidden"js
                name="key"
                defaultValue="eyJpdiI6IkNZVnAzWGs4ZndqdHRQd1lMdFFiTktaaWdSWGlYQ2NGaUs0UkpHaVV3RDg9IiwidmFsdWUiOiJtZm5hTDd0enFWZG9LQ1pcL3NzZFc5cEpJdnVheFFnMVhQaU92REZrTmZpVT0iLCJtYWMiOiJmMmEzMGVmNDc0MzdmY2ZlOGQ5ZTM1OTMzNTI2NjA2ZTA0MzNjN2FhNTEyNDliZWQ3YmIyOWIwMTU2N2M2NzlmIn0="
              />
              <input type="hidden" name="webform_id" defaultValue={12761} />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    " .inf-main_6e361e90ca5f9bee5b36f3d413c51842{ background-color:#f5f5f5; padding:25px 20px; margin:25px auto; } .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-content { margin-top:13px;} .inf-main_6e361e90ca5f9bee5b36f3d413c51842 h4, .inf-main_6e361e90ca5f9bee5b36f3d413c51842 span, .inf-main_6e361e90ca5f9bee5b36f3d413c51842 label, .inf-main_6e361e90ca5f9bee5b36f3d413c51842 input, .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-submit, .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-success p a { color:#555555; font-size:14px; } .inf-main_6e361e90ca5f9bee5b36f3d413c51842 h4{ font-size:18px; margin:0px 0px 13px 0px; } .inf-main_6e361e90ca5f9bee5b36f3d413c51842 h4, .inf-main_6e361e90ca5f9bee5b36f3d413c51842 label{ font-weight:bold; } .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-input { margin-bottom:7px; } .inf-main_6e361e90ca5f9bee5b36f3d413c51842 label { display:block;} .inf-main_6e361e90ca5f9bee5b36f3d413c51842 input{ height:35px; color:#999999; border: 1px solid #E9E9E9; border:none; padding-left:7px; } .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-input.inf-error label, .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-input.inf-error span.inf-message{ color: #cc0033; } .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-input.inf-error input{ border: 1px solid #cc0033; } .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-input input { width:100%;} .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-input.inf-error span.inf-message { display: block; } .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-submit { text-align:right;} .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-submit input{ background-color:#777777; color:#ffffff; border:none; font-weight: normal; height:auto; padding:7px; } .inf-main_6e361e90ca5f9bee5b36f3d413c51842 .inf-submit input.disabled{ opacity: 0.4; } .inf-btn { color: rgb(85, 85, 85); border: medium none; font-weight: normal; height: auto; padding: 7px; display: inline-block; background-color: white; box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.24); border-radius: 2px; line-height: 1em; } .inf-rgpd { margin:25px 0px 15px 0px; color:#555555; } "
                }}
              />
              <div className="inf-main_6e361e90ca5f9bee5b36f3d413c51842">
                <span><FormattedMessage id="newsletter"/></span>
                <div className="inf-success" style={{ display: "none" }}>
                  <h4>Votre inscription a été enregistrée avec succès !</h4>
                  <p>
                    {" "}
                    <a href="#" className="inf-btn">
                      «
                    </a>{" "}
                  </p>
                </div>
                <div className="inf-content">
                  <div className="inf-input inf-input-text">
                    {" "}
                    <input
                      type="text"
                      name="inf[1]"
                      data-inf-meta={1}
                      data-inf-error="Merci de renseigner une adresse email"
                      required="required"
                      placeholder="Email"
                    />{" "}
                  </div>
                  <div className="inf-submit">
                    {" "}
                    <input type="submit" name="" defaultValue="Valider" />{" "}
                  </div>
                </div>
              </div>
          </form>
  </div>
)


export default injectIntl(Newsletter)