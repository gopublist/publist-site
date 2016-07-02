import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

// Import templates
import PageHeader from '../layout/page-header-white.jsx';
import NewsletterSubscribe from '../modules/newsletter/mailchimp-subscribe.jsx';
import NewsletterSubscribeBanner from '../modules/banner/banner-wide.jsx';
import PageFooter from '../layout/page-footer.jsx';

class About extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-wrapper" style={styles.base}>

        <PageHeader />

        <section style={s.pageHeader}>
          <div style={s.maxWidth}>
            <h1 style={s.headerTitle}>Publiceer en intrigeer de wereld met Publist</h1>
          </div>
        </section>

        <article style={s.pageContent}>
          <div style={s.maxWidth}>
            <h1 style={styles.title}>Wat is Publist</h1>
            <p>
              Publist biedt de mogelijkheid om door overzichtelijk weergegeven <span style={s.strongOnMobile}>portfolio's van freelance schrijvers</span> te bladeren. Je kunt opdrachten toekennen aan freelancers waarvan het eerdere gepubliceerde werk aansluit bij de visie en tone of voice van je organisatie.
            </p>
            <p>
              De verkregen content kan worden ingezet voor diverse online marketingdoeleinden, zoals het creëren van brand awareness, genereren van leads en het bereiken van meer conversie via de website.
            </p>
            <p>
              Voor freelance schrijvers is Publist de ideale manier om je eigen portfolio op te bouwen. Het overzichtelijk bijhouden van je eerder gepubliceerde werk draagt bij aan je <span style={s.strongOnMobile}>online vindbaarheid</span>. Door te schrijven over jouw expertise, weet je sneller een reputatie als thought leader op te bouwen.
            </p>
            <p>
              Een eenvoudig briefingssysteem, integratie met bestaande applicaties en een intern facturatie- en betalingssysteem maken Publist voor zowel opdrachtgever als freelancer een perfect platform om samen te wereld te bereiken.
            </p>
          </div>
        </article>

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
  pageHeader: {
    paddingTop: '80px',
    paddingRight: '15px',
    paddingBottom: '15px',
    paddingLeft: '15px',
    backgroundColor: '#000',
    backgroundImage: 'url(/img/about/about.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    height: '100vh',
    color: '#fff',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '@media (max-width: 340px)': {
      maxHeight: '568px',
    }
  },
  headerTitle: {
    fontFamily: 'LatoWebBold, sans-serif',
    fontSize: '1.2em',
    lineHeight: '1.15em',
    fontWeight: 'normal',
    marginTop: '72px',
    marginBottom: '30px',
  },
  
  pageContent: {
    margin: '100px 0',
    textAlign: 'center',
    padding: '0 30px',
    fontSize: '20px',
    '@media (max-width: 400px)': {
      fontSize: '16px',
      lineHeight: '22px',
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

  strongOnMobile: {
    '@media (max-width: 400px)': {
      fontWeight: 'bold'
    }
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

export default Radium(About);
