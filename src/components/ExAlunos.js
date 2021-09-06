import { EXALUNOS } from '../docs/homenageados/exalunos';
import { AGRADECIMENTOS } from '../docs/agradecimentos/agradecimentos';
import 'react-animated-slider/build/horizontal.css';
import '../styles/exaluno.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import ReadMoreReact from 'read-more-react';

const ExAlunos = () => {
    const responsive = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1024: {
            items: 2,
        },
    };

    return (
        <section id="exalunos">
            <div className="row">
                <div className="nine columns main-col">
                    <h2>História da Fundação </h2>
                    <p style={{ textAlign: 'justify' }}>
                        Foi no ano da Graça de Nosso Senhor Jesus Cristo, de 1964 (ano da Gloriosa), que lá pelas bandas
                        da Rua do Carmo, na Paróquia da Matriz de Nossa Senhora do Pilar na Cidade de Vila Rica de Ouro
                        Preto, da Província de Minas Gerais que se teve ideia de edificar uma fortaleza... Sentinela
                        essa, com a missão primordial, de forjar desbravadores e defensores do conhecimento mundano e
                        acadêmico, daria guarda, por vezes, a tão belas jovens moçoilas que viessem as plagas
                        ouropretanas, em busca de felicidade e lábia daqueles nobres estudantes de disponíveis e
                        vagabundos corações. E então, surgiu lá pelos lados, da ladeira da Coronel Alves, um harém,
                        edificado pelas pilastras do saber, inspirado na vetusta Escola de Minas e concretado com uma
                        argamassa de cachaça, cerveja e gororoba feita pela cumadi (Dona Amélia, a primeira da
                        República), ajudado pelos afagos das mãos odaliscas faceiras...nascia, assim, esse oásis de
                        liberdade, cultura e “divertimento” em tão dura e difícil época! A REPÚBLICA JARDIM DE ALAH.
                    </p>

                    <h2>Ex-alunos Homenageados </h2>

                    <AliceCarousel
                        duration={400}
                        autoPlay={true}
                        startIndex={1}
                        fadeOutAnimation={true}
                        mouseDragEnabled={true}
                        playButtonEnabled={false}
                        responsive={responsive}
                        autoPlayInterval={5000}
                        autoPlayDirection="rtl"
                        autoPlayActionDisabled={true}
                    >
                        {EXALUNOS.map((exaluno) => (
                            <div className={'exaluno-container'}>
                                <img className={'exaluno-img'} alt="" key={Math.random()} src={exaluno.image} />
                                <div className={'exaluno-desc'}>
                                    <div className={'exaluno-name'}>{exaluno.name}</div>
                                    <div className={'exaluno-fullName'}>{exaluno.fullName}</div>
                                    <div className={'exaluno-graduatedYears'}>
                                        {exaluno.graduatedYears} anos de formado
                                    </div>
                                </div>
                            </div>
                        ))}
                    </AliceCarousel>

                    <h2>Depoimentos</h2>
                    {AGRADECIMENTOS.map(({ author, text }) => (
                        <>
                            <ReadMoreReact
                                text={text}
                                min={300}
                                ideal={300}
                                max={300}
                                style={{ cursorPointer: 'click' }}
                                readMoreText="Ler mais"
                            />
                            <div
                                style={{
                                    marginBottom: '25px',
                                    marginTop: '15px',
                                    fontStyle: 'italic',
                                }}
                            >
                                {author}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExAlunos;
