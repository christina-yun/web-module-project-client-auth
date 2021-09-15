import React from 'react';

const Friend = (props) => {
    const { friend } = props;
    return (
    <div>
        <h3>Name: {friend.name}</h3>
        <p>Email: {friend.email}</p>
        <p>Age: {friend.age}</p>
       
    </div>)
}

export default Friend;