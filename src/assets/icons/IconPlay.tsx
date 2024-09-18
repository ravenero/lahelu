import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconBellProps {
  color?: string;
}

const IconBell: React.FC<IconBellProps> = ({ color = '#FFFFFF' }) => {
  return (
    <Svg fill={color} viewBox="0 0 24 24" height={35} width={35} >
      <Path d="M7 6v12l10-6z" />
    </Svg>
  );
};


export default IconBell;