import React from 'react';

// import { Container } from './styles';

function Promo({ setOpen }) {
    return (
        <div className="intro-video section-padding bg-light triangle-top-light triangle-bottom-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center">
                            <h2>Venha Ganhar!</h2>
                            <p>
                                Veja como é fácil concorrer a prêmios incríveis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="intro-video-play">
                            <div className="play-btn">
                                <a onClick={() => setOpen(true)}>
                                    <i className="bi bi-play-fill"></i>
                                </a>
                            </div>
                        </div>
                        {/* <div className="intro-video-content text-center mt-5">
                            <a
                                href="#"
                                className="btn btn-primary px-4"
                            >
                                Explore the marketplace
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promo;