import React, { useEffect, useState } from 'react';

import Friend from './Friend';
import AddFriend from './AddFriend';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendList = (props) => {
    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(resp => {
                setFriendsList(resp.data)
            })
            .catch(err=> {
                console.error(err)
            })
    }, [])

    return (
    <div>
        {friendsList.map(friend=> {
            return <Friend friend={friend}/>
        })}
        <AddFriend />
    </div>)
}

export default FriendList;