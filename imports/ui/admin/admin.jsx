import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './accounts-ui-wrapper.jsx';

import { Accounts } from 'meteor/accounts-base';

import BlogOverview from './blog/overview.jsx';

// Admin component
export default class Admin extends Component {

  constructor(props) {
    super(props);

    Accounts.ui.config({
      // passwordSignupFields: 'USERNAME_ONLY',
    });

  }

  loadContent() {

    // Show login form if not logged in    
    if ( ! this.props.currentUser || ! this.props.currentUser.emails.filter((email) => email.address == 'mail@bartroorda.nl' || email.address == 'steven@publist.nl') )
      return <AccountsUIWrapper/>;

    // If prop 'content' is given, show 'content'
    if ( this.props.content ){
      return [<AccountsUIWrapper/>, this.props.content];
    }

    // By default, show blog overview
    else{
      return [<AccountsUIWrapper/>, <BlogOverview/>];
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
}, Admin);

