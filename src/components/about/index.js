import React from 'react'

const About = () => (
  <section id="about-part" className="about-part bg_cover pt-175" style={{backgroundImage:`url(/images/pdg.png`}}>
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-6 col-lg-7 offset-lg-5">
          <div className="about-content">
            <div className="video">
              <a className="video-popup" href="https://www.youtube.com/watch?v=2uA4XOmsrrA" aria-label="button"><i className="flaticon-music-player-play"></i></a>
            </div>
            <div className="about-text">
              <h3 className="mb-25">Discours du President sur Abidjan2021</h3>
              <p>Chers hôtes qui nous accueillez, chers invités,
              <br/>Chers AfricTivistes,</p>
              <p className="mb-25">En novembre 2015, nous nous sommes réunis à Dakar, dans la capitale sénégalaise, pour porter ensemble des idéaux de changement reposant sur des valeurs communes d’innovation, d'entraide, de partage, de soutien mutuel et de don de soi. Nous venions de commencer et il fallait trouver des réponses à la restriction de l’espace civique ainsi que sur les menaces qui pèsent sur les activistes pro-démocratie. En juin 2018, nous nous sommes réunis à Ouagadougou dans la capitale Burkinabé, pays du très inspirant Thomas Sankara. Ce fut une occasion pour nous de tendre la main aux autorités politiques. Nous avions eu l’honneur de recevoir le Président du Faso, Monsieur Roch Marc Christian Kaboré à qui nous avions fait passer un message à l’encontre de ses homologues africains pour qu’ils cessent de considérer les activistes pro-démocratie comme des opposants politiques. Durant ce deuxième Sommet de Ouaga2008, nous avions pris l’engagement d’être de nouvelles forces de contribution. Aujourd’hui, nous portons plusieurs projets numériques dont le Local Open GovLab. Pendant que nous lancions ce troisième Sommet, 7 membres de l’organisation aux compétences diverses sont actuellement déployés dans 7 collectivités locales de la sous-région pour mettre en œuvre notre parcours assisté à la Gouvernance Locale Ouverte.
              <br/>
              <br/>
              </p>
            </div>
            <div className="signature">
              <img src="/images/signature.png" alt="Signature"/>
              <h6 className="mt-30">CHEIKH FALL</h6>
              <span>- President des AfricTivistes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About