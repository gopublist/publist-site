import Radium from 'radium';
import React, { Component } from 'react';

class NewsletterSubscribe extends Component {

  constructor(props) {
    super(props);
  }

  submitForm(e) {
    e.preventDefault();
   
    var form = $(e.target).closest('form');
   
    $.ajax({
      type: form.attr('method'),
      url: form.attr('action'),
      data: form.serialize(),
      cache: false,
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      error: function(err) {

        s.notificationContainer.display = 'flex';

        setTimeout(function(){
          $('.notificationContainer').hide();
        }, 10000);

        return $('.notificationContainer').html('<div>Could not connect to server. Please try again later.</div>');

      },
      success: function(data) {

        s.notificationContainer.display = 'flex';

        setTimeout(function(){
          $('.notificationContainer').hide();
        }, 10000);

        var message;
        if (data.result === 'success') {
          message = data.msg;
          if (message = 'Almost finished... We need to confirm your email address. To complete the subscription process, please click the link in the email we just sent you.') {
            message = 'Dank voor je interesse! Je hebt een bevestigingsmail ontvangen. Voltooi hiermee je inschrijving.';
          }
          return $('.notificationContainer').html('<div>'+message+'</div>');
        } else {
          message = data.msg;
          return $('.notificationContainer').html('<div>'+message+'</div>');
        }

      }
    });

  }
 
  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)} style={s.base} action="https://publist.us1.list-manage.com/subscribe/post-json?u=ce0bb47feb2cc31030ee93bcd&amp;id=e0a49457d2&c=?" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate>

        <div style={s.hiddenMailchimp} aria-hidden="true"><input type="text" name="b_ce0bb47feb2cc31030ee93bcd_e0a49457d2" tabindex="-1" value="" /></div>

        <div style={Object.assign({}, s.notificationContainer)} className="notificationContainer"></div>

        <div style={s.flexRow}>
          <div style={Object.assign({}, s.col, s.description)}>
            Schrijf je alvast in
          </div>
          <input ref="email" style={Object.assign({}, s.col, s.input, s.inputEmail)} type="email" name="EMAIL" id="mce-EMAIL" placeholder="E-mailadres" />
          <input style={Object.assign({}, s.input, s.inputSubmit)} onClick={this.submitForm.bind(this)} class="btn" name="subscribe" id="mc-embedded-subscribe" type="submit" value="Aanmelden" />
        </div>

      </form>
    );
  }
}

var s = {

  base: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  
  flexRow: {
    display: 'flex',
    width: '100%'
  },
  col: {
    flex: 1,
    margin: '0 18px'
  },

  notificationContainer: {
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center',
    height: '80px',
    zIndex: '100',
    color: '#000',
    justifyContent: 'center',
    background: '#E5F3F7',
  },

  description: {
    fontSize: '0.70em',
    height: '34px',
    lineHeight: '34px',
  },
  inputEmail: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    outline: 'none',
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '4px',
    border: 'solid #ff6b6b 1px',
    backgroundColor: '#fff',
    height: '35px',
    lineHeight: '35px',
    fontSize: '0.8em',
  },
  inputSubmit: {
    flex: 1,
    border: 'solid #fff 1px',
    borderRadius: '4px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.8em',
    height: '34px',
    lineHeight: '34px',
    ':hover': {
      backgroundColor: '#fff',
      color: '#000'
    }
  },
  hiddenMailchimp: {
    display: 'none',
  }
}

export default Radium(NewsletterSubscribe);
