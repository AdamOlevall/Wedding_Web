import React from 'react';
import { hotels } from '../../utils/hotels';

const AccommodationComponent = () =>  (
    <div className="background">
        <div className="background-image">
            <div className="paper">
                <p className="header-text">Övernattningsalternativ</p>
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

export default AccommodationComponent;