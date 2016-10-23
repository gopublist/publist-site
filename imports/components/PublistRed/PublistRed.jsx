import React, { Component, PropTypes } from 'react';
import Radium, { StyleRoot } from 'radium';

// Import templates
import PageHeaderWhite from '/imports/ui/layout/page-header-white.jsx';

class PublistRed extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyleRoot style={s.base}>
        <PageHeaderWhite />
        <div style={s.body}>{this.props.content}</div>
      </StyleRoot>
    );
  }

}

var s = {
  base: {
    backgroundColor: '#e05b5a',
    width: '100%',
    // minHeight: '100%',
    height: '100%',
    overflow: 'auto',
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    paddingTop: '80px',
    paddingRight: '15px',
    paddingBottom: '15px',
    paddingLeft: '15px',
  }
}

PublistRed.propTypes = {
  content: PropTypes.any.isRequired
};

export default Radium(PublistRed);
