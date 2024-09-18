import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconCommentProps {
  color?: string;
}

const IconComment: React.FC<IconCommentProps> = ({ color = '#FFFFFF' }) => {
  return (
    <Svg fill={color} viewBox="0 0 24 24" height={16} width={16}>
      <Path d="M7 7h10v2H7zm0 4h7v2H7z" />
      <Path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z" />
    </Svg>
  );
};

export default IconComment;