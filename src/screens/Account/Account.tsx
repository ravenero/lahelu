import React, { createContext } from 'react';
import { Text, View } from 'react-native';

import styles from './Account.styles';
import useAccount from './useAccount';

let contextValue = {};
const AccountContext = createContext(contextValue);

const Account: React.FC = () => {
  const { } = useAccount();
  contextValue = {};

  return (
    <AccountContext.Provider value={contextValue}>
      <View style={styles.container}>
        <Text style={styles.title}>Account screens</Text>
      </View>
    </AccountContext.Provider>
  );
};

export default Account;
