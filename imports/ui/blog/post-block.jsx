import Radium from 'radium';
import React, { Component } from 'react';

class PostBlock extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <article style={styles.base}>
        <header style={styles.header}>
          <h1 style={styles.title}><a href="/blog/1" style={{color: '#fff'}}>And we&apos;re off!</a></h1>
        </header>
        <div style={styles.meta}>
          Door <a href="mailto:steven@publist.nl">Steven Meijers</a>
          <div style={styles.postDate}>20 februari 2016</div>
        </div>
        <div style={styles.excerpt}>
          <p>
            De afgelopen maanden hebben we hard gewerkt aan het uitzetten van het conceptueel plan rondom Publist. De feedback en positieve reacties op het initiële idee hebben ons ontwikkelproces een enorme boost gegeven. Input van derden is voor ons de manier om een zo transparant en gebruiksvriendelijk mogelijk platform te creëren.
          </p>
        </div>
        <div style={styles.btnWrapper}>
          <a href="/blog/1" className="btn btn-large" style={styles.btn}>Lees verder</a>
        </div>
      </article>
    );
  }

}

var styles = {
  base: {
    backgroundColor: '#fff',
    margin: '20px auto',
    paddingBottom: '25px',
  },
  header: {
    backgroundImage: 'url("/img/blog/header-1.png")',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: '#0F303F',
    position: 'relative',
    margin: '0 auto',
    '@media (min-width: 480px)': {
      minHeight: '500px'
    }
  },
  title: {
    textAlign: 'center',
    margin: 0,
    padding: '60px',
    maxWidth: '1050px',
    margin: '0 auto',
    lineHeight: '50px',
    fontSize: '38px'
  },
  meta: {
    maxWidth: '1050px',
    padding: '30px 30px 15px 30px',
    color: '#4d5056',
    margin: '0 auto'
  },
  postDate: {
    fontSize: '0.9em',
    color: '#4d5056',
  },
  excerpt: {
    maxWidth: '1050px',
    padding: '0 30px',
    margin: '0 auto'
  },
  btnWrapper: {
    maxWidth: '1050px',
    padding: '0 30px',
    margin: '0 auto'
  },
  btn: {
    backgroundColor: '#CC1B1B',
    color: '#fff'
  }
}

export default Radium(PostBlock);
