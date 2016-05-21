import Radium from 'radium';
import React, { Component } from 'react';

class Questionnaire extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div style={styles.main}>
        <div style={styles.mainInner}>
          <div className="typeform-widget" data-url="https://publist.typeform.com/to/bXoUfO" data-text="Publist Survey 2016-01" style={styles.typeFormWidget}>
            <div className="typeform-wrapper" style={{position: 'relative', width: '100%', height: '100%'}}>
              <iframe width="100%" height="100%" frameBorder="0" src="https://publist.typeform.com/to/bXoUfO?typeform-embed=embed-widget"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var styles = {
  main: {
    maxWidth: '100%',
    height: 'calc(100% - 80px)',
    position: 'relative',
    backgroundColor: '#ee7370',
    backgroundImage: 'repeating-linear-gradient(55deg, #ee7370, #ee7370 50%, #e05f5f 50%, #e05f5f 100%)',
    '@media (max-width: 800px)': {
      backgroundImage: 'repeating-linear-gradient(90deg, #ee7370, #ee7370 50%, #e05f5f 50%, #e05f5f 100%)'
    },
  },
  mainInner: {
    margin: '0 auto 0 auto',
    fontSize: '20px',
    lineHeight: '28px',
    transition: 'opacity 0s 1s',
    top: '84px',
    right: '4px',
    bottom: '4px',
    left: '4px',
    position: 'absolute',
    '@media (min-width: 480px)': {
      maxWidth: '90%',
      top: '200px',
      // margin: '0 auto',
      // left: 'auto',
      // right: 'auto'
    }

  },
  typeFormWidget: {
    width: '100%',
    height: '100%',
    display: 'block'
  },
  callToActionBtn: {
    margin: '0 auto',
    textAlign: 'center',
    display: 'none',
  },
  survey: {
    width: '100%',
    height: '500px'
  }
}

export default Radium(Questionnaire);