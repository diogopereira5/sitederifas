import React from 'react';
import TopCollection from '../elements/TopCollection';

function TopReffles() {
    return (
        <div className="top-collection section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title text-center">
                            <h2>Top Rifas nos últimos 7 dias</h2>
                            <p>

                                Aqui você pode ver as melhores rifas dos últimos dias.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <TopCollection />
                </div>
            </div>
        </div>
    );
}

export default TopReffles;