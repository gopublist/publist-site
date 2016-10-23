import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import { createContainer } from 'meteor/react-meteor-data';

// Models
import { BlogPosts } from '../../api/blogPosts.js';

// Import templates
import PageHeader from '../layout/page-header.jsx';
import PostBlock from './post-block.jsx';

class Blog extends Component {

  constructor(props) {
    super(props);
  }

  // renderBlogPosts :: ? -> [Post]
  renderBlogPosts() { return this.props.blogPosts.map(post => <PostBlock key={post._id} post={post} />) }

  render() {
    return (
      <div className="blog-wrapper" style={styles.base}>
        <PageHeader />
        <h1 style={styles.title}>Publist blog</h1>
        {this.renderBlogPosts()}
      </div>
    );
  }

}

var styles = {
  base: {
    margin: '0 auto 30px auto',
  },
  title: {
    display: 'none',
    color: '#ccc',
    marginTop: '30px',
    marginLeft: '46px',
    '@media (min-width: 480px)': {
      display: 'block'
    }
  }
}

Blog.propTypes = {
  blogPosts: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    blogPosts: BlogPosts.find({}, { sort: {_id: -1} }).fetch()
  };
}, Radium(Blog));
