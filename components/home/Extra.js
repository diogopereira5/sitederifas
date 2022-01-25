import React from 'react';

// import { Container } from './styles';

function Extra() {
    return (
        <>
            <div className="notable-drops section-padding bg-light triangle-top-light triangle-bottom-light">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center d-flex justify-content-between mb-3">
                                <h2>Notable Drops</h2>
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
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card">
                                <img
                                    className="img-fluid card-img-top"
                                    src="/images/items/1.jpg"
                                    alt=""
                                />
                                <div className="card-body">
                                    <div className="notable-drops-content-img"></div>
                                    <h4 className="card-title">
                                        Chito x Givenchy
                                    </h4>
                                    <p>
                                        Make your offers before 12pm EST Nov
                                        29th
                                    </p>
                                    <Link href="/explore"><a>
                                        Explore
                                        <i className="bi bi-arrow-right-short"></i>
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card">
                                <img
                                    className="img-fluid card-img-top"
                                    src="/images/items/2.jpg"
                                    alt=""
                                />
                                <div className="card-body">
                                    <div className="notable-drops-content-img"></div>
                                    <h4 className="card-title">
                                        The Space Cowboys
                                    </h4>
                                    <p>50 1/1's from Roger Allan Cleaves around the world</p>
                                    <Link href="/explore"><a>
                                        Explore
                                        <i className="bi bi-arrow-right-short"></i>
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card">
                                <img
                                    className="img-fluid card-img-top"
                                    src="/images/items/3.jpg"
                                    alt=""
                                />
                                <div className="card-body">
                                    <div className="notable-drops-content-img"></div>
                                    <h4 className="card-title">
                                        Extra Dimensional                                         </h4>
                                    <p>
                                        A collection of 100 1/1 Extra
                                        Dimensional Beings
                                    </p>
                                    <Link href="/explore"><a>
                                        Explore
                                        <i className="bi bi-arrow-right-short"></i>
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card">
                                <img
                                    className="img-fluid card-img-top"
                                    src="/images/items/4.jpg"
                                    alt=""
                                />
                                <div className="card-body">
                                    <div className="notable-drops-content-img"></div>
                                    <h4 className="card-title">
                                        Extra Dimensional
                                    </h4>
                                    <p>
                                        A collection of 100 1/1 Extra
                                        Dimensional Beings
                                    </p>
                                    <Link href="/explore"><a>
                                        Explore
                                        <i className="bi bi-arrow-right-short"></i>
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-collection section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2>Top collections over last 7 days</h2>
                                <p>

                                    Here are a few reasons why you should
                                    choose Neftify
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <TopCollection />
                    </div>
                </div>
            </div>


            <div className="browse-category section-padding border-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2>Browse by category</h2>
                                <p>

                                    Here are a few reasons why you should
                                    choose Neftify
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <BrowseCategory />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Extra;