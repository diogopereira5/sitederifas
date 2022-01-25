import React from 'react';
import Link from "next/link"

// import { Container } from './styles';

function About() {
    return (
        <div className="create-sell section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center">
                            <h2>Como funciona?</h2>
                            {/* <p>

                                Here are a few reasons why you should
                                choose Neftify
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="create-sell-content">
                            <div className="create-sell-content-icon">
                                <i className="bi bi-hand-index"></i>
                            </div>
                            <div>
                                <h4>Escolha um Sorteio</h4>
                                <p>
                                    Muito fácil participar. Comece escolhendo um sorteio ativo.
                                </p>
                                {/* <Link href="/explore"><a>
                                    Explore
                                    <i className="bi bi-arrow-right-short"></i>
                                </a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="create-sell-content">
                            <div className="create-sell-content-icon">
                                <i className="bi bi-check2-circle"></i>
                            </div>
                            <div>
                                <h4>Selecione os Números</h4>
                                <p>
                                    Escolha quantos quiser! Quanto mais, mais chances de ganhar.
                                </p>
                                {/* <Link href="/explore"><a>
                                    Explore
                                    <i className="bi bi-arrow-right-short"></i>
                                </a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="create-sell-content">
                            <div className="create-sell-content-icon">
                                <i className="bi bi-credit-card"></i>
                            </div>
                            <div>
                                <h4>Faça o Pagamento</h4>
                                <p>
                                    Escolha uma das formas de pagamento disponíveis.
                                </p>
                                {/* <Link href="/explore"><a>
                                    Explore
                                    <i className="bi bi-arrow-right-short"></i>
                                </a></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="create-sell-content">
                            <div className="create-sell-content-icon">
                                <i className="bi bi-alarm"></i>
                            </div>
                            <div>
                                <h4>Aguarde o sorteio</h4>
                                <p>
                                    Agora é aguardar o sorteio pela Loteria Federal e boa sorte!
                                </p>
                                {/* <Link href="/explore"><a>
                                    Explore
                                    <i className="bi bi-arrow-right-short"></i>
                                </a></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;