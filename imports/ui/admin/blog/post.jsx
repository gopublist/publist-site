import Radium from 'radium'; 
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';

class Post extends Component {

  constructor(props) {
    super(props);
  }

  deletePost() {
    if( confirm('Weet je zeker dat je dit artikel wilt verwijderen?') ){
      this.props.deletePost(this.props.article._id);
    }
  }

  editPost(e) {
    FlowRouter.go('Admin.Blog.details', {blogPostId: this.props.post._id});
  }

  render() {

    return (
      <article style={styles.base}>
        {this.props.post.title}
        <a ref="edit" onClick={this.editPost.bind(this)} style={styles.btnSmall}>
          Edit
        </a>
        <a ref="delete" onClick={this.deletePost.bind(this)} style={styles.btnSmall}>
          Delete
        </a>
      </article>
    );

  }

};

var styles = {
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2px 0',
    ':hover': {
      backgroundColor: '#F69E35',
      color: '#fff'
    }
  },
  articleTitle: {
    flex: 1,
    padding: '0 10px',
    margin: '0 0 0 0',
  },
  btnSmall: {
    alignSelf: 'center',
    display: 'flex',
    flex: 0,
    width: '100px',
    cursor: 'pointer',
    margin: '0 5px',
    display: 'inline-block',
    backgroundColor: '#F69E35',
    padding: '0 10px 0 10px',
    lineHeight: '23px',
    height: '23px',
    fontFamily: 'Titillium-Bold, sans-serif',
    backgroundColor: '#fff',
    color: '#666',
    ':hover': {
      color: '#000',
    }
  }
}

export default Radium(Post);
