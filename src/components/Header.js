import React from 'react';

const Header = () => {
    return (
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                    Show navigation
                </a>
                <a className="mobile-btn" href="#home" title="Hide navigation">
                    Hide navigation
                </a>

                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#exalunos">
                            História
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    {/* <h1 className="responsive-headline">Doze de Outubro 2021</h1>
                    <h3>
                        Esta é a página que fizemos especialmente para o evento, aqui você vai encontrar informações
                        sobre como adquirir convites gratuitos e vai poder ouvir playlists especiais
                    </h3> */}
                    <hr />
                </div>
            </div>

            {/* <ul className="social">
                <a
                    href={'https://www.sympla.com.br/doze-de-outubro-2020---jardim-de-alah__982152'}
                    className="button btn project-btn"
                >
                    <i className="fa fa-ticket"></i>Convite
                </a>
                <a href="#about" className="button btn github-btn">
                    <i className="fa fa-plus"></i>Saber mais
                </a>
            </ul> */}

            {/* <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                    <i className="icon-down-circle"></i>
                </a>
            </p> */}
        </header>
    );
};

export default Header;
