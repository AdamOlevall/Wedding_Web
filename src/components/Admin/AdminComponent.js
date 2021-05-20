import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../api';
import '../Home/style.css';
import './style.css';

const AdminComponent = () => {
   const [attenders, setAttenders] = useState([]);
    useEffect(() => {
        getAllUsers()
        .then(data => {
            setAttenders(data);
        })
    }, []);

    return (
        <div className="background">
            <div className="background-image">
                <div className="paper">
                    <div className="attenders">
                            <p className="attender-heading">Namn</p>
                            <p className="attender-heading">Email</p>
                            <p className="attender-heading">Tel</p>
                            <p className="attender-heading">Dag1</p>
                            <p className="attender-heading">Dag2</p>
                            <p className="attender-heading">Kött</p>
                            <p className="attender-heading">Fisk</p>
                            <p className="attender-heading">Veg</p>
                            <p className="attender-heading">Veganskt</p>
                        <p className="attender-heading">Tran.</p>
                        {
                            attenders.map(attender => (
                                <React.Fragment>
                                    <p>{attender.firstName} {attender.lastName}</p>
                                    <p>{attender.mail}</p>
                                    <p>{attender.phone}</p>
                                    <p>{attender.weddingDay}</p>
                                    <p>{attender.dayBefore}</p>
                                    <p>{attender.meat}</p>
                                    <p>{attender.fish}</p>
                                    <p>{attender.vegetarian}</p>
                                    <p>{attender.vegan}</p>
                                    <p>{attender.transport}</p>
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