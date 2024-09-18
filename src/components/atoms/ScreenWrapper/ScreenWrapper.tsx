import React, { memo } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

import styles from './ScreenWrapper.styles';

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

export default memo(ScreenWrapper);
