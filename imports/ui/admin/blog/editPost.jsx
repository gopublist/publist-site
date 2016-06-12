import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// Import models
import { BlogPosts } from '../../../api/blogPosts.js';

export default class EditPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogPost: this.props.blogPost
    };

    console.log(this.props);
  }

 // componentWillReceiveProps(nextProps) {
 //    console.log(this.props);
 //    this.setState({
 //      blogPost: nextProps.blogPost
 //    });
 //  }

  // handleChange :: Event -> ?
  handleChange(e) {
    this.state.blogPost[e.target.name] = e.target.value;
    this.setState(this.state);
  }

  // getLatestBlogPost :: ? -> BlogPost undefined
  getLatestBlogPost() { return BlogPosts.find({}, {sort: { _id: -1 }}, {limit: 1}).fetch()[0] }

  // handleSubmit :: Event -> ?
  handleSubmit(e) {

    e.preventDefault();

    // Update data in mongodb if ID is given
    if( this.state.blogPost._id ) {
      Meteor.call('blogPosts.update', this.state.blogPost._id, this.state.blogPost);
    }

    // Insert data otherwise
    else {
      /* Find latest ID */ autoIncrementedId = this.getLatestBlogPost() ? parseInt(this.getLatestBlogPost()._id) + 1 : 1;
      /* Insert */ Meteor.call('blogPosts.insert', Object.assign({}, this.state.blogPost, {_id: autoIncrementedId}));
    }

    FlowRouter.go('Admin');

  }

  // render
  render() {

    return (
      <form ref="form" style={styles.base} onSubmit={this.handleSubmit.bind(this)}>

        <label style={styles.label}>
          * Titel
          <input style={styles.input} autoFocus="true" type="text" name="title" ref="title" value={this.state.blogPost.title} onChange={this.handleChange.bind(this)} />
        </label>

        <label style={styles.label}>
          * Teaser (= tekst die in het overzicht wordt weergegeven)
          <textarea style={Object.assign({}, styles.input, styles.textarea)} name="teaser" ref="teaserTextInput" defaultValue={this.state.blogPost.teaser} onChange={this.handleChange.bind(this)} ></textarea>
        </label>

        <label style={styles.label}>
          * Volledige tekst
          <textarea style={Object.assign({}, styles.input, styles.textarea)} name="text" ref="text" defaultValue={this.state.blogPost.text} onChange={this.handleChange.bind(this)}></textarea>
        </label>

        <p>
          Voor het opmaken van de content kun je gebruik maken van <a href="http://commonmark.org/help/" target="_blank">Markdown</a>. Markdown maakt het opmaken van teksten eenvoudig en 'distraction free'.
        </p>

        <label style={styles.label}>
          * URL van de header-afbeelding
          <input style={styles.input} type="text" name="headerImage" ref="headerImage" value={this.state.blogPost.headerImage} onChange={this.handleChange.bind(this)} />
        </label>

        <label style={styles.label}>
          Achtergrondkleur van header
          <input style={styles.input} type="text" name="color" ref="color" value={this.state.blogPost.color} onChange={this.handleChange.bind(this)} />
        </label>

        <label style={styles.label}>
          * Naam auteur
          <input style={styles.input} type="text" name="authorName" ref="authorName" value={this.state.blogPost.authorName ? this.state.blogPost.authorName : 'Steven Meijers'} onChange={this.handleChange.bind(this)} />
        </label>

        <label style={styles.label}>
          * Link auteur
          <input style={styles.input} type="text" name="authorLink" ref="authorLink" value={this.state.blogPost.authorLink ? this.state.blogPost.authorLink : 'mailto:steven@publist.nl'} onChange={this.handleChange.bind(this)} />
        </label>

        <label style={styles.label}>
          * Gepubliceerd op
          <input style={styles.input} type="date" name="publishedFrom" ref="publishedFrom" value={this.state.blogPost.publishedFrom} onChange={this.handleChange.bind(this)} />
        </label>

        <button type="submit">Submit</button>

      </form>
    );

  }

};

var styles = {
  base: {
    margin: '0 auto',
    width: '600px',
    maxWidth: '100%'
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 'bold'
  },
  input: {
    fontFamily: 'Titillium-Regular, sans-serif',
    marginTop: '10px',
    lineHeight: '20px',
    width: '600px',
    padding: '0 5px',
    lineHeight: '30px',
    display: 'block'
  },
  textarea: {
    lineHeight: '20px',
    height: '400px'
  }
}

EditPost.propTypes = {
  blogPost: PropTypes.object.isRequired
};

export default createContainer((props) => {
  return {
    blogPost: props.blogPost ? props.blogPost
      : props.blogPostId == 'new' ? {} : BlogPosts.find({_id: props.blogPostId}).fetch()[0]
  };
}, EditPost);
