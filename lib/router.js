import React, { Component } from 'react';

/**
 *  App
 */
import App from '../imports/ui/App.jsx';

/**
 *  Landing
 */
import Landing from '../imports/ui/landing/landing.jsx';

FlowRouter.route('/', {
  action(params) {
    ReactLayout.render(App, {content: <Landing />});
  }
});

/**
 *  Questionnaire
 */
import Questionnaire from '../imports/ui/questionnaire/questionnaire.jsx';

FlowRouter.route('/questionnaire', {
  name: 'Questionnaire.show',
  action(params) {
    ReactLayout.render(App, {content: <Questionnaire />});
  }
});

/**
 *  Blog
 */
import Blog from '../imports/ui/blog/blog.jsx';
import BlogPost from '../imports/ui/blog/post-details.jsx';

FlowRouter.route('/blog', {
  name: 'Blog.show',
  action(params) {
    ReactLayout.render(App, {content: <Blog />});
  }
});

FlowRouter.route('/blog/:_id', {
  name: 'Blog.details',
  action(params, queryParams) {

    var _id = FlowRouter.getParam('_id');

    if( !isNaN(_id) ){
      ReactLayout.render(App, {content: <BlogPost _id={_id} />});
    }else{
      ReactLayout.render(App, {content: <BlogPost />});
    }

  }
});

/**
 *  Track routes
 */
function trackRoute(){
  Meteor.Piwik.trackPage(FlowRouter.current().path);
}
FlowRouter.triggers.enter(trackRoute);
