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
      <div key={data.title} style={s.benefit}>
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
    textAlign: 'center',
    paddingTop: '50px',
    paddingRight: '15px',
    paddingBottom: '75px',
    paddingLeft: '15px',
  },
  maxWidth: {
    width: '680px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'relative',
    '@media (min-width: 1200px)': {
      width: '1000px'
    }
  },

  image: {
    margin: '40px auto',
    width: '150px',
    display: 'block'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.30em',
    lineHeight: '1.3em',
    fontWeight: 'normal',
    marginBottom: '30px',
    maxWidth: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    '@media (min-width: 1200px)': {
      width: '670px'
    }
  },
  description: {
    marginRight: 'auto',
    marginBottom: '50px',
    marginLeft: 'auto',
    width: '522px',
    maxWidth: '100%',
    '@media (min-width: 1200px)': {
      width: '670px'
    }
  },

  // USP's

  benefitWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  benefit: {
    textAlign: 'center',
    margin: '0 10px',
    flex: '50%',
    '@media (min-device-width: 340px)': {
      flex: '1',
    },
    '@media (min-device-width: 375px) and (max-device-width: 667px)': {
      // iPhone 6
      flex: '50%',
    },
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
