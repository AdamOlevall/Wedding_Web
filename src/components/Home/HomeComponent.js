import React from 'react';
import './style.css';

const HomeComponent = () =>  {
  return (
    <div className="background--home">
      <div className="content--home">
              <p className="header-text--home">Ny information</p>
              <p className="header-text-small--home">För transport hem har vi löst fast pris med taxi in till stan, ca 550 kr är det sagt. Boka på 021-18 50 00 och ange kod VIP Säby. Förutom taxi ska Uber och Bolt finnas tillgängligt.</p>
              <br />
              <p className="header-text-small--home">Vigselplatsen är primärt i en hage, så tänk på skovalet. Smala stilettklackar kan bli svåra att hantera. Beroende på väder har vi dock två andra vigselplatser intill logen som backup där skovalet inte är lika känsligt. Håll utkik här på sidan dagarna innan bröllopet för att få den bekräftade vigselplatsen. </p>
              <br />
              <p className="header-text-small--home">Middagen och festen är i en lada som inte har någon isolering. Skulle det vara kallt utomhus kan det vara bra att som tjej ha med sig något extra till överkroppen så man inte enbart har sin tunna klänning att tillgå.</p>
      </div>
    </div>
  );
};

export default HomeComponent;