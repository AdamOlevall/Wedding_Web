import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { getAttenders } from '../../api';
import './style.css';

const AdminComponent = () => {
   const [attenders, setAttenders] = useState([]);
   const[searchValue, setSearchValue] = useState("");
    useEffect(() => {
        getAttenders()
        .then(data => {
            setAttenders(data);
        })
    }, []);

    const sortedAttendersOnName = attenders.sort((a, b) => a.firstName - b.firstName)

    return (
        <div className="background--admin">
             <div className="scroll-area--admin">
                <div className="content--admin">
                    <TextField
                        id="firstName"
                        label="Sök person"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                    />
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
                                sortedAttendersOnName
                                .filter(val => `${val.firstName.toLowerCase()}  ${val.lastName.toLowerCase()}`.includes(searchValue.toLowerCase()))
                                .map(attender => (
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
             </div>
        </div>
    );
};

export default AdminComponent;