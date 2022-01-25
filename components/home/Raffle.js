import React from 'react';
import Link from "next/link"

// import { Container } from './styles';

function Raffle() {
    return (
        <div className="trending-category section-padding bg-light triangle-top-light triangle-bottom-light">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-title text-center d-flex justify-content-between mb-3">
                            <h2>Rifas em Destaque</h2>
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
                <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="card items">
                            <div className="card-body">
                                <div className="items-img position-relative">
                                    <img
                                        src="/images/items/rifa1.jpg"
                                        className="img-fluid rounded mb-3"
                                        alt=""
                                    />
                                    <img
                                        src="/images/avatar/5.jpg"
                                        className="creator"
                                        width="50"
                                        alt=""
                                    />
                                </div>
                                <h4 className="card-title">Rifa do Rico</h4>
                                <p></p>
                                <div className="d-flex justify-content-between">
                                    <div className="text-start">
                                        <p className="mb-2">Números</p>
                                        <p className="mb-2">Reservados</p>
                                        <h5 className="text-muted">
                                            Restantes
                                        </h5>
                                    </div>
                                    <div className="text-end">
                                        <p className="mb-2">
                                            100
                                            {/* <strong className="text-primary">
                                                0.55 ETH
                                            </strong> */}
                                        </p>
                                        <p className="mb-2">
                                            31
                                            {/* <strong className="text-primary">
                                                0.55 ETH
                                            </strong> */}
                                        </p>
                                        <p className="mb-2">
                                            <strong className="text-primary">
                                                69
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link href="/item"><a className="btn btn-primary">
                                        Adquirir Bilhete
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="card items">
                            <div className="card-body">
                                <div className="items-img position-relative">
                                    <img
                                        src="/images/items/rifa1.jpg"
                                        className="img-fluid rounded mb-3"
                                        alt=""
                                    />
                                    <img
                                        src="/images/avatar/5.jpg"
                                        className="creator"
                                        width="50"
                                        alt=""
                                    />
                                </div>
                                <h4 className="card-title">Rifa do Rico</h4>
                                <p></p>
                                <div className="d-flex justify-content-between">
                                    <div className="text-start">
                                        <p className="mb-2">Números</p>
                                        <p className="mb-2">Reservados</p>
                                        <h5 className="text-muted">
                                            Restantes
                                        </h5>
                                    </div>
                                    <div className="text-end">
                                        <p className="mb-2">
                                            100
                                            {/* <strong className="text-primary">
                                                0.55 ETH
                                            </strong> */}
                                        </p>
                                        <p className="mb-2">
                                            31
                                            {/* <strong className="text-primary">
                                                0.55 ETH
                                            </strong> */}
                                        </p>
                                        <p className="mb-2">
                                            <strong className="text-primary">
                                                69
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link href="/item"><a className="btn btn-primary">
                                        Adquirir Bilhete
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="card items">
                            <div className="card-body">
                                <div className="items-img position-relative">
                                    <img
                                        src="/images/items/rifa1.jpg"
                                        className="img-fluid rounded mb-3"
                                        alt=""
                                    />
                                    <img
                                        src="/images/avatar/5.jpg"
                                        className="creator"
                                        width="50"
                                        alt=""
                                    />
                                </div>
                                <h4 className="card-title">Rifa do Rico</h4>
                                <p></p>
                                <div className="d-flex justify-content-between">
                                    <div className="text-start">
                                        <p className="mb-2">Números</p>
                                        <p className="mb-2">Reservados</p>
                                        <h5 className="text-muted">
                                            Restantes
                                        </h5>
                                    </div>
                                    <div className="text-end">
                                        <p className="mb-2">
                                            100
                                            {/* <strong className="text-primary">
                                                0.55 ETH
                                            </strong> */}
                                        </p>
                                        <p className="mb-2">
                                            31
                                            {/* <strong className="text-primary">
                                                0.55 ETH
                                            </strong> */}
                                        </p>
                                        <p className="mb-2">
                                            <strong className="text-primary">
                                                69
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link href="/item"><a className="btn btn-primary">
                                        Adquirir Bilhete
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="card items">
                            <div className="card-body">
                                <div className="items-img position-relative">
                                    <img
                                        src="/images/items/rifa1.jpg"
                                        className="img-fluid rounded mb-3"
                                        alt=""
                                    />
                                    <img
                                        src="/images/avatar/5.jpg"
                                        className="creator"
                                        width="50"
                                        alt=""
                                    />
                                </div>
                                <h4 className="card-title">Rifa do Rico</h4>
                                <p></p>
                                <div className="d-flex justify-content-between">
                                    <div className="text-start">
                                        <p className="mb-2">Números</p>
                                        <p className="mb-2">Reservados</p>
                                        <h5 className="text-muted">
                                            Restantes
                                        </h5>
                                    </div>
                                    <div className="text-end">
                                        <p className="mb-2">
                                            100
                                            {/* <strong className="text-primary">
                                                0.55 ETH
                                            </strong> */}
                                        </p>
                                        <p className="mb-2">
                                            31
                                            {/* <strong className="text-primary">
                                                0.55 ETH
                                            </strong> */}
                                        </p>
                                        <p className="mb-2">
                                            <strong className="text-primary">
                                                69
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <Link href="/item"><a className="btn btn-primary">
                                        Adquirir Bilhete
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Raffle;