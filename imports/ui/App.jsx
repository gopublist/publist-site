import Radium, { StyleRoot } from 'radium';
import React, { Component } from 'react';
 
import Header from './layout/header.jsx';

// App component - represents the whole app
class App extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <StyleRoot style={styles.main}>
        <div style={styles.headerSpace}>
          <Header />
        </div>
        {this.props.content}
      </StyleRoot>
    );
  }

}

styles = {
  main: {
    backgroundColor: '#ee7370',
    backgroundImage: 'repeating-linear-gradient(55deg, #ee7370, #ee7370 50%, #e05f5f 50%, #e05f5f 100%)',
    minWidth: '100%',
    minHeight: '100%',
    height: '100%',
    overflowX: 'hidden',
    '@media (max-width: 800px)': {
      backgroundImage: 'repeating-linear-gradient(90deg, #ee7370, #ee7370 50%, #e05f5f 50%, #e05f5f 100%)'
    }
  },
  headerSpace: {
    width: '100%',
    height: '80px'
  }
}

export default App;