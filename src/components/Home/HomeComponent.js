import React from 'react';
import './style.css';

const HomeComponent = () =>  {
  return (
    <div className="background--home">
      <div className="scroll-area--home">
        <div className="content--home">
                <p className="new-info-header--home">Ny viktig info</p>
                <p className="new-info-text--home">
Det kommer finnas minibussar som går hem till Västerås under natten. Bussarna börjar rulla ca 01. Exakta tider bestäms på plats för att fylla bussarna på bästa sätt. Sista bussen går ca 04. 
Pris: 100 kr/person. För att boka plats på en buss: swisha Maja på 076-2557990 senast 19/7. Bussarna kör in till centrala Västerås (ej hem till dörren).</p>
                <p className="new-info-text--home">
                Om vädret är katastrof under fredagen så kommer minglet att ställas in. Vi håller tummarna för att vädergudarna är med oss, men om så inte är fallet kommer vi kontakta er.
                </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;