import React, { useEffect, useState } from 'react';
import { getAttenders } from '../../api';
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
        <div className="background--admin">
             <div className="layer--admin"></div>
                    <div className="attenders">
                        <p className="attender-heading">{attenders.length} svar</p>
                        <p className="attender-heading">{attenders.filter(attender => attender.weddingDay === 'ja').length} Ja</p>
                        <p className="attender-heading">{attenders.filter(attender => attender.transport === 'ja').length} Ja</p>
                        <p className="attender-heading"></p>
                            <p className="attender-heading">Namn</p>
                            <p className="attender-heading">Bröllopsdagen</p>
                            <p className="attender-heading">Transport</p>
                            <p className="attender-heading">Allergi och matpreferenser</p>
                           

                        {
                            attenders.map(attender => (
                                <React.Fragment>
                                    <p>{attender.firstName} {attender.lastName}</p>
                                    <p>{attender.weddingDay}</p>
                                    <p>{attender.transport}</p>
                                    <p>{attender.allergy}</p>
                                </React.Fragment>

                            ))
                        }
             </div>
        </div>
    );
};

export default AdminComponent;