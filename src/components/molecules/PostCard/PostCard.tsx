import React, { memo, useCallback } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

import { IC_comment, IC_down, IC_ellipis, IC_share, IC_up } from '@/assets';
import { numberFormat, timeAgo } from '@/utils/helpers';
import Colors from '@/utils/Colors';

import styles from './PostCard.styles';
import { DynamicImage, Gap, Hastag, VideoPlayer } from '../../atoms';

interface PostData {
  id: number;
  account: object;
  caption: string;
  media: string;
  type: string;
  hastags: string[];
  vote: number;
  comments: number;
  shares: number;
  createdAt: string;
};

interface AccountData {
  avatar?: string,
  username?: string
};

interface PostCardProps {
  data: PostData;
  isVisible: boolean,
  onLongPress?: () => void;
}

const defaultPostData: PostData = {
  id: 1,
  account: {
    avatar: '',
    username: '',
  },
  caption: 'Default Caption',
  media: 'Default Media',
  type: 'IMAGE',
  hastags: [],
  vote: 0,
  comments: 0,
  shares: 0,
  createdAt: ''
};

const PostCard: React.FC<PostCardProps> = memo(({ data = defaultPostData, isVisible }) => {
  const { account, caption, media, type, hastags, vote, comments, shares, createdAt } = data as PostData;
  const { avatar, username } = account as AccountData;

  const renderItem = useCallback(({ item }: { item: any }) => {
    return <Hastag title={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerAccount}>
        <View style={styles.wrapperAccount}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <Gap width={8} />
          <React.Fragment>
            <Text style={styles.text}>{username}</Text>
            <Gap width={4} />
            <Text style={styles.subtitle}>·</Text>
            <Gap width={4} />
            <Text style={styles.subtitle}>{timeAgo(createdAt)}</Text>
          </React.Fragment>
        </View>
        <TouchableOpacity>
          <IC_ellipis color={Colors.white} />
        </TouchableOpacity>
      </View>

      <Gap height={12} />

      <React.Fragment>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{caption}</Text>
        </View>
        <Gap height={12} />
        {type === 'IMAGE' ? <DynamicImage source={media} /> : <VideoPlayer source={media} isVisible={isVisible} />}
        <Gap height={12} />
        <View style={styles.containerHastag}>
          <Hastag title='Sawer' isHastag={false} />
          <Gap width={6} />
          <FlatList
            showsHorizontalScrollIndicator={false}
            overScrollMode="never"
            bounces={false}
            horizontal
            data={hastags}
            ItemSeparatorComponent={() => <Gap width={6} />}
            renderItem={renderItem}
          />
        </View>
      </React.Fragment>

      <Gap height={12} />

      <View style={styles.containerInfo}>
        <View style={styles.wrapperInfo}>
          <TouchableOpacity style={styles.contentInfo}>
            <View style={styles.wrapperContent}>
              <IC_up color={Colors.white} />
              <Gap width={7} />
              <Text style={styles.title}>{numberFormat(vote)}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.contentInfo, { borderLeftWidth: 1, borderColor: Colors.darkGray }]}>
            <View style={styles.wrapperContent}>
              <IC_down color={Colors.white} />
            </View>
          </TouchableOpacity>
        </View>

        <Gap width={8} />

        <TouchableOpacity style={styles.wrapperInfo}>
          <View style={styles.contentInfo}>
            <View style={styles.wrapperContent}>
              <IC_comment color={Colors.white} />
              <Gap width={8} />
              <Text style={styles.title}>{numberFormat(comments)}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.wrapperInfo, { marginLeft: 'auto' }]}>
          <View style={styles.contentInfo}>
            <View style={styles.wrapperContent}>
              <IC_share color={Colors.white} />
              <Gap width={8} />
              <Text style={styles.title}>{numberFormat(shares)}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default PostCard;