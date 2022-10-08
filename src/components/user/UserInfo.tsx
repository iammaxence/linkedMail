import React  from 'react';
import './UserInfo.scss';

const UserInfo = () => {
  return (
    <div className='user-container'>
      <div>logo</div>
      <div className='user-info'>
        <div>user name</div>
        <div>user email</div>
      </div>
      <div>logo-more</div>
    </div>
  );
};

export default UserInfo;