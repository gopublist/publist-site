import Radium from 'radium';
import React, { Component } from 'react';

import SocialMediaButtonStyle from '../../style/social-media-button.jsx'

import One from './tmp/1.jsx';
import Two from './tmp/2.jsx';

class PostDetails extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.makeSticky();
  }

  makeSticky() {
    var menu = $('.share-page');
    var menuPosition = menu.offset().top;
    $('#react-root').on('scroll', function() {
      if ($('#react-root')[0].scrollTop >= menuPosition) {
        $('.share-page').addClass('is-fixed');
        menu.style.position = 'fixed';
        menu.style.top = '45px';
      } else {
        $('.share-page').removeClass('is-fixed');
        menu.style.position = 'absolute';
        menu.style.top = '';
      }
    });
  }

  render() {

    var shareUrls = {
      twitter: 'https://twitter.com/share?purl='+encodeURIComponent(document.location)+'&text='+encodeURIComponent('And we\'re off! Lees het verhaal rondom de start van @gopublist ->'),
      facebook: 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location),
      gplus: 'https://m.google.com/app/basic/share?cbp=12p5cc38y46k2&cid=5&soc-app=115&soc-platform=1&spath=/app/basic/stream&sparm=cbp%3Dkzz1m3u312ho%26cid%3D5%26soc-app%3D115%26soc-platform%3D1&href='+encodeURIComponent(document.location)
    }

    var postContent = (this.props._id == 1 ? <One shareUrls={shareUrls} /> : <Two shareUrls={shareUrls} />);

    return (
      <article style={styles.base}>
        {postContent}
      </article>
    );

  }

}
  
var styles = {
  base: {
    backgroundColor: '#fff',
    margin: '20px auto',
    paddingBottom: '25px',
    position: 'relative',
    maxWidth: '90%',
  },
  header: {
    backgroundImage: 'url("/img/blog/header-1.png")',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: '#0F303F',
    position: 'relative',
    margin: '0 auto',
    '@media (min-width: 480px)': {
      minHeight: '500px'
    }
  },
  title: {
    textAlign: 'center',
    margin: 0,
    padding: '60px',
    maxWidth: '1050px',
    color: '#fff',
    margin: '0 auto',
    lineHeight: '50px',
    fontSize: '38px'
  },
  meta: {
    maxWidth: '1050px',
    padding: '30px 30px 15px 30px',
    color: '#4d5056',
    margin: '0 auto'
  },
  postDate: {
    fontSize: '0.9em',
    color: '#4d5056'
  },
  excerpt: {
    maxWidth: '1050px',
    padding: '0 30px',
    margin: '0 auto'
  },
  btnWrapper: {
    maxWidth: '1050px',
    padding: '0 30px',
    margin: '0 auto'
  },
  btn: {
    backgroundColor: '#CC1B1B',
    color: '#fff'
  },

  sharePageButtons: {
    display: 'block',
    position: 'absolute',
    paddingLeft: '28px',
    top: '530px',
    zIndex: 5,
    width: '100%',
    textAlign: 'right',
    paddingRight: '30px',
    '@media (min-width: 1400px)': {
      paddingRight: '0',
      width: '48px',
      padding: '0 50px'
    }
  },

  socialMediaButton: {
    // display: 'inline-block',
    padding: '8px',
    width: '36px',
    position: 'relative',
    // marginLeft: '10px',
    '@media (min-width: 1400px)': {
      // marginLeft: 0,
      marginTop: '10px',
      padding: '0 50px'
    }
  },
}

export default Radium(PostDetails);