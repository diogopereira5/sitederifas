// import ThemeSwitch from "../components/elements/DarkLight";

import LayoutFront from "../components/layout/LayoutFront";
import ProfileMenu from "../components/layout/ProfileMenu";

function Test() {
    return (
        <>
            <LayoutFront
                headTitle="Collected"
                pageTitle="Collected"
                pageTitleSub={"Neftify Collected page"}
                pageClass={"front"}
                parent={"Profile"}
                child={"Collected"}
            >
                <div className="profile-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ProfileMenu />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h4 className="card-title mb-3">My Collection</h4>
                                        <div className="row">
                                            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <div className="card items">
                                                    <div className="card-body">
                                                        <div className="items-img position-relative">
                                                            <img
                                                                src="/images/items/5.jpg"
                                                                className="img-fluid rounded mb-3"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="/images/avatar/1.jpg"
                                                                className="creator"
                                                                width="50"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <h4 className="card-title">
                                                            Liguid Wave
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <div className="card items">
                                                    <div className="card-body">
                                                        <div className="items-img position-relative">
                                                            <img
                                                                src="/images/items/6.jpg"
                                                                className="img-fluid rounded mb-3"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="/images/avatar/2.jpg"
                                                                className="creator"
                                                                width="50"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <h4 className="card-title">
                                                            Liguid Wave
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <div className="card items">
                                                    <div className="card-body">
                                                        <div className="items-img position-relative">
                                                            <img
                                                                src="/images/items/7.jpg"
                                                                className="img-fluid rounded mb-3"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="/images/avatar/3.jpg"
                                                                className="creator"
                                                                width="50"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <h4 className="card-title">
                                                            Liguid Wave
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <div className="card items">
                                                    <div className="card-body">
                                                        <div className="items-img position-relative">
                                                            <img
                                                                src="/images/items/8.jpg"
                                                                className="img-fluid rounded mb-3"
                                                                alt=""
                                                            />
                                                            <img
                                                                src="/images/avatar/4.jpg"
                                                                className="creator"
                                                                width="50"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <h4 className="card-title">
                                                            Liguid Wave
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutFront>
        </>
    );
}
export default Test;
