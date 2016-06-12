import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo';
 
export const BlogPosts = new Mongo.Collection('blogPosts');

Meteor.methods({
  'blogPosts.insert'(data) {

    // Make sure the user is logged in
    if (! Meteor.userId()){
      throw new Meteor.Error('not-authorized');
    }

    BlogPosts.insert({
      _id: String(data._id),
      title: data.title,
      teaser: data.teaser,
      text: data.text,
      color: data.color,
      headerImage: data.headerImage,
      authorName: data.authorName,
      authorLink: data.authorLink,
      publishedFrom: data.publishedFrom,
      createdAt: new Date()
    });
  },
  'blogPosts.update'(blogPostId, data) {

    // Make sure the user is logged in
    if (! Meteor.userId()){
      throw new Meteor.Error('not-authorized');
    }

    BlogPosts.update(blogPostId, {
      title: data.title,
      teaser: data.teaser,
      text: data.text,
      color: data.color,
      headerImage: data.headerImage,
      authorName: data.authorName,
      authorLink: data.authorLink,
      publishedFrom: data.publishedFrom,
      modifiedAt: new Date()
    });
  },
  'blogPosts.remove'(blogPostId){
    BlogPosts.remove(blogPostId);
  }
});