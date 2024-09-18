import React, { createContext } from 'react';
import { View, Text } from 'react-native';

import styles from './Posts.styles';
import usePosts from './usePosts';

let contextValue = {};
const PostsContext = createContext(contextValue);

const Posts: React.FC = () => {
  const { } = usePosts();
  contextValue = {};

  return (
    <PostsContext.Provider value={contextValue}>
      <View style={styles.container}>
        <Text style={styles.title}>Posts screens</Text>
      </View>
    </PostsContext.Provider>
  );
};

export default Posts;
