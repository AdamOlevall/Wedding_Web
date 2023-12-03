import React from 'react';
import { faq } from '../../utils/faq';
import './style.css';

const WeddingDayComponent = () => {
    return (
        <div className="background--wedding-day">
            <div className="scroll-area--wedding-day">
                <div className="content--wedding-day">
                {
                faq.map((currentQuestion, i) => (
                <div className="text-content--wedding-day" key={i}>
                        <p className="body-text-heading--wedding-day">{currentQuestion.question}</p>
                        <p className="body-text-info--wedding-day">{currentQuestion.answer}</p>
                    </div>
                ))
            }
                </div>
            </div>
        </div>
    );
};

export default WeddingDayComponent;