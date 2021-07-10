import React from 'react';
import PropTypes from 'prop-types';
import defaulttAva from '../../default-avatar.jpg';

import './FriendListItem.css';


const FriendListItem = ({ avatar, name, isOnline }) => {

    return (
        <>
            <span className="friend-status" style={{ backgroundColor: isOnline ? '#008000' : '#ff0000' }}>
                {isOnline}
            </span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="friend-name">{name}</p>
        </>
    );
 
};


FriendListItem.defaultProps = {
  avatar: defaulttAva,
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;