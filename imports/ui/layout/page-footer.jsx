import Radium from 'radium';
import React, { Component } from 'react';

class PageFooter extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <footer style={s.base}>
        <a style={s.publistLove} href="/">Publist ♡</a>
      </footer>
    );
  }
}

var s = {
  base: {
    padding: '50px 0',
    textAlign: 'center'
  },
  publistLove: {
    color: '#323544',
    ':hover': {
      color: '#CC1B1B'
    }
  }
}

export default Radium(PageFooter);
