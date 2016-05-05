import Radium from 'radium';
import React, { Component } from 'react';

import SocialMediaButtonStyle from '../../../style/social-media-button.jsx'

class Two extends Component {
  render() {

    return (
      <div>
        <header style={styles.header}>
          <h1 style={styles.title}>3 Redenen waarom wij kiezen voor transparantie</h1>
        </header>
        <div style={styles.sharePageButtons} className="share-page social-media-buttons">
          <a ref="twitter" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.twitter, styles.socialMediaButton)} target="_blank" href={this.props.shareUrls.twitter}>Twitter</a>
          <a ref="facebook" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.facebook, styles.socialMediaButton)} target="_blank" href={this.props.shareUrls.facebook}>Facebook</a>
          <a ref="gplus" style={Object.assign({}, SocialMediaButtonStyle.socialmediaButton, SocialMediaButtonStyle.gplus, styles.socialMediaButton)} target="_blank" href={this.props.shareUrls.gplus}>Google+</a>
        </div>
        <div style={styles.meta}>
          Door <a href="mailto:steven@publist.nl">Steven Meijers</a>
          <div style={styles.postDate}>5 mei 2016</div>
        </div>
        <div style={styles.excerpt}>
          <p>
            Afgelopen najaar kwamen Bart en ik bijeen om de kansen van Publist te bespreken. Het enige wat we tot zover hadden was een werktitel en een grof concept-idee welke ik ijverig had vormgegeven in een animatie. Nog voordat de blauwdrukken van het concept enige handvatten bood, waren we er het er beiden over eens dat een transparante bedrijfsvoering paste binnen de waarden en visie van ons beiden.
          </p>
          <p>
            Vriendschappen zijn gebaseerd op transparantie.
          </p>
          <p>
            Stel dat je iemand ontmoet en besluit enkel oppervlakkige informatie en gevoelens te delen. Je zal dan nooit in staat zijn om een hechte en waardevolle vriendschap op te bouwen met deze persoon. Voor ons beiden zijn betekenisvolle relaties op zowel persoonlijk als zakelijk vlak van groot belang, niet zo gek dus dat we hier met Publist ook naar streven.
          </p>

          <h2>
            Wat betekent zakelijke transparantie 
          </h2>
          <p>
            Kort gezegd betekent zakelijke transparantie het accuraat, tijdig en eerlijk communiceren over de manier waarop een organisatie opereert. Er zijn een legio aan publicaties te vinden die de de voordelen van transparant zakendoen benoemen.
          </p>
          <p>
            Voor ons betekent het voeren van een transparante bedrijfsvoering de mogelijkheid om een innige vertrouwensband op te kunnen bouwen met de diverse stakeholders. Aan de hand van onderstaande drie redenen leggen we uit waarom dit zo belangrijk voor ons is.
          </p>

          <h2>1. Transparantie ter inspiratie</h2>

          <p>
            Publist biedt opdrachtgevers de mogelijkheid om door de overzichtelijk weergegeven portfolio’s van freelance schrijvers te bladeren. Opdrachtgevers kunnen opdrachten toekennen aan freelancers waarvan het eerder gepubliceerde werk aansluit bij de missie, visie en tone of voice van de opdrachtgever. Door verbindingen als deze mogelijk te maken, profiteren beide partijen. De opdrachtgever kan bijvoorbeeld de verkregen content inzetten om brand awareness te creëren of om meer leads te genereren. Voor de freelancer levert de samenwerking met de opdrachtgever een stijging van zijn reputatie als thought leader. Een expert binnen een bepaald vakgebied leidt automatisch tot een betere online presence en meer opdrachten.
          </p>
          <p>
            Een platform als Publist verlangt van denkers, doeners en visionairs dat zij samenwerkingsvormen vinden waarbij zij relevante kennis delen met de wereld. Voor deze gebruikers moet zichtbaar zijn dat wij het belang van dit concept volledig omarmen. Door transparant te zijn over onze fouten en successen, ons verdienmodel en onze uitgaven denken wij gebruikers te inspireren om nieuwe verbindingen te leggen en hun kostbare kennis te delen. Zo maken we samen de wereld samen een stukje slimmer.
          </p>

          <h2>2. Transparantie als motor voor innovatie </h2>
          <p>
            De afgelopen maanden hebben we gemerkt dat wanneer je een succesvol platform wilt ontwikkelen je afhankelijk bent van de feedback van derden. Mede om deze reden hebben we de [questionaire](http://publist.nl/questionnaire) op onze website geplaatst. De respondenten hebben ons voorzien van informatie die bijzonder nuttig is gebleken bij de verdere ontwikkeling van Publist.
          </p>
          <p>
            Voor ons betekent transparantie niet alleen het publiceren en delen van ontvangen feedback. Juist het openbaar maken van de veranderingen die we dankzij deze feedback hebben kunnen doorvoeren is voor ons erg belangrijk. Op deze wijze laten we betrokkenen weten dat hun input bijdraagt aan de vorming van een zo effectief mogelijk platform. 
          </p>

          <h2>3. Transparantie als voeding voor verantwoordelijkheid</h2>
          <p>
            Na het lezen van bovenstaande alinea’s zul je je wellicht afvragen waarom we in deze vroege fase zo gefixeerd zijn op een transparante manier van werken. Er zijn toch vele andere manieren om geïnteresseerden aan je te binden en betrekken?   
          </p>
          <p>
            Het antwoord daarop is vrij eenvoudig; door transparant te zijn wordt een zekere mate van verantwoordelijkheid gevoed. Deze verantwoordelijkheid helpt ons bij het scherp houden van onze visie. Daarnaast biedt het de mogelijkheid om tijdig te kunnen bijsturen. En toegegeven, het bieden van volledige transparantie is een bijzonder spannend en leerzaam proces. 
          </p>

          <h2>Tot slot</h2>
          <p>
            Nu we de redenen om te kiezen voor een transparante bedrijfsvoering hebben uitgelegd, wordt het tijd om met de billen bloot te gaan. In de infographic kun je vanaf nu elke maand statistieken vinden over Publist. Uiteraard in deze fase niet bijzonder spectaculair, maar gaande het proces zullen we deze statistieken aanvullen met relevante informatie.
          </p>

          <hr />

          <p>
            <img style={styles.image} src="/img/pstats/201604-pstats.png" alt="" title="Bij 1000 freelance schrijvers geven we een feestje!" />
          </p>

        </div>
        <div style={styles.btnWrapper}>
          <a href="/blog" className="btn btn-large" style={styles.btn}>Terug naar overzicht</a>
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
  header: {
    backgroundImage: 'url("/img/blog/header-2.png")',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundColor: '#FF6B6B',
    // borderTop: 'solid #fff 1px',
    // borderRight: 'solid #fff 1px',
    // borderLeft: 'solid #fff 1px',
    position: 'relative',
    boxShadow: 'rgba(0, 0, 0, 0.4) 0 -2px 8px',
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
    color: '#fff',
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
    color: '#4d5056'
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
  },

  image: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%'
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

export default Radium(Two);