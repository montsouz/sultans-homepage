import {EXALUNOS} from '../Documents/homenageados/exalunos'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/exaluno.css'
import React from "react";

const generateExAluno = (exaluno) => {
    return (
        <div className={'exaluno-container'}>
            <img className={'exaluno-img'} alt='' key={Math.random()} src={exaluno.image}/>
            <div className={'exaluno-desc'}>
                <div className={'exaluno-name'}>{exaluno.name}</div>
                <div className={'exaluno-fullName'}>{exaluno.fullName}</div>
                <div className={'exaluno-graduatedYears'}>{exaluno.graduatedYears} anos de formado</div>
            </div>
        </div>
    )
};

const ExAlunos = () => {
    return (
        <section id="exalunos">
            <div className="row">
                <div className="nine columns main-col">
                    <h2>Ex-alunos Homenageados </h2>
                    <Slider duration={0} autoplay={3000}>
                        {EXALUNOS.map(exaluno => generateExAluno(exaluno))}
                    </Slider>
                </div>
            </div>
        </section>
    )
};

export default ExAlunos;