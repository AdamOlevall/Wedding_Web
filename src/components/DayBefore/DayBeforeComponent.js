import React from 'react';
import '../Home/style.css';

const DayBeforeComponent = () => {
    return (
        <div className="background">
            <div className="background-image">
                <div className="paper">
                    <p className="header-text">Dagen innan</p>
                    <p className="body-text body-text-dark">Dagen innan vigseln vill vi bjuda in alla gäster till ett mingel. Det är helt valfritt att komma men vi skulle bli otroligt glada ifall ni ville komma och mingla med oss. För att vi på ett enklare sätt ska kunna planera så behöver ni osa även till minglet.
                    </p>
                    <p className="body-text body-text-dark">Det bjuds på lättare mat och dryck finns att köpa i hotellets bar.
                    </p>
                    <p className="body-text body-text-dark"><span>Plats:</span> Parken bakom Starby Hotell.</p>
                    <p className="body-text body-text-dark"><span>Tid:</span> 18.30-22.00</p>
                    <p className="body-text body-text-dark"><span>Klädkod:</span> Någon tjusig klädsel som du känner dig bekväm i.</p>
                    <p className="body-text body-text-dark"><span>Barn: </span>Är välkomna. </p>
                    <p className="body-text body-text-dark">OSA görs under Anmälan</p>
                </div>
            </div>
        </div>
    );
};

export default DayBeforeComponent;