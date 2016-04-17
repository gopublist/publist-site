export default {

  socialmediaButton: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: '6px',
    marginLeft: '6px',
    padding: 0,
    display: 'inline-block',
    color: '#000',
    textIndent: '-9999px',
    textAlign: 'left',
    width: '36px',
    height: '36px',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    transition: 'background-color 0 ease-in-out, color 0 ease-in-out',
    verticalAlign: 'middle',
    display: 'none',
    '@media (min-width: 430px)': {
      display: 'inline-block'
    },
    '@media (min-width: 480px)': {
      marginRight: '12px',
      marginLeft: '12px',
      display: 'inline-block'
    }
  },
  twitter: {
    backgroundImage: 'url(/img/icon/twitter-default.svg)',
    ':hover': {
      backgroundImage: 'url(/img/icon/twitter-hover.svg)'
    }
  },
  facebook: {
    backgroundImage: 'url(/img/icon/facebook-default.svg)',
    ':hover': {
      backgroundImage: 'url(/img/icon/facebook-hover.svg)'
    },
  },
  gplus: {
    backgroundImage: 'url(/img/icon/gplus-default.svg)',
    ':hover': {
      backgroundImage: 'url(/img/icon/gplus-hover.svg)'
    },
  }

}
