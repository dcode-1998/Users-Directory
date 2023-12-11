import React from 'react';
import './index.css';
const UserCard = props => {
  return (
    <div
      className='user-card-container al-just-space-between'
      onClick={() => {
        props.onClick(props.data.id);
      }}
    >
      <div className='text-ellipsis name-details-width' title={props.data.name}>
        Name: {props.data.name}
      </div>
      <div className='text-ellipsis post-details-width' title={props.posts}>
        Posts: {props.posts}
      </div>
    </div>
  );
};

export default UserCard;
