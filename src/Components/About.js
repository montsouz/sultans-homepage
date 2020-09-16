import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { TUTORIAL } from '../Documents/tutorial/tutorial';

class About extends Component {
    render() {
        const howToGetTickets =
            'Este ano estamos usando a plataforma Sympla para venda ' +
            'de ingressos e realização do evento online. Eles são gratuitos e ' +
            'de fácil acesso.Basta clicar no botão abaixo para acessar a página do evento.\n';

        const imgStyle = {
            marginBottom: '15px',
            width: '300px',
            height: 'auto',
        };

        const generateTutorial = () => {
            return TUTORIAL.map((t) => {
                const content_info = t.img ? (
                    <img alt={''} style={imgStyle} src={t.img} />
                ) : (
                    <a style={{ ...imgStyle, color: '#11abb0' }}>{t.link}</a>
                );
                return (
                    <div>
                        <h3 style={{ marginTop: '15px' }}>Passo {t.id}</h3>
                        <p className="desktop-paragraph">{t.text}</p>
                        {content_info}
                    </div>
                );
            });
        };

        return (
            <section id="about">
                <div className="row">
                    <div className="nine columns main-col">
                        <h2 style={{ fontSize: '28px' }}>Sobre os Ingressos</h2>
                        <p className="desktop-paragraph">{howToGetTickets}</p>
                        <div>{generateTutorial()}</div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </section>
        );
    }
}

export default About;
