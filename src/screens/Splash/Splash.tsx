import React, { createContext } from 'react'
import { View, Image } from 'react-native'
import { LOGO_2 } from '@/assets';

import useSplash from './useSplash';
import styles from './Splash.styles';

let contextValue = {};
const SplashContext = createContext(contextValue);

const Splash: React.FC = () => {
  const { } = useSplash();
  contextValue = {};

  return (
    <SplashContext.Provider value={contextValue}>
      <View style={styles.container}>
        <Image source={LOGO_2} style={styles.logo} />
      </View>
    </SplashContext.Provider>
  )
}

export default Splash;