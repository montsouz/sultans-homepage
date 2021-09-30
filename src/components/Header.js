import React from 'react';
import Countdown from 'react-countdown';

const Header = () => {
    const doze = new Date('Oct 9, 2021 00:00:00').getTime();

    const format = (number) => {
        return number < 10 ? `0${number}` : number;
    };

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a complete state
            return (
                <a
                    href={'https://www.sympla.com.br/doze-de-outubro-2020---jardim-de-alah__982152'}
                    className="button btn project-btn"
                >
                    <i className="fa fa-ticket"></i>Acessar
                </a>
            );
        } else {
            // Render a countdown
            return (
                <div className="countdown">
                    <p>O link para o encontro estará disponível em</p>
                    <ul>
                        <li>
                            <span> {format(days)} </span>dias
                        </li>
                        <li>
                            <span id="hours">{format(hours)} </span>hrs
                        </li>
                        <li>
                            <span id="minutes">{format(minutes)}</span>min
                        </li>
                        <li>
                            <span id="seconds">{format(seconds)}</span>seg
                        </li>
                    </ul>
                </div>
            );
        }
    };

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

                <div className="schedule-text">
                    <h2 style={{ color: 'white' }}>Cronograma - 09/10/2021</h2>
                    <ul>
                        <li>14h - Início do encontro</li>
                        <li>16h - Homenagens</li>
                        <li>19h - Live da Banda Hollybomba</li>
                    </ul>
                </div>
            </nav>
            <ul className="social">
                <Countdown date={doze} renderer={renderer} />
            </ul>
        </header>
    );
};

export default Header;
