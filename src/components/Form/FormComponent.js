import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import './style.css';

const useStyles = makeStyles({
    button: {
        width: "100%",
        marginBottom: "32px",
        marginTop: "16px",
        background: "#bfcbb6",
        color: 'white'

    },
});

const FormComponent = () => {
    const classes = useStyles();
    const [isSucceeded, setIsSucceeded] = useState(false);
    return (
        <div className="background--form">
            <div className="content--form">
            {
            isSucceeded ?
            <div className="success-wrapper">
                <p className="success-wrapper-text">Tack för ditt svar!</p>
                <Button variant="contained" className={classes.button} onClick={() => setIsSucceeded(false)}>Lägg till ytterligare gäst</Button>
            </div> :
            <Form setIsSucceeded={setIsSucceeded}/>}
           </div>
    </div>
    );
};

export default FormComponent;