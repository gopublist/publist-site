import Radium from 'radium';
import React, { Component } from 'react';
import Remarkable from 'remarkable';

import BlogStyles from './blog-styles.jsx';

class PostBlock extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {

    var md = new Remarkable({
      html: true
    });

    console.log(this.props.post);

    return (
      <article style={styles.base}>
        <header style={Object.assign({}, BlogStyles.header, {backgroundColor: this.props.post.color ? this.props.post.color : '#FF6B6B'})}>
          <h1 style={BlogStyles.headerTitle}><a href={('blog/' + this.props.post._id)} style={{color: '#fff'}}>{this.props.post.title}</a></h1>
          <div style={Object.assign({}, BlogStyles.headerImg, {backgroundImage: 'url("'+this.props.post.headerImage+'")'})}></div>
        </header>
        <div style={BlogStyles.meta}>
          Door <a href="mailto:steven@publist.nl" target="_top">{this.props.post.authorName}</a>
          <div style={BlogStyles.postDate}>{this.props.post.publishedFrom}</div>
        </div>
        <div style={BlogStyles.excerpt} dangerouslySetInnerHTML={{__html: md.render(this.props.post.teaser)}}>
        </div>
        <div style={BlogStyles.btnWrapper}>
          <a href={('blog/' + this.props.post._id)} className="btn btn-large" style={BlogStyles.btn}>Lees verder</a>
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
  },
}

export default Radium(PostBlock);
