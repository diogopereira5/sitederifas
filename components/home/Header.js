import React from 'react';

function Header() {
    return (
        <div className="intro1 section-padding">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-5 col-lg-6 col-12">
                        <div className="intro-content  my-5">
                            <h1 className="mb-3">
                                Escolha, compre, e ganhe
                                <span> Prêmios incríveis</span>
                            </h1>
                            <p>
                                Nunca foi tão fácil ganhar!
                            </p>

                            {/* <div className="intro-btn mt-5">
                        <Link href="/explore"><a className="btn btn-primary">
                            Explore
                            <i className="bi bi-arrow-right"></i>
                        </a>
                        </Link>
                        <Link href="/upload"><a
                            className="btn btn-outline-primary"
                        >
                            Create
                        </a>
                        </Link>
                    </div> */}

                            <a onClick={() => setOpen(true)} className="more c-pointer d-inline-flex">
                                <span>
                                    <i className="bi bi-play-fill"></i>
                                </span>
                                Conheça mais sobre nós
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 col-12">
                        <div className="intro-slider">
                            <div className="slider-item">
                                <img
                                    src="/images/items/iphone13.webp"
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="slider-item-avatar">
                                    <img
                                        src="/images/avatar/1.jpg"
                                        alt=""
                                    />
                                    <div>
                                        <h5>Rifa iPhone 13</h5>
                                        <p>Apenas R$ 25,00</p>
                                    </div>
                                </div>
                                {/* <div className="arrows">
                            <span>
                                <i className="bi bi-arrow-left"></i>
                            </span>
                            <span>
                                <i className="bi bi-arrow-right"></i>
                            </span>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;