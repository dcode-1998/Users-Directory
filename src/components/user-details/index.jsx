import { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Modal from '../shared/posts-modal';
import PostsCard from '../shared/post-card';

import './index.css';
import CustomClock from '../custom-clock';
import ProfilePage from '../profile-page';
const UserDetails = () => {
  const postsList = useSelector(state => state.postsList.postsDetails);
  const UserDetails = useSelector(state => state.usersList.UserDetails);
  const navigate = useNavigate();

  const initialState = { isOpen: false, postDetails: {}, isPlay: true };
  const [state, updateState] = useReducer((prev, next) => {
    let updateState = { ...prev, ...next };
    return updateState;
  }, initialState);

  const handleClose = e => {
    updateState({ isOpen: false });
  };

  const onClick = data => {
    updateState({ isOpen: true, postDetails: data });
  };

  const onClickClock = data => {
    updateState({ isPlay: data });
  };

  return (
    <div className='user-details'>
      <div className='al-just-space-between' style={{ gap: '0.325rem' }}>
        <div>
          <button
            onClick={() => {
              navigate('../');
            }}
          >
            back
          </button>
        </div>
        <CustomClock onClick={onClickClock} isPlay={state.isPlay} />
      </div>
      <h2 className='profile-page-heading'>Profile Page</h2>
      <ProfilePage user={UserDetails} />
      <div className={`postslist-container ${state.isOpen ? 'no-scroll' : ''}`}>
        {postsList.map(post => (
          <PostsCard key={post.id} post={post} onClick={onClick} />
        ))}
      </div>
      <Modal isOpen={state.isOpen} onClose={handleClose} post={state.postDetails} />
    </div>
  );
};

export default UserDetails;
