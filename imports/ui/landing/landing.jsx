import Radium from 'radium';
import React, { Component } from 'react';

import NewsletterSubscribe from './newsletter-subscribe.jsx';

class Landing extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="landing-wrapper" style={styles.base}>

        <NewsletterSubscribe />

        <div style={Object.assign({}, styles.col, styles.colLeft)}>
          <div style={styles.maxWidth}>

            <h1 style={styles.heading}>Publiceer en intrigeer de wereld</h1>

            <p>
              Publist is de portfolio-site waar de zakelijke markt in contact kan komen met freelance journalisten, bloggers en columnisten.
            </p>

            <p>
              We werken aan een zo gebruiksvriendelijk mogelijk platform. Zou je ons hierbij willen helpen door het invullen van een korte vragenlijst?
            </p>

            <p>
              <a href="/questionnaire" className="btn btn-large" style={styles.btnGo}>Let&#39;s go!</a>
            </p>

          </div>
        </div>
        <div style={Object.assign({}, styles.col, styles.colRight)}>

        </div>

      </div>
    );
  }
}

var styles = {
  base: {
    backgroundColor: '#ee7370',
    backgroundImage: 'repeating-linear-gradient(55deg, #ee7370, #ee7370 50%, #e05f5f 50%, #e05f5f 100%)',
    maxWidth: '100%',
    height: 'calc(100% - 80px)',
    position: 'relative',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 800px)': {
      backgroundImage: 'repeating-linear-gradient(90deg, #ee7370, #ee7370 50%, #e05f5f 50%, #e05f5f 100%)'
    },
    '@media (min-width: 480px)': {
      padding: '4% 4% 0 4%'
    },
  },
  col: {
    '@media (min-width: 480px)': {
      flex: 1,
    }
  },
  colLeft: {
    fontSize: '18px',
    lineHeight: '26px',
    '@media (min-width: 480px)': {
      paddingLeft: '4%',
    }
  },
  colRight: {
    height: '100%',
    backgroundImage:'url(img/illustration/ipad.svg)',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '50%',
    display: 'none',
    '@media (min-width: 480px)': {
      paddingRight: '4%',
      display: 'block',
    },
    '@media (min-width: 800px)': {
      position: 'relative',
      left: '180px',
    }
  },
  heading: {
    fontSize: '26px',
    fontWeight: 'normal'
  },
  maxWidth: {
    maxWidth: '420px',
    margin: '0 auto',
    position: 'relative',
  },
  moreInformationWrapper: {
    textAlign: 'center',
    position: 'absolute',
    margin: '0 auto',
    bottom: '150px',
    left: 0,
    width: '100%',
    textTransform: 'lowercase',
  },
  moreInformationBtn: {
    cursor: 'pointer',
    display: 'block',
    background: 'no-repeat center center',
    backgroundImage: 'url(http://bartroorda.nl/upimg/201504/s-20151211-165201.png)',
    width: '30px',
    height: '30px',
    backgroundSize: 'cover',
    margin: '10px auto',
    transition: 'margin 1s',
    ':hover': {
      'margin-top': '20px'
    }
  },
  intro: {
    display: 'none'
  }
}

export default Radium(Landing);
