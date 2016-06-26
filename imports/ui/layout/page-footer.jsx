import Radium from 'radium';
import React, { Component } from 'react';

class PageFooter extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <footer style={s.base}>
        Publist ♡
      </footer>
    );
  }
}

var s = {
  base: {
    padding: '50px 0',
    textAlign: 'center'
  },
}

export default Radium(PageFooter);
