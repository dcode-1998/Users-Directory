import React from 'react';
import './index.css';
const UserCard = props => {
  console.log(props.posts);
  return (
    <div
      className='user_card_container al-just-space-between'
      onClick={() => {
        props.onClick(props.data.id);
      }}
    >
      <div>Name: {props.data.name}</div>
      <div>Posts: {props.posts}</div>
    </div>
  );
};

export default UserCard;
