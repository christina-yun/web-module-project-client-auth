import axios from 'axios';
import React, { useState } from 'react';

const AddFriend = () => {
    const initialState = {
        name:'',
        age: '',
        email: ''
    }
    const [friend, setFriend] = useState(initialState)

    const handleChange = (e) => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/friends', friend)
            .then(resp => {
                console.log('submit resp', resp.data)
            })
            .catch()
        setFriend(initialState)
    }


    return (
        <div className='add-friend-form'>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type='text'
                    name='name'
                    value={friend.name}
                    placeholder='Name'
                    onChange={handleChange}/>
                <label>Age:</label>
                <input 
                    type='number'
                    name='age'
                    value={friend.age}
                    placeholder='Age'
                    onChange={handleChange}/>
                <label>Email:</label>
                <input 
                    type='email'
                    name='email'
                    value={friend.email}
                    placeholder='Email Address'
                    onChange={handleChange}/>
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;