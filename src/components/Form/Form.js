import React from 'react';
import { TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { postForm } from '../../api';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './style.css';

const useStyles = makeStyles({
    heading: {
        fontSize: '32px'
    },
    textField: {
        width: '300px',
        marginBottom: '8px'
    },
    radioWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    radioButtons: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        width: "100%",
        marginBottom: "32px",
        marginTop: "16px",

    },
    formControl: {
        marginTop: '1rem',
    },
});

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    weddingDay: yup.string().required(),
    allergy: yup.string(),
    transport: yup.string().required(),
});

const Form = ({setIsSucceeded}) => {
    const classes = useStyles();
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            allergy: '',
        },
    });

    const onSubmit = (values) => {
        postForm(values).then((res) => {
            if (res.status === 200) {
                setIsSucceeded(true);
            }
        });
    };
    const { ref: firstNameRef, ...firstNameRest } = register('firstName');
    const { ref: lastNameRef, ...lastNameRest } = register('lastName');
    const { ref: weddingDayRef, ...weddingDayRest } = register('weddingDay');
    const { ref: allergyRef, ...allergyRest } = register('allergy');
    const { ref: transportRef, ...transportRest } = register('transport');
    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl component="fieldset" className={classes.radioWrapper}>
                        <TextField
                            id="firstName"
                            label="Förnamn"
                            inputRef={firstNameRef}
                            {...firstNameRest}
                            name="firstName"
                            className={classes.textField}
                            error={!!errors.firstName}
                        />
                        <TextField
                            id="lastName"
                            label="Efternamn"
                            inputRef={lastNameRef}
                            {...lastNameRest}
                            name="lastName"
                            className={classes.textField}
                            error={!!errors.lastName}
                        />
                        <FormControl component="fieldset" error={!!errors.weddingDay} className={classes.formControl}>
                        <FormLabel component="label">Jag deltar gärna på ert bröllop 24/8</FormLabel>
                        <RadioGroup id="weddingDay" aria-label="weddingDay" name="weddingDay" value={getValues().weddingDay } className={classes.radioButtons}>
                            <FormControlLabel value="ja" control={<Radio inputRef={weddingDayRef} {...weddingDayRest} />} label="Ja" />
                            <FormControlLabel value="nej" control={<Radio inputRef={weddingDayRef} {...weddingDayRest} />} label="Nej" />
                        </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" error={!!errors.transport} className={classes.formControl}>
                            <FormLabel component="label">Jag vill ha transport i from av buss</FormLabel>
                            <RadioGroup id="transport" aria-label="transport" name="transport" value={getValues().transport} className={classes.radioButtons}>
                                <FormControlLabel value="ja" control={<Radio inputRef={transportRef} {...transportRest} />} label="Ja" />
                                <FormControlLabel value="nej" control={<Radio inputRef={transportRef} {...transportRest} />} label="Nej" />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            id="allergy"
                            label="Eventuella allergier och matpreferenser"
                            inputRef={allergyRef}
                            {...allergyRest}
                            name="allergy"
                            className={classes.textField}
                        />
                    </FormControl>
                    <Button variant="contained" className={classes.button} type="submit">Anmäl</Button>
                </form>
    );
};

export default Form;