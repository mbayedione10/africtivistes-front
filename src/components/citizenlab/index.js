import React from 'react'
import{FormattedMessage} from 'react-intl'

const History = () => (
<section id="company-history" class="pt-30 pb-30 ">
        <div class="container">
        <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center pb-15">
                        <h2><FormattedMessage id="presentation_citizenlab"/></h2>
                        <div className="underline">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
        </div>
            <div class="row">
                <div class="col-lg-10">
                    <div class="years-experience mt-25">
                        {/* <h4 class="mb-25"><FormattedMessage id="reseau"/></h4> */}
                        <p class="mb-10"><FormattedMessage id="presentation-citizenlab-texte1"/></p>

                        <p class="mb-10"><FormattedMessage id="presentation-citizenlab-texte2"/></p>

                        <p class="mb-10"><FormattedMessage id="presentation-citizenlab-texte3"/></p>

                        <p class="mb-10"><FormattedMessage id="presentation-citizenlab-texte4"/></p>

                        <h6 class="mb-10"><FormattedMessage id="presentation-citizenlab-texte5"/></h6>

                    </div>
                </div> 
                <div className="col-lg-3">
    <div className="company-about-image" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '250px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
        <a href="https://citizenlabmauritanie.org/" style={{ textDecoration: 'none', width: '100%', height: '100%', display: 'block', transition: 'border-color 0.3s' }}>
            <img
                src="/images/citizenlabrim.jpg"
                alt="company history"
                
            />
        </a>
    </div>
</div>

<div className="col-lg-3">
    <div className="company-about-image" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '250px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
        <a href="https://citizenlabbenin.org/" style={{ textDecoration: 'none', width: '100%', height: '100%', display: 'block', transition: 'border-color 0.3s' }}>
            <img
                src="/images/citizenlabenin.png"
                alt="company history"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                }}
            />
        </a>
    </div>
</div>


            </div>
        </div>
    </section>
)

export default History