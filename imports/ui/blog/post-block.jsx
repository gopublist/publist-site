import Radium from 'radium';
import React, { Component } from 'react';

import BlogStyles from './blog-styles.jsx';

class PostBlock extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>

        <article style={styles.base}>
          <header style={Object.assign({}, BlogStyles.header, {backgroundColor: '#FF6B6B'})}>
            <h1 style={BlogStyles.headerTitle}><a href="/blog/2" style={{color: '#fff'}}>3 Reden waarom wij kiezen voor transparantie</a></h1>
            <div style={Object.assign({}, BlogStyles.headerImg, {backgroundImage: 'url("/img/blog/header-2.png")'})}></div>
          </header>
          <div style={BlogStyles.meta}>
            Door <a href="mailto:steven@publist.nl" target="_top">Steven Meijers</a>
            <div style={BlogStyles.postDate}>6 mei 2016</div>
          </div>
          <div style={BlogStyles.excerpt}>
            <p>
              Afgelopen najaar kwamen Bart en ik bijeen om de kansen van Publist te bespreken. Het enige wat we tot zover hadden was een werktitel en een grof concept-idee welke ik ijverig had vormgegeven in een animatie. Nog voordat de blauwdrukken van het concept enige handvatten bood, waren we er het er beiden over eens dat een transparante bedrijfsvoering paste binnen de waarden en visie van ons beiden. Aan het hand van drie voorbeelden leggen we uit waarom dit zo belangrijk voor ons is.
            </p>
          </div>
          <div style={BlogStyles.btnWrapper}>
            <a href="/blog/2" className="btn btn-large" style={BlogStyles.btn}>Lees verder</a>
          </div>
        </article>

        <article style={styles.base}>
          <header style={BlogStyles.header}>
            <h1 style={BlogStyles.headerTitle}><a href="/blog/1" style={{color: '#fff'}}>And we&apos;re off!</a></h1>
            <div style={Object.assign({}, BlogStyles.headerImg, {backgroundImage: 'url("/img/blog/header-1.png")'})}></div>
          </header>
          <div style={BlogStyles.meta}>
            Door <a href="mailto:steven@publist.nl" target="_top">Steven Meijers</a>
            <div style={BlogStyles.postDate}>20 februari 2016</div>
          </div>
          <div style={BlogStyles.excerpt}>
            <p>
              De afgelopen maanden hebben we hard gewerkt aan het uitzetten van het conceptueel plan rondom Publist. De feedback en positieve reacties op het initiële idee hebben ons ontwikkelproces een enorme boost gegeven. Input van derden is voor ons de manier om een zo transparant en gebruiksvriendelijk mogelijk platform te creëren.
            </p>
          </div>
          <div style={BlogStyles.btnWrapper}>
            <a href="/blog/1" className="btn btn-large" style={BlogStyles.btn}>Lees verder</a>
          </div>
        </article>

      </div>
    );
  }

}

var styles = {
  base: {
    backgroundColor: '#fff',
    margin: '20px auto',
    paddingBottom: '25px',
  },
}

export default Radium(PostBlock);
