import Radium from 'radium';
import React, { Component } from 'react';

// Import templates
import PostBlock from './post-block.jsx';

class Blog extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="blog-wrapper" style={styles.base}>
        <h1 style={styles.title}>Publist blog</h1>
        <PostBlock />
      </div>
    );
  }

}

var styles = {
  base: {
    maxWidth: '1500px',
    margin: '30px auto',
    maxWidth: '90%'
  },
  title: {
    display: 'none',
    color: '#fff',
    '@media (min-width: 480px)': {
      display: 'block'
    }
  }
}

export default Radium(Blog);