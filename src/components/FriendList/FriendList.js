import React from 'react';
// import PropTypes from 'prop-types';
import FriendListItem from './../FriendListItem/FriendListItem';

import './FriendList.css';


const FriendList = ({ friends }) => {

    // console.log(friends);
    return (
        <ul className="friend-list">
            {friends.map(({ avatar, name, id, isOnline }) => (
                <li className="friend-list-item" key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                </li>
            ))}
        </ul>
    );
 
};

// FriendList.propTypes = {

// };

export default FriendList;
