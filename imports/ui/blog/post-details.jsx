import Radium from 'radium';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Remarkable from 'remarkable';

// Import models
import { BlogPosts } from '../../api/blogPosts.js';

// Import styles
import SocialMediaButtonStyle from '../../style/social-media-button.jsx'
import BlogStyles from './blog-styles.jsx';

class PostDetails extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.makeSticky();
  }

  makeSticky() {
    var menu = $('.share-page');
    if( menu.length <= 0 ) return;
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

    if( ! this.props.post)
      return (<div />);

    var md = new Remarkable({
      html: true
    });

    var shareUrls = {
      twitter: 'https://twitter.com/share?purl='+encodeURIComponent(document.location)+'&text='+encodeURIComponent(this.props.post.title),
      facebook: 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location),
      gplus: 'https://m.google.com/app/basic/share?cbp=12p5cc38y46k2&cid=5&soc-app=115&soc-platform=1&spath=/app/basic/stream&sparm=cbp%3Dkzz1m3u312ho%26cid%3D5%26soc-app%3D115%26soc-platform%3D1&href='+encodeURIComponent(document.location)
    }

    return (
      <article style={styles.base}>
        <header style={Object.assign({}, BlogStyles.header, this.props.post.color && {backgroundColor: this.props.post.color})}>
          <h1 style={Object.assign({}, BlogStyles.headerTitle, {color: '#fff'})}>{this.props.post.title}</h1>
          <div style={Object.assign({}, BlogStyles.headerImg, {backgroundImage: 'url("'+this.props.post.headerImage+'")'})}></div>
        </header>
        <div style={styles.sharePageButtons} className="share-page social-media-buttons">
          <a ref="twitter" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.twitter, styles.socialMediaButton)} target="_blank" href={shareUrls.twitter}>Twitter</a>
          <a ref="facebook" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.facebook, styles.socialMediaButton)} target="_blank" href={shareUrls.facebook}>Facebook</a>
          <a ref="gplus" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.gplus, styles.socialMediaButton)} target="_blank" href={shareUrls.gplus}>Google+</a>
        </div>
        <div style={BlogStyles.meta}>
          Door <a href={this.props.post.authorLink} target="_top">{this.props.post.authorName}</a>
          <div style={BlogStyles.postDate}>{this.props.post.publishedFrom}</div>
        </div>
        <div style={BlogStyles.excerpt} dangerouslySetInnerHTML={{__html: md.render(this.props.post.text)}}>
        </div>
        <div style={BlogStyles.btnWrapper}>
          <a href="/blog" className="btn btn-large" style={BlogStyles.btn}>Terug naar overzicht</a>
        </div>
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
    padding: '8px',
    width: '36px',
    position: 'relative',
    '@media (min-width: 1400px)': {
      marginTop: '10px',
      padding: '0 50px'
    }
  },
}

PostDetails.propTypes = {
  post: PropTypes.object.isRequired
};

export default createContainer((props) => {
  return {
    post: BlogPosts.find({_id: props.blogPostId}).fetch()[0]
  };
}, Radium(PostDetails));
