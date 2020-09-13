import React, {Component} from 'react';

class Header extends Component {
    render() {


        const tickets = 'https://www.sympla.com.br/';
        const title = 'Doze de Outubro 2020';
        const description = "Esta é a página que fizemos especialmente para o evento, aqui você vai encontrar informações sobre como adquirir ingressos e vai poder ouvir playlists especiais";


        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">Saber mais</a></li>
                    </ul>
                </nav>

                <div className="row banner">

                    <div className="banner-text">
                        <h1 className="responsive-headline">{title}</h1>
                        <h3>{description}.</h3>
                        <hr/>
                        <ul className="social">
                            <a href={tickets} className="button btn project-btn"><i className="fa fa-ticket"></i>Ingressos</a>
                            <a href="#about" className="button btn github-btn"><i className="fa fa-plus"></i>Saber mais</a>
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }
}

export default Header;
