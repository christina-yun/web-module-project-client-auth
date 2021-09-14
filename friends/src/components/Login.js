import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({
            username: '',
            password: ''
    })

    let history = useHistory();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:5000/api/login', credentials)
            .then(resp => {
                console.log('here!', resp.data.payload)
                localStorage.setItem('token', resp.data.payload)
                history.push('/friends')

            })
            .catch(err => {
                console.error(err)
            })
    }


    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='username'
            value={credentials.username}
            placeholder='username'
            onChange={handleChange}/>

            <input 
            type='password'
            name='password'
            value={credentials.password}
            placeholder='password'
            onChange={handleChange}/>
            
            <button>Log in</button>
        </form>
    </div>)
}

export default Login;