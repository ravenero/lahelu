import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import styles from './Header.styles';
import { IC_menu, IC_search, LOGO } from '@/assets';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity>
          <IC_menu />
        </TouchableOpacity>
        <View style={styles.containerLogo}>
          <Image source={LOGO} style={styles.logo} />
        </View>
        <TouchableOpacity>
          <IC_search />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
