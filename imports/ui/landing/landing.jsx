import Radium from 'radium';
import React, { Component } from 'react';

import NewsletterSubscribe from '../modules/newsletter/mailchimp-subscribe.jsx';

class Landing extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="landing-wrapper" style={s.base}>
        <div style={s.maxWidth}>

          <h1 style={s.introTitle}>Thought leadership binnen handbereik</h1>

          <p style={s.introText}>
            Vind als opdrachtgever aansprekende journalisten, bloggers en columnisten. Creëer als freelancer een online portfolio. Weet samen de wereld te bereiken.
          </p>

          <NewsletterSubscribe showLabel="true" />

        </div>
      </div>
    );
  }
}

var s = {
  base: {
    backgroundColor: '#000',
    backgroundImage: 'url(/img/landing/photo-laptop.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    maxWidth: '100%',
    height: '100%',
    paddingTop: '80px',
    position: 'relative',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: '1.25em'
  },
  col: {
    '@media (min-width: 480px)': {
      flex: 1,
    }
  },
  introTitle: {
    fontWeight: 'bold',
    fontSize: '26px',
    fontWeight: 'normal',
    marginBottom: '30px'
  },
  introText: {
    marginBottom: '50px',
    maxWidth: '522px',
  },

  maxWidth: {
    maxWidth: '680px',
    margin: '0 auto',
    position: 'relative',
  },
}

export default Radium(Landing);
