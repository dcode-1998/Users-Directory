import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { usersList } from '../../state-management/apis/userListApi';
import { postList } from '../../state-management/apis/postListApi';
import { setPostsDetails } from '../../state-management/slices/postsList';

import UserCard from '../shared/user-card';

import './index.css';
import { setUserDetails } from '../../state-management/slices/usersList';

const UsersList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usersListingData = useSelector(state => state.usersList.usersListingData);
  const postsListingData = useSelector(state => state.postsList.postsListingData);

  const initialState = { usersList: [], postsList: [], isOpen: false };
  const [state, updateState] = useReducer((prev, next) => {
    let updateState = { ...prev, ...next };
    return updateState;
  }, initialState);

  useEffect(() => {
    dispatch(usersList());
    dispatch(postList());
    updateState({ usersList: usersListingData, postsList: postsListingData });
  }, []);

  const onClick = userId => {
    dispatch(setPostsDetails(state.postsList?.filter(post => post.userId === userId)));
    dispatch(setUserDetails(state.usersList?.filter(user => user.id === userId)[0]));
    navigate(`../user-details/${userId}`);
  };

  const fetchPosts = (posts, userId) => {
    return posts?.filter(post => post.userId === userId).length;
  };

  return (
    <div className='al-just-center flex-direction-column'>
      <div className='directory-container'>Directory</div>
      <div className='users_list_container'>
        {state.usersList.map(item => (
          <UserCard
            key={item.id}
            data={item}
            posts={fetchPosts(state.postsList, item.id)}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
