import React, { createContext, memo, useCallback, useMemo } from 'react';
import { FlatList, ActivityIndicator, View, Text } from 'react-native';

import styles from './Home.styles';
import useHome from './useHome';

import { Gap, PostCard } from '@/components';
import Colors from '@/utils/Colors';

let contextValue = {};
const HomeContext = createContext(contextValue);

const Home: React.FC = () => {
  const {
    data,
    viewableItems,
    loading,
    loadMore,
    viewabilityConfig,
    handleLoadMore,
    onViewableItemsChanged
  } = useHome();

  contextValue = useMemo(() => (
    {
      data, viewableItems,
      loading,
      loadMore,
      viewabilityConfig,
      handleLoadMore,
      onViewableItemsChanged,
    }
  ),
    [data, viewableItems, loading, loadMore, handleLoadMore, onViewableItemsChanged, viewabilityConfig]);

  const renderItem = useCallback(({ item, index }: { item: any, index: number }) => {
    const isVisible = viewableItems.some((viewableItem: any) => viewableItem.index === index);
    return <PostCard data={item} isVisible={isVisible} />;
  }, [viewableItems]);

  const renderEmptyComponent = useCallback(() => {
    if (loading) return null;
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Data tidak ada</Text>
      </View>
    );
  }, [loading]);

  const renderFooter = useCallback(() => {
    if (!loadMore) return null;
    return <ActivityIndicator size='large' color={Colors.blue} style={{ marginVertical: 20 }} />;
  }, [loadMore]);

  return (
    <HomeContext.Provider value={contextValue}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        style={styles.flatList}
        ItemSeparatorComponent={() => <Gap height={4} />}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        scrollEnabled={true}
        removeClippedSubviews={true}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmptyComponent}
        onEndReachedThreshold={0.1}
        onEndReached={handleLoadMore}
      />
    </HomeContext.Provider>
  );
};

export default memo(Home);
