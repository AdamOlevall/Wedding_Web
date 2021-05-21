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
                            <p className="attender-heading">Namn</p>
                            <p className="attender-heading">Email</p>
                            <p className="attender-heading">Tel</p>
                            <p className="attender-heading">Dagen innan</p>
                            <p className="attender-heading">Bröllopsdagen</p>
                            <p className="attender-heading">Transport</p>
                            <p className="attender-heading">Kött</p>
                            <p className="attender-heading">Fisk</p>
                            <p className="attender-heading">Veg</p>
                            <p className="attender-heading">Veganskt</p>
                            <p className="attender-heading">Allergier</p>

                        {
                            attenders.map(attender => (
                                <React.Fragment>
                                    <p>{attender.firstName} {attender.lastName}</p>
                                    <p>{attender.mail}</p>
                                    <p>{attender.phone}</p>
                                    <p>{attender.dayBefore}</p>
                                    <p>{attender.weddingDay}</p>
                                    <p>{attender.transport}</p>
                                    <p>{attender.meat}</p>
                                    <p>{attender.fish}</p>
                                    <p>{attender.vegetarian}</p>
                                    <p>{attender.vegan}</p>
                                    <p>{attender.allergy}</p>
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