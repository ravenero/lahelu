import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconMenuProps {
  color?: string;
}

const IconMenu: React.FC<IconMenuProps> = ({ color = '#FFFFFF' }) => {
  return (
    <Svg fill={color} viewBox="0 0 24 24" height={24} width={24}>
      <Path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </Svg>
  );
};

export default IconMenu;