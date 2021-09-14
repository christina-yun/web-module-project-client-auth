import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setCredentials({
            credentials: {
                ...credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:5000/api/login', credentials)
            .then(resp => {
                console.log('here!', resp)
            })
            .catch()
    }


    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='username'
            value={credentials.username}
            onChange={handleChange}/>

            <input 
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}/>
            
            <button>Log in</button>
        </form>
    </div>)
}

export default Login;