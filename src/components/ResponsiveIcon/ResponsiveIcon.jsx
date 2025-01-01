import React, { useState, useEffect } from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import "./ResponsiveIcon.css";
import { useMediaQuery } from '@material-ui/core';

const ResponsiveIcon = () => {
  // Using useMediaQuery to determine screen size
  const isSmallScreen = useMediaQuery('(max-width: 480px)');
  const isMediumScreen = useMediaQuery('(max-width: 768px)');

  // State to track the icon size
  const [iconSize, setIconSize] = useState('large');

  useEffect(() => {
    if (isSmallScreen) {
      setIconSize('small');
    } else if (isMediumScreen) {
      setIconSize('medium');
    } else {
      setIconSize('large');
    }
  }, [isSmallScreen, isMediumScreen]);

  return <LocationOnOutlinedIcon fontSize={iconSize} className="icon-color" />;
};

export default ResponsiveIcon;