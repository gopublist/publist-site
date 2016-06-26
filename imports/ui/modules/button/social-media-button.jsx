import React from 'react';
import Radium from 'radium';

function SocialMediaButton(props) {
  return (
    <a style={props.styles} target="_blank" href={props.url}>{props.children}</a>
  )
}

SocialMediaButton.propTypes = {
  styles: React.PropTypes.object,
  url: React.PropTypes.string,
  title: React.PropTypes.string
};

export default Radium(SocialMediaButton);
