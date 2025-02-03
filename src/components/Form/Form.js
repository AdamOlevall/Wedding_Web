import React from 'react';
import { TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { postForm } from '../../api';
import { useForm } from 'react-hook-form';
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
        background: "#616bdd",
        color: 'white',

    },
    formControl: {
        marginTop: '1rem',
    },
    formLabel: {
        lineHeight: '1.5',
    },
});

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    mingle: yup.string().required(),
    weddingDay: yup.string().required(),
    allergy: yup.string(),
    kids: yup.string(),
});

const Form = ({setIsSucceeded}) => {
    const classes = useStyles();
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            allergy: '',
            kids: '',
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
    const { ref: mingleRef, ...mingleRest } = register('mingle');
    const { ref: weddingDayRef, ...weddingDayRest } = register('weddingDay');
    const { ref: allergyRef, ...allergyRest } = register('allergy');
    const { ref: kidsRef, ...kidsRest } = register('kids');

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
                        <FormLabel component="label">Jag vill delta på minglet 25:e Juli</FormLabel>
                        <RadioGroup id="mingle" aria-label="mingle" name="mingle" value={getValues().weddingDay } className={classes.radioButtons}>
                            <FormControlLabel value="ja" control={<Radio inputRef={mingleRef} {...mingleRest} />} label="Ja" />
                            <FormControlLabel value="nej" control={<Radio inputRef={mingleRef} {...mingleRest} />} label="Nej" />
                        </RadioGroup>
                        </FormControl>
                        <TextField
                            id="kids"
                            label="Om ni tar med barn, nämn hur många här"
                            inputRef={kidsRef}
                            {...kidsRest}
                            name="kids"
                            className={classes.textField}
                        />
                        <FormControl component="fieldset" error={!!errors.weddingDay} className={classes.formControl}>
                        <FormLabel component="label">Jag vill delta på bröllopet 26:e Juli</FormLabel>
                        <RadioGroup id="weddingDay" aria-label="weddingDay" name="weddingDay" value={getValues().weddingDay } className={classes.radioButtons}>
                            <FormControlLabel value="ja" control={<Radio inputRef={weddingDayRef} {...weddingDayRest} />} label="Ja" />
                            <FormControlLabel value="nej" control={<Radio inputRef={weddingDayRef} {...weddingDayRest} />} label="Nej" />
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
                    <Button variant="contained" className={classes.button} type="submit">Skicka in</Button>
                </form>
    );
};

export default Form;