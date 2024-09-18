import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconEllipsisProps {
  color?: string;
}

const IconEllipsis: React.FC<IconEllipsisProps> = ({ color = '#FFFFFF' }) => {
  return (
    <Svg fill={color} viewBox="0 0 24 24" height={18} width={18}>
      <Path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </Svg>
  );
};

export default IconEllipsis;