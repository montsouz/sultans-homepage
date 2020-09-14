import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {TUTORIAL} from "../Documents/tutorial/tutorial";

class About extends Component {


    render() {

        const howToGetTickets = 'Este ano estamos usando a plataforma Sympla para venda ' +
            'de ingressos e realização do evento online. Eles são gratuitos e ' +
            'de fácil acesso.Basta clicar no botão abaixo para acessar a página do evento.\n';

        const imgStyle = {
            marginBottom: '15px'
        };


        const generateTutorial = () => {
            return TUTORIAL.map(t => {
                const content_info = t.img ? <img alt={''} style={imgStyle} src={t.img}/> :
                    <a style={imgStyle}>{t.link}</a>;
                return (
                    <div>
                        <h3>Passo {t.id}</h3>
                        <p>{t.text}</p>
                        {content_info}
                    </div>
                )
            })
        };


        return (
            <section id="about">
                <div className="row">
                    <div className="nine columns main-col">
                        <h2>Sobre os Ingressos</h2>
                        <p>{howToGetTickets}</p>
                        {generateTutorial()}
                    </div>
                    <br></br>
                    <br></br>
                </div>

                <div className="row">
                    <div className="nine columns main-col playlists">
                        <h2>Para curtir um som</h2>
                        <p>Veja as playlist clássicas que embalam os rocks na grandiosa Jardim de Alah</p>
                        <br></br>
                        <div>
                            <iframe title={'Forever Jardim de Alah'}
                                    src="https://open.spotify.com/embed/playlist/2trKrnX7NWugzwk6WNjHI9" width="300"
                                    height="80" frameBorder="0"
                                    allow="encrypted-media"/>
                        </div>
                        <div>
                            <iframe title={'Forever Jardim de Alah 1'}
                                    src="https://open.spotify.com/embed/playlist/60a5J0LQd515MVtTRDbAH6" width="300"
                                    height="80" frameBorder="0"
                                    allow="encrypted-media"/>
                        </div>
                        <div>
                            <iframe title={'Forever Jardim de Alah 2'}
                                    src="https://open.spotify.com/embed/playlist/0RvvxyVP4eyFNwt4gRb4Kt" width="300"
                                    height="80" frameBorder="0"
                                    allow="encrypted-media"/>
                        </div>
                        <div>
                            <iframe title={'Forever Jardim de Alah 3'}
                                    src="https://open.spotify.com/embed/playlist/21KLWrQ6uxn8l8boMMYrIP" width="300"
                                    height="80" frameBorder="0"
                                    allow="encrypted-media"/>
                        </div>
                        <div>
                            <iframe title={'Forever Jardim de Alah 4'}
                                    src="https://open.spotify.com/embed/playlist/0y2bYniUkFHjPTckeGn7CE" width="300"
                                    height="80" frameBorder="0"
                                    allow="encrypted-media"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
