import React  from 'react';
import PropTypes from 'prop-types';
import './NavigationItem.scss';

const NavigationItem = ({ image, title }) => {
  return (
    <div className='navigation-item'>
      <img className='navigation-item-image' src={image} alt={title+image}/>
      <span>{ title }</span>
    </div>
  );
};

NavigationItem.protoTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavigationItem;