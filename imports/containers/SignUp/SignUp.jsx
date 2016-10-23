import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

// Import templates
import BlockWhite from '/imports/components/BlockWhite/BlockWhite.jsx';
import SignUpProgressBar from '/imports/components/SignUpProgressBar/SignUpProgressBar.jsx';
import ProfileNameForm from '/imports/components/ProfileNameForm/ProfileNameForm.jsx';

class Signup extends Component {

  constructor(props) {
    super(props);
  }

  renderSignUpStep() {
    return <ProfileNameForm s={s.formStyles} />
  }

  render() {
    return (
      <div style={s.base}>
        <BlockWhite width="500px">

          <SignUpProgressBar step={this.props.step} maxSteps="3" />

          <form action="#" style={{padding: '0 30px'}}>
            {this.renderSignUpStep(this.props.step)}
            <button style={s.submit} type="submit">Volgende</button>
          </form>

        </BlockWhite>
      </div>
    );
  }

}

var s = {
  base: {
    fontSize: 'default',
    lineHeight: 'default',
  },
  submit: {
    margin: '0 auto',
    width: '100%',
    marginTop: '30px',
    color: '#fff',
    fontSize: '1em',
    padding: '5px',
    backgroundColor: '#e05b5a',
    border: 'none',
  },
  formStyles: {
    title: {
      color: '#e05b5a',
      textAlign: 'center',
      fontSize: '1.0em',
      margin: '15px'
    },
    formInput: {
      width: '100%',
      display: 'block',
      borderStyle: 'none none solid none',
      borderColor: '#333',
      borderWidth: '1px',
      padding: '5px',
      fontSize: '1em',
      marginTop: '30px',
      marginBottom: '30px'
    }
  }
}

export default Radium(Signup);
