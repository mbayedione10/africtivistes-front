import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl"

const Team = ({ teams }) => (
  <section id="team-part" className="pt-30 pb-30 gray-bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center pb-15">
            <h3><FormattedMessage id="team" /></h3>
            <div className="underline">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {teams.map(team => {
          const { facebook, twitter, linkedin, instagram } = team.social
          const image = getImage(team.featuredImage.node.localFile)
          return (<div className="col-lg-3 col-md-6 col-sm-8">
            <div className="single-team text-center mt-80" style={{ width: '250px', height: '250px' }}>
              <div className="author-thumb pb-25">
                <GatsbyImage image={image} alt={team.title} />
              </div>
              <div className="author-content">
                <a><h6>{team.title}</h6></a>
                <span dangerouslySetInnerHTML={{ __html: team.excerpt }} />
                <ul className="mt-15">
                  {facebook && <li><a href={facebook} aria-label="button"><i className="flaticon-facebook"></i></a></li>}
                  {twitter && <li><a href={twitter} aria-label="button"><i className="flaticon-twitter-logo-silhouette"></i></a></li>}
                  {linkedin && <li><a href={linkedin} aria-label="button"><i className="flaticon-linkedin-logo"></i></a></li>}
                  {instagram && <li><a href={instagram} aria-label="button"><i className="flaticon-instagram-social-network-logo-of-photo-camera"></i></a></li>}
                </ul>
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  </section>
)

export default injectIntl(Team)