import React from 'react';
import '../Home/style.css';

const GiftsComponent = () => {
    return (
        <div className="background">
            <div className="background-image">
                <div className="paper">
                    <p className="header-text">Önskelista</p>
                    <p className="body-text body-text-dark">Den största gåvan ni kan ge är att dela denna stora dag med oss! Vill ni dock ändå ge något uppskattas ett bidrag till vår kommande bröllopsresa.</p>
                    <p className="body-text body-text-dark"><span>Bank: </span>Vadstena Sparbank</p>
                    <p className="body-text body-text-dark"><span>Kontonummer: </span>8383-2, 3202647-8</p>
                </div>
            </div>
        </div>
    );
};

export default GiftsComponent;