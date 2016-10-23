import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

class BlockWhite extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={Object.assign({}, s.base, {width: this.props.width})}>
        {this.props.children}
      </div>
    );
  }

}

var s = {
  base: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '30px',
    margin: '0 auto',
    maxWidth: '100%',
    height: '100%',
  },
}

BlockWhite.propTypes = {
  children: PropTypes.any.isRequired,
  width: PropTypes.any.isRequired
};

export default Radium(BlockWhite);
