import React, { useEffect, useState } from 'react';
import { TextField } from '@material-ui/core';
import { getAttenders } from '../../api';
import './style.css';

const AdminComponent = () => {
   const [attenders, setAttenders] = useState([]);
   const[searchValue, setSearchValue] = useState("");
   const [sortOnName, setSortOnName] = useState(false);
    useEffect(() => {
        getAttenders()
        .then(data => {
            setAttenders(data);
        })
    }, []);

    const sortedAttendersOnName = [...attenders].sort((a, b) => a.firstName.localeCompare(b.firstName))
    
    return (
        <div className="background--admin">
             <div className="scroll-area--admin">
                <div className="content--admin">
                    <div style={{padding: "0 8px", width: "100%", display:"flex", justifyContent: "space-between", alignItems:"center"}}>
                    <TextField
                        id="firstName"
                        label="Sök person"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                    />
                    <button style={{padding: "4px", background: "#616bdd", borderRadius: "4px", cursor: "pointer"}} onClick={() => sortOnName ? setSortOnName(false) : setSortOnName(true)}>Sortera på {sortOnName ? "nyast" : "förnamn"}</button>
                    </div>
                        <div className="attenders">
                            <p className="attender-heading">{attenders.length} svar</p>
                            <p className="attender-heading">{attenders.filter(attender => attender.mingle === 'ja').length} Ja</p>
                            <p className="attender-heading">{attenders.filter(attender => attender.weddingDay === 'ja').length} Ja</p>
                            <p className="attender-heading"></p>
                            <p className="attender-heading"></p>
                                <p className="attender-heading">Namn</p>
                                <p className="attender-heading">Mingel</p>
                                <p className="attender-heading">Bröllopsdagen</p>
                                <p className="attender-heading">Barn Mingel</p>
                                <p className="attender-heading">Allergi och matpreferenser</p>
                            {
                               (sortOnName ? sortedAttendersOnName : attenders)
                                .filter(val => `${val.firstName.toLowerCase()}  ${val.lastName.toLowerCase()}`.includes(searchValue.toLowerCase()))
                                .map(attender => (
                                    <React.Fragment key={`${attender.firstName} ${attender.lastName}`}>
                                        <p>{attender.firstName} {attender.lastName}</p>
                                        <p>{attender.mingle}</p>
                                        <p>{attender.weddingDay}</p>
                                        <p>{attender.kids}</p>
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