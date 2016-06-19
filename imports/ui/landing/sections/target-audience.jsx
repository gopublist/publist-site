import Radium from 'radium';
import React, { Component, PropTypes } from 'react';
import R from 'ramda';

class TargetAudience extends Component {

  constructor(props) {
    super(props);
  }
 
  //+ createTargetAudienceSection :: Object -> Element
  createBenefit(data) {
    return (
      <div style={s.benefit}>
        <img style={s.benefitImage} src={data.image} />
        <h1 style={s.benefitTitle}>{data.title}</h1>
        <p style={s.benefitDescription}>{data.description}</p>
      </div>
    )
  }

  render() {
    return (
      <section style={s.base}>
        <div style={s.maxWidth}>
          
          <img style={s.image} src={this.props.image} />
          <h1 style={s.title}>{this.props.title}</h1>
          <p style={s.description}>{this.props.description}</p>

          <div style={s.benefitWrapper}>
            {R.map(this.createBenefit.bind(this), this.props.benefits)}
          </div>

        </div>
      </section>
    );
  }
}

var s = {

  base: {
    textAlign: 'center'
  },
  maxWidth: {
    maxWidth: '680px',
    margin: '0 auto',
    position: 'relative',
  },

  image: {
    margin: '40px auto',
    width: '150px',
    display: 'block'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '26px',
    fontWeight: 'normal',
    marginBottom: '30px'
  },
  description: {
    marginRight: 'auto',
    marginBottom: '50px',
    marginLeft: 'auto',
    maxWidth: '522px',
  },

  // USP's

  benefitWrapper: {
    display: 'flex',
  },
  benefit: {
    flex: 1,
    textAlign: 'center'
  },
  benefitImage: {
    margin: '10px 0',
    display: 'inline-block',
    width: '100px'
  },
  benefitTitle: {
    fontWeight: 'bold',
    fontSize: '14px',
  },
  benefitDescription: {
    fontSize: '12px',
    lineHeight: '16px'
  }

}

// Validate the props passed to this components
TargetAudience.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
}

export default Radium(TargetAudience);
