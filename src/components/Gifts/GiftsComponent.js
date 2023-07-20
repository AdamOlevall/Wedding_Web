import React from 'react';
import './style.css';

const GiftsComponent = () => {
    return (
    <div className="background--gifts">
         <div className="layer--wedding-day"></div>
        <div className="content--gifts">
            <p className="body-text-info--gifts">Vi är så tacksamma att ni alla vill vara med och dela denna stora dag med oss. Eftersom vi redan har världens finaste hund finns det inte mycket mer vi kan önska oss. Vill ni ändå ge oss något så är vi väldigt tacksamma för ett bidrag till bröllopsresan.</p>
            <div className="text-content--gifts">
                <p className="body-text-heading--gifts">Bank</p>
                <p className="body-text-info--gifts">Handelsbanken</p>
            </div>
            <div className="text-content--gifts">
                <p className="body-text-heading--gifts">Kontonummer</p>
                <p className="body-text-info--gifts">XXXX XXXXXXX</p>
            </div>
        </div>
    </div>
    );
};

export default GiftsComponent;