import React, {useState} from 'react';
import Form from './Form';
import '../Home/style.css';
import './style.css';

const FormComponent = () => {
    const [forms, setForms] = useState([<Form key="0"/>]);
    const addPerson = () => {
        setForms([...forms, <Form key="1" />])
    };
    return (
        <div className="background">
            <div className="background-image">
                <div className="paper">
                    <p className="header-text">Anmälan</p>
                    {
                        forms.map(form => form)
                    }
                    {
                        forms.length === 1 &&
                        <button className="add-person-button" type="button" onClick={() => addPerson()}>Lägg till respektive</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default FormComponent;