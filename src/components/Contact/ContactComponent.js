import React from 'react';
import './style.css';

const ContactComponent = () => {
    return (
        <div className="background--contact">
            <div className="content--contact">
            <div  className="text-content--contact">
                <p className="body-text-heading--contact">Bruden</p>
                <p className="body-text-info--contact">072-591 12 22 <br /> matildaoden@live.se</p>
            </div>
            <div  className="text-content--contact">
                <p className="body-text-heading--contact">Brudgummen</p>
                <p className="body-text-info--contact">073-664 92 71 <br />adamolevall@gmail.com</p>
            </div>
            <div  className="text-content--contact">
                <p className="body-text-heading--contact">Toastmasters</p>
                <p className="body-text-info--contact">Johan Lindblom 073-959 01 55 <br /> Simon Alzén 073-775 63 42</p>
            </div>
        </div>
    </div>

                   

 
    );
};







export default ContactComponent;