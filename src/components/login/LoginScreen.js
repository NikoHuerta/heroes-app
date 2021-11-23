import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const [{ nameLogin }, handleInputChange] = useForm({nameLogin: ""});

    const handleLogin = (e) => {
        
        e.preventDefault();
        if(nameLogin.trim().length <= 1){
            return ;
        }

        const action = {
            type: types.login,
            payload: {
                name: nameLogin,
                email: 'test@mail.testdom'
            }
        }
        dispatch(action);

        const lastPage = localStorage.getItem('lastPath') || "/" ;
        navigate(lastPage, { replace: true });
    };
    
    
    
    
    return (
        <div className="container mt-5">
            <h1> Login Screen </h1>
            <hr/>


            <form onSubmit={ handleLogin }>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control"

                    autoComplete="off"
                    name="nameLogin"
                    onChange={ handleInputChange }
                    value={ nameLogin }
                />
            <br />
            <button
            className="btn btn-primary"
            type="submit">
                Login
            </button>
            </form>
        </div>
    )
}
