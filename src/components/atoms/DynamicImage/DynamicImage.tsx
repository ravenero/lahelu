import React, { memo, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, View } from 'react-native';

import styles from './DynamicImage.styles';
import Colors from '@/utils/Colors';

interface DynamicImageProps {
  source: string;
}

const DynamicImage: React.FC<DynamicImageProps> = ({ source = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const getImageHeight = useCallback(() => {
    Image.getSize(source, (width, height) => {
      const aspectRatio = height / width;
      setImageHeight(screenWidth * aspectRatio);
      setIsVisible(true);
    },
      (error) => {
        console.error('Error getting image size:', error);
      }
    );
  }, [source]);

  useEffect(() => {
    getImageHeight();
  }, [getImageHeight]);

  return (
    <View>
      {isVisible ? (
        <Image source={{ uri: source }} style={[styles.image, { height: imageHeight }]} resizeMethod='resize' />
      ) : (
        <ActivityIndicator size="large" color={Colors.blue} />
      )}
    </View>
  );
};

export default memo(DynamicImage);
