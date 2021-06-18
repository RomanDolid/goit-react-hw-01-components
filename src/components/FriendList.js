import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import s from '../styles/FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
         <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;