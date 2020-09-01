import React from 'react';
import { TextField } from '@material-ui/core';
import { getAllUsers, postUser } from '../../api';
import { useForm } from 'react-hook-form';
import '../Home/style.css';

const FormComponent = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (values) => {
        postUser(values);
    }

    return (
        <div className="background">
            <div className="background-image">
                <form className="paper" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="standard-basic"
                        label="Standard"
                        inputRef={register}
                        name="name"
                    />
                    <button type="submit">Skicka</button>
                    <button type="button" onClick={() => getAllUsers()}>Hämta alla</button>
                </form>
            </div>
        </div>
    );
}

export default FormComponent;