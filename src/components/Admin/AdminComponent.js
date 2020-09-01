import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../api';
import '../Home/style.css';

const FormComponent = () => {
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
                    {
                        attenders.map(attender => (
                            <div key={attender._id}>
                                <p>{attender.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default FormComponent;