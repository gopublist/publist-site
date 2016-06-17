import Radium from 'radium';
import React, { Component } from 'react';

class NewsletterSubscribe extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var initialValue, self;
    self = this;
    initialValue = 'Houd me op de hoogte';
    $('#mce-EMAIL').val(initialValue).on({
      'focus': function(e) {
        return (s.inputSubmit.display = 'inline-block', self.forceUpdate(), $(this).val('Mijn e-mailadres is..').select()).on({
          'blur': function(e) {
            if ($(this).val() === 'Mijn e-mailadres is..') {
              s.inputSubmit.display = 'none';
              self.forceUpdate();
              return $(this).val(initialValue);
            }
          }
        });
      }
    });
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

        <input ref="email" style={Object.assign({}, s.input, s.inputEmail)} className="btn btn-light" type="email" name="EMAIL" id="mce-EMAIL" placeholder="Houd me op de hoogte, mijn mail is..." />

        <input onClick={this.submitForm.bind(this)} style={Object.assign({}, s.input, s.inputSubmit)} name="subscribe" id="mc-embedded-subscribe" type="submit" value=">" />

      </form>
    );
  }
}

var s = {
  base: {
    display: 'flex',
    zIndex: 20,
    justifyContent: 'space-between',
    width: '250px',
    maxWidth: '100%'
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
  label: {
    display: 'none'
  },
  inputEmail: {
    flex: 1,
    cursor: 'pointer',
    outline: 'none',
    '-moz-box-shadow': 'none',
    'box-shadow': 'none',
    ':focus': {
      borderRight: 'none',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    }
  },
  inputSubmit: {
    display: 'none',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderTop: 'solid #fff 2px',
    borderRight: 'solid #fff 2px',
    borderBottom: 'solid #fff 2px',
    borderLeft: 'none',
    color: '#fff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    cursor: 'pointer',
    flex: 1,
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
