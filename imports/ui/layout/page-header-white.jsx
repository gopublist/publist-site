import Radium from 'radium';
import React, { Component } from 'react';

// Import styles
import SocialMediaButtonStyle from '../../style/social-media-button.jsx';

// Import templates
import SocialMediaButton from '../modules/button/social-media-button.jsx';
 
class Header extends Component {

  constructor(props) {
    super(props);
  }
 
  navigateToAboutPage(e) {
    e.preventDefault();
    FlowRouter.go('about');
  }

  navigateToBlogPage(e) {
    e.preventDefault();
    FlowRouter.go('blog');
  }

  render() {
    return (
      <div className="topbar" style={styles.topbar}>
        <a style={styles.logo} href="/" title="Terug naar start">Publist</a>
        <nav className="social-media-buttons" style={styles.socialMediaButtons}>
          <SocialMediaButton styles={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.twitterWhite)} url="https://twitter.com/gopublist">Twitter</SocialMediaButton>
          <SocialMediaButton styles={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.facebookWhite)} url="https://fb.com/gopublist">Facebook</SocialMediaButton>
          <SocialMediaButton styles={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.gplusWhite)} url="https://plus.google.com/109440913291033879409">Google+</SocialMediaButton>
          <a ref="over" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, styles.page)} href="/over" onClick={this.navigateToAboutPage.bind(this)} target="_self">over</a>
          <a ref="blog" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, styles.page)} href="/blog" onClick={this.navigateToBlogPage.bind(this)} target="_self">blog</a>
        </nav>
      </div>
    );
  }
}

var styles = {
  topbar: {
    height: '80px',
    width: '100%',
    lineHeight: '66px',
    display: 'flex',
    position: 'absolute',
    padding: '0 15px',
    justifyContent: 'space-between',
    zIndex: 10,
    '@media (min-width: 480px)': {
      padding: '0 50px'
    }
  },
  logo: {
    alignSelf: 'flex-start',
    background: 'center center no-repeat url("/img/logo/publist-logo-white.svg")',
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
  page: {
    display: 'block',
    textIndent: 0,
    textDecoration: 'none',
    width: 'auto',
    padding: '0 15px',
    marginRight: 0,
    lineHeight: '32px',
    borderRadius: '30px',
    border: 'solid 2px #fff',
    color: '#fff',
    ':hover': {
      borderColor: '#EC6E6B',
      color: '#EC6E6B'
    },
  }
}

export default Radium(Header);
