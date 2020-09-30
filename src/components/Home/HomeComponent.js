import React from 'react';
import { hotels } from '../../utils/hotels';

import './style.css';

const HomeComponent = () =>  (
<div className="background">
  <div className="background-image">
    <div className="paper">
      <p className="header-text">Beatrice och Charles</p>
      <p className="body-text">Välkomna till vår bröllopshelg i Vadstena 13 - 15 Augusti 2021. 
        Här nedan följer alternativa boenden som vi rekommenderar för helgen.
      </p>
      <p  className="body-text body-text-small body-text-dark">Vid frågor kontakta bruden eller brudgummen.
      </p>
      <p className="body-text body-text-small body-text-dark">Hemsidan uppdateras när den formella inbjudan skickas ut.
      </p>
      <div className="block-list">
        {
          hotels.map(hotel => {
            if (hotel.link.length > 0) {
              return (
              <a href={hotel.link} target="_blank" key ={hotel.name} className="block" rel="noopener noreferrer">
                <p className="block-header">{hotel.name}</p>
                <p className="block-text">{hotel.info}</p>
              </a>)
            }
            return (
            <div key ={hotel.name} className="block">
              <p className="block-header">{hotel.name}</p>
              <p className="block-text">{hotel.info}</p>
            </div>
            )
          })
        }
      </div>
    </div>
  </div>
</div>
);

  export default HomeComponent;