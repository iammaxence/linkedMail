import React  from 'react';
import NavigationItem from './navigation-item/NavigationItem';
import './NavigationItemList.scss';
import inboxLogo from '../../assets/inbox.png';

const NavigationItemList = () => {

  return (
    <div>
      <NavigationItem image={inboxLogo} title='inbox' />
    </div>
  );
};

export default NavigationItemList;