import React, { createContext } from 'react';
import { Text, View, } from 'react-native';

import styles from './Topics.styles';
import useTopics from './useTopics';

let contextValue = {};
const TopicsContext = createContext(contextValue);

const Topics: React.FC = () => {
  const { } = useTopics();
  contextValue = {};

  return (
    <TopicsContext.Provider value={contextValue}>
      <View style={styles.container}>
        <Text style={styles.title}>Topics screens</Text>
      </View>
    </TopicsContext.Provider>
  );
};

export default Topics;
