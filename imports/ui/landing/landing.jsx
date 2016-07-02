import Radium from 'radium';
import React, { Component } from 'react';

import PageHeader from '../layout/page-header-white.jsx';
import NewsletterSubscribe from '../modules/newsletter/mailchimp-subscribe.jsx';
import NewsletterSubscribeBanner from '../modules/banner/banner-wide.jsx';
import TargetAudience from './sections/target-audience.jsx';
import PageFooter from '../layout/page-footer.jsx';

class Landing extends Component {

  constructor(props) {
    super(props);
  }
 
  //+ createTargetAudienceSection :: Object -> Element
  createTargetAudienceSection(data) {
    return (
      <section>
        <img src="" />
      </section>
    )
  }

  render() {
    return (
      <div className="landing-wrapper" style={s.base}>

        <PageHeader />

        <section style={s.landingEntrance}>
          <div style={s.maxWidth}>
            <h1 style={s.introTitle}>Thought leadership binnen handbereik</h1>
            <p style={s.introText}>
              Vind als opdrachtgever aansprekende journalisten, bloggers en columnisten. Creëer als freelancer een online portfolio. Weet samen de wereld te bereiken.
            </p>
            <NewsletterSubscribe showLabel="true" />
          </div>
        </section>

        <TargetAudience
          image="/img/persona/sigmund.svg"
          title="Content platform gebouwd voor schrijvers"
          description="Jouw gepubliceerde werk is waardevol. Met een portfolio op Publist beheer je eenvoudig al jouw online gepubliceerde artikelen en ben je vindbaar voor opdrachtgevers."
          benefits={[
            {image: '/img/icon/benefit/Freelancer/Online vindbaarheid.svg', title: 'Online portfolio', description: 'Al je gepubliceerde werk overzichtelijk online in je portfolio.'},
            {image: '/img/icon/benefit/Freelancer/Vind opdrachten.svg', title: 'Vind opdrachtgevers', description: 'Vinden van- en gevonden worden door opdrachtgevers voor het schrijven van blogs, e-books en whitepapers.'},
            {image: '/img/icon/benefit/Freelancer/Thought leadership.svg', title: 'Thought leadership', description: 'Deel jouw kennis en bereik thought leadership binnen jouw expertise.'},
            {image: '/img/icon/benefit/Freelancer/Online vindbaarheid.svg', title: 'Online vindbaar', description: 'Vergroot je online vindbaarheid met je online portfolio.'}
          ]} />

        <NewsletterSubscribeBanner>
          <NewsletterSubscribe extraStyles={s.newsletterSubscribeExtraStyles} />
        </NewsletterSubscribeBanner>

        <TargetAudience
          image="/img/persona/roy.svg"
          title="Vind schrijvers die aansluiten bij jouw visie en tone of voice"
          description="Je onderneming is het waard om te communiceren met relevante en kwalitatief hoogwaardige content."
          benefits={[
            {image: '/img/icon/benefit/Opdrachtgever/Conversie.svg', title: 'Conversie', description: 'Weet met relevante content meer conversie via jouw website te behalen.'},
            {image: '/img/icon/benefit/Opdrachtgever/Customor journey.svg', title: 'Buyer journey', description: 'Bereik je doelgroep binnen elke fase van het beslissingsproces.'},
            {image: '/img/icon/benefit/Opdrachtgever/Thought leaderhip opdrachtgever.svg', title: 'Thought leadership', description: 'Laat professionele schrijvers je expertise vertalen naar relevante content.'},
            {image: '/img/icon/benefit/Opdrachtgever/Timesaver.svg', title: 'Huge timesaver', description: 'Bereik je doelgroep binnen elke fase van het beslissingsproces.'}
          ]} />

        <NewsletterSubscribeBanner>
          <NewsletterSubscribe extraStyles={s.newsletterSubscribeExtraStyles} />
        </NewsletterSubscribeBanner>

        <PageFooter />

      </div>
    );
  }

}

var s = {
  base: {
    maxWidth: '100%',
    position: 'relative',
    lineHeight: '1.25em',
    minHeight: '100%',
    '@media (min-width: 1200px)': {
      fontSize: '1.2em'
    }
  },
  landingEntrance: {
    paddingTop: '80px',
    paddingRight: '15px',
    paddingBottom: '15px',
    paddingLeft: '15px',
    backgroundColor: '#000',
    backgroundImage: 'url(/img/landing/photo-laptop.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    height: '100vh',
    color: '#fff',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 340px)': {
      maxHeight: '568px',
    }
  },
  col: {
    '@media (min-width: 480px)': {
      flex: 1,
    }
  },
  introTitle: {
    fontFamily: 'LatoWebBold, sans-serif',
    fontSize: '1.5em',
    lineHeight: '1.15em',
    fontWeight: 'normal',
    marginBottom: '30px'
  },
  introText: {
    marginBottom: '50px',
    width: '522px',
    fontSize: '1em',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '100%',
    '@media (min-width: 1200px)': {
      width: '670px'
    }
  },

  newsletterSubscribeExtraStyles: {
    base: {
      width: '670px',
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    description: {
      flex: '100%',
      fontSize: '1.30em',
      lineHeight: '1.3em',
      textAlign: 'center',
      marginBottom: '25px',
      '@media (min-width: 1200px)': {
        flex: '100%'
      }
    },
  },

  maxWidth: {
    width: '680px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'relative',
    '@media (min-width: 1200px)': {
      width: '800px'
    }
  },
}

export default Radium(Landing);
