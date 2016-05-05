import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './accounts-ui-wrapper.jsx';

import { Accounts } from 'meteor/accounts-base';

import BlogPostList from './blog/overview.jsx';
import BlogPostEditForm from './blog/post/editPost.jsx';

// PublistAdmin component
export default class PublistAdmin extends Component {

  constructor(props) {
    super(props);

    Accounts.ui.config({
      // passwordSignupFields: 'USERNAME_ONLY',
    });

  }

  loadContent() {

    if ( ['bartwr'].indexOf(this.props.currentUser.username) != -1 ){
      return [<AccountsUIWrapper/>, <BlogPostList/>, <BlogPostEditForm/>];
    }
    else {
      return <AccountsUIWrapper/>;
    }
  }

  render() {

    return (

      <div style={styles.base}>

        <h1>Publist power panel</h1>

        <p>
          Op het moment biedt PPP de mogelijkheid om blog posts aan te maken, te bewerken en te verwijderen.
        </p>

        {this.loadContent()}

        <p>
          In de toekomst zal hier aan toegevoegd worden:
        </p>

        <ul>
          <li>Gebruikerslijst</li>
          <li>
            Statistieken
            <ul>
              <li>Websitebezoek</li>
              <li>Financieel</li>
              <li>Nieuwsbrief-stats</li>
            </ul>
          </li>
        </ul>

      </div>

    );
  }
};

var styles = {
  base: {
    padding: '15px'
  }
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, PublistAdmin);

