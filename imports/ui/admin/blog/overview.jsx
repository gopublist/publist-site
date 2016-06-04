import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// Models
import { BlogPosts } from '../../../api/blogPosts.js';

// Templates
import Post from './post.jsx';

// Overview component
export default class Overview extends Component {

  constructor(props) {
    super(props);
    this.state = { activeBlogPost: {} }
  }

  /**
   *  Delete an post
   * 
   * @param {int} _id
   * @return {(bool) true|false}
   */
  deleteBlogPost(_id) {
    return BlogPosts.remove(_id);
  }

  renderBlogPosts() {
    return this.props.blogPosts.map(post => <Post key={post._id} post={post} />);
  }

  render() {

    return (
      <div styles={styles.base}>
        {this.renderBlogPosts()}
      </div>
    );

  }

};

Overview.propTypes = {
  blogPosts: PropTypes.array.isRequired
};

export default createContainer(() => {
  return {
    blogPosts: BlogPosts.find({}, {
      sort: {_id: -1}
    }).fetch()
  };
}, Overview);

var styles = {
  base: {
    margin: '0 auto',
    width: '600px',
    maxWidth: '100%' 
  },
}
