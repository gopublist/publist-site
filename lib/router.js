import React, { Component } from 'react';

/**
 *  APP
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

FlowRouter.route('/blog/:blogPostId', {
  name: 'Blog.details',
  action(params, queryParams) {

    if( !isNaN(params.blogPostId) ){
      ReactLayout.render(App, {content: <BlogPost blogPostId={params.blogPostId} />});
    }else{
      ReactLayout.render(App, {content: <BlogPost />});
    }

  }
});

/**
 *  ADMIN
 */
import Admin from '../imports/ui/admin/admin.jsx';

FlowRouter.route('/admin', {
  name: 'Admin',
  action(params) {
    ReactLayout.render(App, {content: <Admin />});
  }
});

/* Blog */
import EditPost from '../imports/ui/admin/blog/editPost.jsx';

FlowRouter.route('/admin/blog', {
  name: 'Admin.Blog',
  action(params) {
    ReactLayout.render(App, {content: <Admin />});
  }
});

FlowRouter.route('/admin/blog/:blogPostId', {
  name: 'Admin.Blog.details',
  action(params) {
    var content = <EditPost blogPostId={params.blogPostId} />;
    ReactLayout.render(App, {content: <Admin content={content} />});
  }
});

/**
 *  Track routes
function trackRoute(){
  Meteor.Piwik.trackPage(FlowRouter.current().path);
}
FlowRouter.triggers.enter(trackRoute);
 */
