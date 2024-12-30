import React, { useState, useEffect } from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import "./ResponsiveIcon.css";

const ResponsiveIcon = () => {
  const [iconSize, setIconSize] = useState('large'); 

  useEffect(() => {
    const smallScreenQuery = window.matchMedia('(max-width: 480px)');
    const mediumScreenQuery = window.matchMedia('(max-width: 768px)');

    const updateIconSize = () => {
      if (smallScreenQuery.matches) {
        setIconSize('small');
      } else if (mediumScreenQuery.matches) {
        setIconSize('medium'); 
      } else {
        setIconSize('large'); 
      }
    };
    updateIconSize();

    smallScreenQuery.addEventListener('change', updateIconSize);
    mediumScreenQuery.addEventListener('change', updateIconSize);

    return () => {
      smallScreenQuery.removeEventListener('change', updateIconSize);
      mediumScreenQuery.removeEventListener('change', updateIconSize);
    };
  }, []);

  return <LocationOnOutlinedIcon fontSize={iconSize} className="icon-color" />;
};

export default ResponsiveIcon;
