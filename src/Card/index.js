import React from 'react';
import Logo from '../Components/Images/logo_GameOfCodes.svg';
import LogoAdalab from '../Components/Images/logo-adalab-80px.png';
import PreviewCard from './Components/PreviewCard';
import Design from './Components/Design';
import Fill from './Components/Fill';
import Share from './Components/Share';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Nombre Apellido',
      job: 'Front-end developer',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: '',
      palette: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const user = event.currentTarget.value;
    this.setState({
      name: user
      // job: user
      // gitHub: gitHubName
    });
  }

  render() {
    return (
      <React.Fragment>
        <header className="card__header">
          <div className="wrapper card__header">
            <a href="index.html">
              <img
                className="card__header-image"
                src={Logo}
                alt="Ir a la home"
              />
            </a>
          </div>
        </header>
        <main className="main__card">
          <div className="wrapper main__card-wrapper">
            <form
              action="https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/"
              method="post"
              className="card__section1"
            >
              <fieldset className="design js-container">
                <Design />
              </fieldset>
              <fieldset className="section__fill js-container js-container-hidden">
                <Fill action={this.handleInputChange} />
              </fieldset>
              <fieldset className="share__section">
                <Share />
              </fieldset>
            </form>
            <PreviewCard
              action={this.handleInputChange}
              name={this.state.name}
            />
          </div>
        </main>
        <footer className="card__footer">
          <div className="wrapper card__footer-wrapper">
            <p className="card__footer-copy">
              Awesome profile-cards &copy;2019
            </p>
            <a
              className="card__footer-link"
              target="_blank"
              href="https://adalab.es/"
            >
              <img
                className="card__footer-image"
                src={LogoAdalab}
                alt="Ir al sitio web de Adalab"
              />
            </a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Card;
