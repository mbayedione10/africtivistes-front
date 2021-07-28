import React from 'react'
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const Team = ({teams}) => (
  <section id="team-part" className="pt-120 pb-130 gray-bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-15">
            <h3><FormattedMessage id="team"/></h3>
            <div className="underline">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
        <div className="row justify-content-center">
        {teams.map(team => {
          const { facebook, twitter, linkedin, instagram} = team.social
        return (<div className="col-lg-3 col-md-6 col-sm-8">
          <div className="single-team text-center mt-80">
            <div className="author-thumb pb-25">
              <img src="/images/team/t-1.jpg" alt="Author" />
            </div>
            <div className="author-content">
              <a href="team-details.html"><h6>{team.title}</h6></a>
              <span dangerouslySetInnerHTML={{ __html: team.excerpt }}/>
              <p className="mt-20">Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum.</p>
              <ul className="mt-15">
                {facebook && <li><a href={facebook} aria-label="button"><i className="flaticon-facebook"></i></a></li>}
                {twitter && <li><a href={twitter} aria-label="button"><i className="flaticon-twitter-logo-silhouette"></i></a></li>}
                {linkedin && <li><a href={linkedin} aria-label="button"><i className="flaticon-linkedin-logo"></i></a></li>}
                {instagram && <li><a href={instagram} aria-label="button"><i className="flaticon-instagram-social-network-logo-of-photo-camera"></i></a></li>}
              </ul>
            </div>
          </div>
        </div>)})}
        </div>
      </div>
    </section>
)

export default injectIntl(Team)