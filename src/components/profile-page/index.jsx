import './index.css';

const ProfilePage = ({ user }) => {
  return (
    <div className='profile-page al-just-space-between'>
      <div className='name-details details-width'>
        <div>{user.name}</div>
        <div className='display-flex al-just-space-between'>
          <div className='text-ellipsis catch-phrase' title={user.company.catchPhrase}>
            {user.company.catchPhrase}
          </div>
          <div>|</div>
          <div className='text-ellipsis' title={user.username}>
            {user.username}
          </div>
        </div>
      </div>
      <div className='address-details details-width'>
        <div>
          Address-{' '}
          {Object.keys(user.address)
            .filter(item => item !== 'geo')
            .map(key => (
              <div className='text-ellipsis' key={key} title={user.address[key]}>
                {key} : {user.address[key]}
              </div>
            ))}
        </div>
        <div className='display-flex al-just-space-between'>
          <div className='text-ellipsis' title={user.email}>
            {user.email}
          </div>
          <div>|</div>
          <div className='text-ellipsis' title={user.phone}>
            {user.phone}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
