import Radium from 'radium';
import React, { Component } from 'react';

import SocialMediaButtonStyle from '../../../style/social-media-button.jsx'
import BlogStyles from '../blog-styles.jsx';

class One extends Component {
  render() {

    var shareUrls = {
      twitter: 'https://twitter.com/share?purl='+encodeURIComponent(document.location)+'&text='+encodeURIComponent('And we\'re off! Lees het verhaal rondom de start van @gopublist ->'),
      facebook: 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location),
      gplus: 'https://m.google.com/app/basic/share?cbp=12p5cc38y46k2&cid=5&soc-app=115&soc-platform=1&spath=/app/basic/stream&sparm=cbp%3Dkzz1m3u312ho%26cid%3D5%26soc-app%3D115%26soc-platform%3D1&href='+encodeURIComponent(document.location)
    }

    return (
      <div>
        <header style={Object.assign({}, BlogStyles.header)}>
          <h1 style={Object.assign({}, BlogStyles.headerTitle, {color: '#fff'})}>And we&apos;re off!</h1>
          <div style={Object.assign({}, BlogStyles.headerImg, {backgroundImage: 'url("/img/blog/header-1.png")'})}></div>
        </header>
        <div style={styles.sharePageButtons} className="share-page social-media-buttons">
          <a ref="twitter" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.twitter, styles.socialMediaButton)} target="_blank" href={shareUrls.twitter}>Twitter</a>
          <a ref="facebook" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.facebook, styles.socialMediaButton)} target="_blank" href={shareUrls.facebook}>Facebook</a>
          <a ref="gplus" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.gplus, styles.socialMediaButton)} target="_blank" href={shareUrls.gplus}>Google+</a>
        </div>
        <div style={BlogStyles.meta}>
          Door <a href="mailto:steven@publist.nl" target="_top">Steven Meijers</a>
          <div style={BlogStyles.postDate}>20 februari 2016</div>
        </div>
        <div style={BlogStyles.excerpt}>
          <p>
            De afgelopen maanden hebben we hard gewerkt aan het uitzetten van het conceptueel plan rondom Publist. De feedback en positieve reacties op het initiële idee hebben ons ontwikkelproces een enorme boost gegeven. Input van derden is voor ons de manier om een zo transparant en gebruiksvriendelijk mogelijk platform te creëren.
          </p>
          <p>
            Naast dat de fundamenten van Publist inmiddels zijn gelegd, willen we je vragen mee te denken over de uiteindelijke invulling van het platform.
          </p>
          <h2>
            Publist Qué?
          </h2>
          <p>
            Dat de inzet van Content Marketing geen eendagsvlieg is gebleken mag voor de meesten onder ons wel duidelijk zijn. Door het publiceren van aantrekkelijke en relevante content lijkt de tijd waarin 'ik ben de beste' wordt gescandeerd binnenkort ver achter ons te liggen.
          </p>
          <p>
            Wij zijn van mening dat Nederland over een grote groep uitstekende (freelance) schrijvers, bloggers, journalisten en columnisten beschikt. Door deze creatieven op een effectieve wijze te koppelen aan de zakelijke markt, geloven wij samen de kwaliteit van online content naar een 'next level' te kunnen tillen.
          </p>
          <h2>Maar wat biedt Publist nu eigenlijk</h2>
          <p>
            Publist is voornemens het meest uitgebreide online portfolio platform voor freelance schrijvers, bloggers, journalisten en columnisten in Nederland te worden. Op dit platform kunnen freelancers hun eerder gepubliceerde werk verzamelen, hun expertise aangeven en gevonden worden voor aansprekende opdrachten vanuit de zakelijke markt.
          </p>
          <p>
            We zijn ons bewust van de ambitieuze doelstelling, maar denken dat veelzijdigheid de basis is voor een succesvol platform. Een platform waarop een grote diversiteit aan freelancers actief is vormt de basis voor Publist.
          </p>
          <h2>What&apos;s in it for me?</h2>
          <p>
            Om een platform te lanceren dat uitgaat van het aloude principe vraag en aanbod is het noodzakelijk dat beide partijen (freelancers en zakelijke markt) sterker worden door de veelzijdigheid van het platform. 
          </p>
          <p>
            Voor freelancers betekent dat:
          </p>
          <ul>
            <li>Betere online vindbaarheid</li>
            <li>Overzichtelijk systeem om eerder gepubliceerd werk te onderhouden</li>
            <li>Mogelijkheid tot ontwikkelen van 'thought leadership'</li>
            <li>Genereren van uitdagende opdrachten</li>
          </ul>
          <p>
            Voor de zakelijke markt:
          </p>

          <ul>
            <li>Verhogen van conversie via website</li>
            <li>Aanwezige kennis vertaald naar relevante content</li>
            <li>Mogelijkheid tot ontwikkelen van 'thought leadership'</li>
            <li>Huge timesaver</li>
          </ul>

          <p>
            Binnenkort zullen we een pagina publiceren waarop meer te vinden is over de missie, filosofie en het team achter Publist. Dus houd de site in de gaten.
          </p>

          <p>
            Tot slot: zou je <a href="/questionnaire">deze korte vragenlijst</a> willen invullen? We zijn je hier zeer dankbaar voor!
            Wil je alleen op de hoogte blijven van de ontwikkelingen van Publist, dat kan hier natuurlijk ook.
          </p>

        </div>
        <div style={BlogStyles.btnWrapper}>
          <a href="/blog" className="btn btn-large" style={BlogStyles.btn}>Terug naar overzicht</a>
        </div>
      </div>
    );

  }

}
  
var styles = {
  base: {
    backgroundColor: '#fff',
    margin: '20px auto',
    paddingBottom: '25px',
    position: 'relative',
    maxWidth: '90%',
  },

  sharePageButtons: {
    display: 'block',
    position: 'absolute',
    paddingLeft: '28px',
    top: '530px',
    zIndex: 5,
    width: '100%',
    textAlign: 'right',
    paddingRight: '30px',
    '@media (min-width: 1400px)': {
      paddingRight: '0',
      width: '48px',
      padding: '0 50px'
    }
  },

  socialMediaButton: {
    // display: 'inline-block',
    padding: '8px',
    width: '36px',
    position: 'relative',
    // marginLeft: '10px',
    '@media (min-width: 1400px)': {
      // marginLeft: 0,
      marginTop: '10px',
      padding: '0 50px'
    }
  },
}

export default Radium(One);
