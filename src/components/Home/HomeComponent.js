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
            <p className="body-text body-text-dark">Välkomna till vår bröllopshelg i Vadstena Fredag  13/8 - Söndag 15/8.</p>
            <p className="body-text body-text-dark">Vi är så glada över att ni är så många som tackat ja! Vilken helg vi ska ha - nu kör vi!
            </p>
            <p className="body-text body-text-dark">Här nedan följer mer detaljerad information kring bröllopshelgen!
            </p>
            <p className="body-text body-text-dark day-header">Fredag 13/8 - Dagen innan vigsel
            </p>
            <p className="body-text body-text-dark"><span>Plats: </span>  Starby Hotell
            </p>
            <p className="body-text body-text-dark"><span>Tid: </span>  18.30 - 22.00
            </p>
            <p className="body-text body-text-dark"><span>Klädsel: </span>  Något tjusigt som du känner dig bekväm i.
            </p>
            <p className="body-text body-text-dark">Välkommen på trädgårdsmingel i Starbys härliga trädgård! Vi bjuder på lättare mat medan dryck finns att köpa i hotellets bar.
            </p>
            <p className="body-text body-text-dark">
              Barn är välkomna, men vi önskar att ni anmäler detta till oss.
            </p>
            <p className="body-text body-text-dark day-header">Lördag 14/8 - Vigseldag
            </p>
            <p className="body-text body-text-dark"><span>Vigselplats: </span> Alvastra Klosterruin
            </p>
            <p className="body-text body-text-dark"><span>Tid: </span>  16.00
            </p>
            <p className="body-text body-text-dark"><span>Klädsel: </span> Kostym
            </p>
            <p className="body-text body-text-dark"><span>Festen: </span> Vilseberga Bränneri. "Låt oss bli fulla för kärlekens skull" - Charles Einarsson
            </p>
            <p className="body-text body-text-dark"><span>Transport: </span>  Bussar avgår för gäster som bokat från Starby hotell 15.00. Bussarna tar er till vigselplatsen och sedan vidare till festlokalen. Från festlokalen finns det två hemgångar att förhålla sig till. Bussarna stannar vid Starby Hotell i Vadstena. Betalning för bussarna görs via swish till Gunilla Andersson, 0702168954, senast den 1/8 med 100 kr/person.
            </p>
            <p className="body-text body-text-dark"><span>Tal: </span> Anmäls till Joakim och Filip, senast 11 Juli. Kontaktuppgifter finns under "Kontakt".
            </p>
            <p className="body-text body-text-dark"><span>Angående barn: </span> Barn är välkomna på vigseln men därefter önskas firandet fortsätta i vuxet sällskap. Då det kommer förtäras alkohol har vi valt att ha en 18-årsgräns med undantag för spädbarn.</p>
            <p className="body-text body-text-dark day-header">Söndag 15/8
            </p>
            <p className="body-text body-text-dark">För er som inte är boende på Starby Hotell men som skulle vilja äta en pangfrukost tillsammans med brudparet så finns det här en möjlighet för detta. Frukost behöver dock förbokas och görs till brudparet senast 1/8. Priset är 159 kr/person och betalas på plats.</p>
            <p className="body-text body-text-dark">Kram
              <br />Beatrice & Charles
            </p>
          </div>
        </div>
      </div>
  )
};

export default HomeComponent;