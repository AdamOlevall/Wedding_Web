import React, { useEffect, useState } from 'react';
import { getAttenders } from '../../api';
import '../Home/style.css';
import './style.css';

const AdminComponent = () => {
   const [attenders, setAttenders] = useState([]);
    useEffect(() => {
        getAttenders()
        .then(data => {
            setAttenders(data);
        })
    }, []);

    return (
        <div className="background">
            <div className="background-image">
                <div className="paper-admin">
                    <div className="attenders">
                        <p className="attender-heading">{attenders.length} svar</p>
                        <p className="attender-heading only-desktop"></p>
                        <p className="attender-heading only-desktop"></p>
                        <p className="attender-heading">{attenders.filter(attender => attender.dayBefore === 'ja').length} Ja</p>
                        <p className="attender-heading">{attenders.filter(attender => attender.weddingDay === 'ja').length} Ja</p>
                        <p className="attender-heading">{attenders.filter(attender => attender.transport === 'ja').length} Ja</p>
                        <p className="attender-heading only-desktop">{attenders.filter(attender => attender.meat === 'ja').length} Ja</p>
                        <p className="attender-heading only-desktop">{attenders.filter(attender => attender.fish === 'ja').length} Ja</p>
                        <p className="attender-heading only-desktop">{attenders.filter(attender => attender.vegetarian === 'ja').length} Ja</p>
                        <p className="attender-heading only-desktop">{attenders.filter(attender => attender.vegan === 'ja').length} Ja</p>
                        <p className="attender-heading only-desktop"></p>
                            <p className="attender-heading">Namn</p>
                            <p className="attender-heading only-desktop">Email</p>
                            <p className="attender-heading only-desktop">Tel</p>
                            <p className="attender-heading">Dagen innan</p>
                            <p className="attender-heading">Bröllopsdagen</p>
                            <p className="attender-heading">Transport</p>
                            <p className="attender-heading only-desktop">Kött</p>
                            <p className="attender-heading only-desktop">Fisk</p>
                            <p className="attender-heading only-desktop">Veg</p>
                            <p className="attender-heading only-desktop">Veganskt</p>
                            <p className="attender-heading only-desktop">Allergier</p>

                        {
                            attenders.map(attender => (
                                <React.Fragment>
                                    <p>{attender.firstName} {attender.lastName}</p>
                                    <p className="only-desktop">{attender.mail}</p>
                                    <p className="only-desktop">{attender.phone}</p>
                                    <p>{attender.dayBefore}</p>
                                    <p>{attender.weddingDay}</p>
                                    <p>{attender.transport}</p>
                                    <p className="only-desktop">{attender.meat}</p>
                                    <p className="only-desktop">{attender.fish}</p>
                                    <p className="only-desktop">{attender.vegetarian}</p>
                                    <p className="only-desktop">{attender.vegan}</p>
                                    <p className="only-desktop">{attender.allergy}</p>
                                </React.Fragment>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminComponent;