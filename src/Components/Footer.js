import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            <li key={'facebook'}>
                                <a href={"https://www.facebook.com/repjardimdealah/"}>
                                    <i className={"fa fa-facebook"}></i>
                                </a>
                            </li>
                            <li key={"instagram"}>
                                <a href={"https://www.instagram.com/repjardimdealah"}>
                                    <i className={"fa fa-instagram"}></i>
                                </a>
                            </li>
                        </ul>
                        <p style={{fontStyle: 'italic'}}>"São saudades de nossos tempos de república Jardim de Alah, onde o espiríto de união e de amizade configura o nosso patrimônio."</p>
                        <ul className="copyright">
                            <li>&copy; Copyright 2020 Jardim de Alah</li>
                            <li>
                                Design by{' '}
                                <a title="Styleshout" href="https://github.com/montsouz">
                                    Palno
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home">
                            <i className="icon-up-open"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
