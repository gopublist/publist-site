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
  }

  // newBlogPost :: ? -> ?
  newBlogPost() { FlowRouter.go('Admin.Blog.details', {blogPostId: 'new'}) }

  // deleteBlogPost :: Int _id -> Bool
  deleteBlogPost(_id) { return BlogPosts.remove(_id) }

  // renderBlogPosts :: ? -> [Post]
  renderBlogPosts() { return this.props.blogPosts.map(post => <Post key={post._id} post={post} />) }

  render() {

    return (
      <div styles={styles.base}>
        <button onClick={this.newBlogPost.bind(this)}>Nieuwe blog post</button>
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
