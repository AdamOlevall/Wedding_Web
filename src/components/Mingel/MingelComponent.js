import React from 'react';
import './style.css';

const WeddingDayComponent = () => {
    return (
        <div className="background--mingel-day">
            <div className="scroll-area--mingel-day">
                <div className="content--mingel-day">
                    <div className="text-content--mingel-day" key={1}>
                        <p className="body-text-heading--mingel-day">Tid</p>
                        <p className="body-text-info--mingel-day">16:00 - 20:00</p>
                    </div>
                    <div className="text-content--mingel-day" key={2}>
                        <p className="body-text-heading--mingel-day">Vart?</p>
                        <p className="body-text-info--mingel-day">Urhagsgatan 2</p>
                    </div>
                    <div className="text-content--mingel-day" key={3}>
                        <p className="body-text-heading--mingel-day">Barn</p>
                        <p className="body-text-info--mingel-day">Barn är välkomna på minglet, men nämn detta i anmälan.</p>
                    </div>
                    <div className="text-content--mingel-day" key={4}>
                        <p className="body-text-heading--mingel-day">Mat</p>
                        <p className="body-text-info--mingel-day">Bandykorv, givetvis.</p>
                    </div>
                    <div className="text-content--mingel-day" key={4}>
                        <p className="body-text-heading--mingel-day">Dryck</p>
                        <p className="body-text-info--mingel-day">Finns på plats.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingDayComponent;