import React  from 'react';
import NavigationItemList from '../../components/navigation-item-list/NavigationItemList';
import UserInfo from '../../components/user/UserInfo';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <UserInfo />
      <NavigationItemList />
    </div>
  );
};

export default Navigation;