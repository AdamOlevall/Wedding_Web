import React, {useState} from 'react';
import { TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { postForm } from '../../api';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../Home/style.css';
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
    formControl: {
        marginTop: '1rem',
    },
});

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    mail: yup.string().email().required(),
    phone: yup.number().required(),
    weddingDay: yup.string().required(),
    dayBefore: yup.string().required(),
    meat: yup.string().required(),
    fish: yup.string().required(),
    vegetarian: yup.string().required(),
    vegan: yup.string().required(),
    allergy: yup.string(),
    transport: yup.string().required(),
});

const Form = () => {
    const [isSucceeded, setIsSucceeded] = useState(false);
    const classes = useStyles();
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: '',
            lastName: '',
            mail: '',
            phone: '',
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
    const { ref: mailRef, ...mailRest } = register('mail');
    const { ref: phoneRef, ...phoneRest } = register('phone');
    const { ref: weddingDayRef, ...weddingDayRest } = register('weddingDay');
    const { ref: dayBeforeRef, ...dayBeforeRest } = register('dayBefore');
    const { ref: meatRef, ...meatRest } = register('meat');
    const { ref: fishRef, ...fishRest } = register('fish');
    const { ref: vegetarianRef, ...vegetarianRest } = register('vegetarian');
    const { ref: veganRef, ...veganRest } = register('vegan');
    const { ref: allergyRef, ...allergyRest } = register('allergy');
    const { ref: transportRef, ...transportRest } = register('transport');
    return (
        isSucceeded ?
            <div className="success-wrapper">
                <p>{`${getValues().firstName}, ditt svar är registrerat!`}</p>
            </div> :
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
                        <TextField
                            id="mail"
                            label="E-post"
                            inputRef={mailRef}
                            {...mailRest}
                            name="mail"
                            className={classes.textField}
                            error={!!errors.mail}
                        />
                        <TextField
                            id="phone"
                            label="Mobiltelefon"
                            inputRef={phoneRef}
                            {...phoneRest}
                            name="phone"
                            className={classes.textField}
                            error={!!errors.phone}
                        />
                        <FormControl component="fieldset" error={!!errors.dayBefore} className={classes.formControl}>
                        <FormLabel component="label">Dagen innan 13/8 (Fredag)</FormLabel>
                        <RadioGroup id="dayBefore" aria-label="dayBefore" name="dayBefore" value={getValues().dayBefore} className={classes.radioButtons}>
                            <FormControlLabel value="ja" control={<Radio inputRef={dayBeforeRef} {...dayBeforeRest} />} label="Ja" />
                            <FormControlLabel value="nej" control={<Radio inputRef={dayBeforeRef} {...dayBeforeRest} />} label="Nej" />
                        </RadioGroup>
                            </FormControl>
                        <FormControl component="fieldset" error={!!errors.weddingDay} className={classes.formControl}>
                        <FormLabel component="label">Bröllopsdagen 14/8 (Lördag)</FormLabel>
                        <RadioGroup id="weddingDay" aria-label="weddingDay" name="weddingDay" value={getValues().weddingDay } className={classes.radioButtons}>
                            <FormControlLabel value="ja" control={<Radio inputRef={weddingDayRef} {...weddingDayRest} />} label="Ja" />
                            <FormControlLabel value="nej" control={<Radio inputRef={weddingDayRef} {...weddingDayRest} />} label="Nej" />
                        </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" error={!!errors.transport} className={classes.formControl}>
                            <FormLabel component="label">Transport under bröllopsdagen</FormLabel>
                            <RadioGroup id="transport" aria-label="transport" name="transport" value={getValues().transport} className={classes.radioButtons}>
                                <FormControlLabel value="ja" control={<Radio inputRef={transportRef} {...transportRest} />} label="Ja" />
                                <FormControlLabel value="nej" control={<Radio inputRef={transportRef} {...transportRest} />} label="Nej" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" error={!!errors.meat} className={classes.formControl}>
                        <FormLabel component="label">Jag äter kött</FormLabel>
                        <RadioGroup id="meat" aria-label="meat" name="meat" value={getValues().meat} className={classes.radioButtons}>
                            <FormControlLabel value="ja" control={<Radio inputRef={meatRef} {...meatRest} />} label="Ja" />
                            <FormControlLabel value="nej" control={<Radio inputRef={meatRef} {...meatRest} />} label="Nej" />
                        </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" error={!!errors.fish} className={classes.formControl}>
                        <FormLabel component="label">Jag äter fisk</FormLabel>
                        <RadioGroup id="fish"  aria-label="fish" name="fish" value={getValues().fish} className={classes.radioButtons}>
                            <FormControlLabel value="ja" control={<Radio inputRef={fishRef} {...fishRest} />} label="Ja" />
                            <FormControlLabel value="nej" control={<Radio inputRef={fishRef} {...fishRest} />} label="Nej" />
                        </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" error={!!errors.vegetarian} className={classes.formControl}>
                        <FormLabel component="label">Vegetariskt</FormLabel>
                        <RadioGroup id="vegetarian" aria-label="vegetarian" name="vegetarian" value={getValues().vegetarian} className={classes.radioButtons}>
                            <FormControlLabel value="ja" control={<Radio inputRef={vegetarianRef} {...vegetarianRest} />} label="Ja" />
                            <FormControlLabel value="nej" control={<Radio inputRef={vegetarianRef} {...vegetarianRest} />} label="Nej" />
                        </RadioGroup>
                        </FormControl>
                        <FormControl component="fieldset" error={!!errors.vegan} className={classes.formControl}>
                        <FormLabel component="label">Veganskt</FormLabel>
                        <RadioGroup id="vegan" aria-label="vegan" name="vegan" value={getValues().vegan} className={classes.radioButtons}>
                            <FormControlLabel value="ja" control={<Radio inputRef={veganRef} {...veganRest} />} label="Ja" />
                            <FormControlLabel value="nej" control={<Radio inputRef={veganRef} {...veganRest} />} label="Nej" />
                        </RadioGroup>
                        </FormControl>
                        <TextField
                            id="allergy"
                            label="Eventuella allergier"
                            inputRef={allergyRef}
                            {...allergyRest}
                            name="allergy"
                            className={classes.textField}
                        />
                    </FormControl>
                    <button className="submit-button" type="submit">Anmäl</button>
                </form>
    );
};

export default Form;