import React, { createContext } from 'react';
import { Text, View } from 'react-native';

import styles from './Notifications.styles';
import useNotifications from './useNotifications';

let contextValue = {};
const NotificationsContext = createContext(contextValue);

const Notifications = () => {
  const { } = useNotifications();
  contextValue = {};

  return (
    <NotificationsContext.Provider value={contextValue}>
      <View style={styles.container}>
        <Text style={styles.title}>Notifications screens</Text>
      </View>
    </NotificationsContext.Provider>
  );
};

export default Notifications;
