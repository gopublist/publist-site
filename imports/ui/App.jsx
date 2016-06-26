import Radium, { StyleRoot } from 'radium';
import React, { Component } from 'react';
 
// App component - represents the whole app
class App extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <StyleRoot style={styles.main}>
        {this.props.content}
      </StyleRoot>
    );
  }

}

styles = {
  main: {
    minWidth: '100%',
    minHeight: '100%',
    height: '100%',
    overflowX: 'hidden',
    backgroundColor: '#fff'
  }
}

export default App;