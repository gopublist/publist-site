import Radium from 'radium';
import React, { Component } from 'react';

import SocialMediaButtonStyle from '../../style/social-media-button.jsx'
 
class Header extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="topbar" style={styles.topbar}>
        <a style={styles.logo} href="/" title="Terug naar start">Publist</a>
        <nav className="social-media-buttons" style={styles.socialMediaButtons}>
          <a ref="twitter" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.twitter)} target="_blank" href="https://twitter.com/gopublist">Twitter</a>
          <a ref="facebook" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.facebook)} target="_blank" href="https://fb.com/gopublist">Facebook</a>
          <a ref="gplus" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.gplus)} target="_blank" href="https://plus.google.com/109440913291033879409">Google+</a>
          <a ref="blog" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, styles.blog)} href="/blog" target="_self">blog</a>
        </nav>
      </div>
    );
  }
}

var styles = {
  topbar: {
    backgroundColor: '#fff',
    height: '80px',
    width: '100%',
    lineHeight: '66px',
    display: 'flex',
    position: 'fixed',
    padding: '0 15px',
    justifyContent: 'space-between',
    zIndex: 10,
    '@media (min-width: 480px)': {
      padding: '0 50px'
    }
  },
  logo: {
    alignSelf: 'flex-start',
    background: 'center center no-repeat url("/img/logo/logo.svg")',
    display: 'block',
    textIndent: '-9999px',
    width: '150px',
    height: '80px',
    float: 'left',
  },
  socialMediaButtons: {
    float: 'right',
    alignSelf: 'center',
    display: 'flex',
    margin: 0,
    padding: 0
  },
  blog: {
    display: 'block',
    textIndent: 0,
    textDecoration: 'none',
    width: 'auto',
    padding: '0 15px',
    marginRight: 0,
    lineHeight: '36px',
    borderRadius: '30px',
    border: 'solid 1px #000',
    ':hover': {
      borderColor: '#EC6E6B',
      color: '#EC6E6B'
    },
  }
}

export default Radium(Header);
