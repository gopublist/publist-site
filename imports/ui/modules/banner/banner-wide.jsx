import Radium from 'radium';
import React, { Component } from 'react';

// Import styles
import SocialMediaButtonStyle from '../../../style/social-media-button.jsx';

// Import templates
import SocialMediaButton from '../button/social-media-button.jsx';

class BannerWide extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div style={s.base}>
        {this.props.children}
        <div style={s.socialMediaButtonWrapper}>
          <SocialMediaButton styles={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.twitter)} url="https://twitter.com/gopublist">Twitter</SocialMediaButton>
          <SocialMediaButton styles={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.facebook)} url="https://fb.com/gopublist">Facebook</SocialMediaButton>
          <SocialMediaButton styles={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.gplus)} url="https://plus.google.com/109440913291033879409">Google+</SocialMediaButton>
        </div>
      </div>
    );
  }
}

var s = {
  base: {
    width: '100%',
    padding: '50px 15px',
    backgroundColor: '#323544',
    color: '#fff'
  },
  socialMediaButtonWrapper: {
    marginTop: '25px',
    textAlign: 'center',
  },
}

// Validate the props passed to this components
BannerWide.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default Radium(BannerWide);
