import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class SignUpProgressBar extends Component {

  constructor(props) {
    super(props);
  }

  renderStep() {
    // step, maxSteps
    return <div style={s.step}></div>
  }

  render() {
    return (
      <div style={s.base}>
        {this.renderStep()}
      </div>
    );
  }

}

var s = {
  base: {
    width: '100%',
    height: '8px',
    backgroundColor: '#dbd8d2',
    borderRadius: '5px',
  },
  step: {
    height: '100%',
    backgroundColor: '#e05b5a',
    borderRadius: '5px',
  }
}

export default Radium(SignUpProgressBar);
