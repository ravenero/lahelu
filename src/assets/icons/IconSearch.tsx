import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconSearchProps {
  color?: string;
}

const IconSearch: React.FC<IconSearchProps> = ({ color = '#FFFFFF' }) => {
  return (
    <Svg fill={color} viewBox="0 0 24 24" height={24} width={24} >
      <Path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
    </Svg>
  );
};

export default IconSearch;