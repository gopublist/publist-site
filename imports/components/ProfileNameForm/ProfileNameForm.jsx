import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class ProfileNameForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    s = Object.assign({}, this.props.s, s);
    return (
      <section>

        <img style={s.img} src="https://trello-attachments.s3.amazonaws.com/5777e2bc4c72c96a98d8ec88/113x115/61d710a9885db7f9618e0af13a264c42/upload_10_23_2016_at_10_13_53_PM.png" />

        <h1 style={s.title}>Vertel ons jouw naam</h1>

        <input style={{...s.formInput, ...s.firstName}} name="firstName" placeholder="Voornaam" />
        <input style={{...s.formInput, ...s.lastName}} name="lastName" placeholder="Achternaam" />

        <small style={s.extraInfo}>
          Met je echte naam word je beter gevonden
        </small>

      </section>
    );
  }

}

var s = {
  base: {
    fontSize: 'default',
    lineHeight: 'default',
  },
  img: {
    width: '90px',
    height: '92px',
    display: 'block',
    margin: '30px auto',
  },
  extraInfo: {
    display: 'block',
    textAlign: 'center',
    fontSize: '0.8em'
  }
}

export default Radium(ProfileNameForm);
