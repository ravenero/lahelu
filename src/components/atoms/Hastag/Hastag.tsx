import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles, { containerStyle } from './Hastag.styles';
import Gap from '../Gap';

import { IC_dollar, IC_hastag } from '@/assets';
import Colors from '@/utils/Colors';

interface HastagProps {
  title?: string;
  isHastag?: boolean;
}

const Hastag: React.FC<HastagProps> = ({ title = '', isHastag = true }) => {
  return (
    <TouchableOpacity style={containerStyle(isHastag)}>
      {isHastag ? <IC_hastag color={Colors.white} /> : <IC_dollar color={Colors.white} />}
      <Gap width={6} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Hastag;
