import React, {useState} from 'react';

import './style.css';

const HomeComponent = () =>  {
  const [showModal, setShowModal] = useState(false);
  return (
      <div className="background">
        {showModal && <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-image" />
        </div>}
        <div className="background-image">
          <div className="paper">
            <p className="header-text">Beatrice och <span onClick={() => setShowModal(true)}>Charles</span></p>
            <p className="body-text body-text-dark">Välkommen till vår bröllopshelg 13-15 augusti 2021 i Vadstena.</p>
            <p className="body-text body-text-dark">I takt med att vaccineringen går framåt har vi valt att fortsätta vår planering för vårt bröllop. Med respekt för restriktionerna kan vi dock behöva ställa in bröllopet med kort varsel och all information är i reservation för restriktionerna kring pandemin.
            </p>
            <p className="body-text body-text-dark">Vi ber er därför att läsa våra tankar kring detta under kategorin “covid-19”.
            </p>
            <p className="body-text body-text-dark">Självklart hoppas vi att vårt bröllop går att genomföra som vi tänkt!
            </p>
            <p className="body-text body-text-dark">Kram
              <br />Beatrice & Charles
            </p>
          </div>
        </div>
      </div>
  )
};

export default HomeComponent;