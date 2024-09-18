import React, { useRef, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { ResizeMode, Video } from 'expo-av';

import styles from './VideoPlayer.styles';

import { IC_play } from '@/assets';
import Colors from '@/utils/Colors';

interface VideoPlayerProps {
  source: string;
  isVisible: boolean;
}

const screenWidth = Dimensions.get('window').width;

const VideoPlayer: React.FC<VideoPlayerProps> = ({ source, isVisible }) => {
  const videoRef = useRef<Video | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(isVisible);
  const [videoHeight, setVideoHeight] = useState(0);

  const onReadyForDisplay = ({ naturalSize: { width, height } }: { naturalSize: { width: number; height: number } }) => {
    if (videoRef?.current) {
      const aspectRatio = height / width;
      setVideoHeight(screenWidth * aspectRatio);
      setIsReady(true);
    }
  };

  useEffect(() => {
    const playOrPauseVideo = async () => {
      if (videoRef?.current) {
        if (isVisible) {
          try {
            setIsPlaying(true);
            // await videoRef.current.playAsync();
          } catch (error) {
            console.log('Error playing video:', error);
          }
        } else {
          try {
            setIsPlaying(false);
            // await videoRef.current.pauseAsync();
          } catch (error) {
            console.log('Error pausing video:', error);
          }
        }
      } else {
        console.log('videoRef is undefined');
      }
    };

    playOrPauseVideo();
  }, [isVisible]);


  const togglePlayPause = async () => {
    if (videoRef?.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying);
    } else {
      console.log('videoRef.current is undefined');
    }
  };

  return (
    <TouchableOpacity style={[styles.videoContainer, { width: '100%', height: videoHeight || 400 }]} activeOpacity={1} onPress={togglePlayPause}>
      <Video
        ref={videoRef}
        source={{ uri: source }}
        isMuted={true}
        shouldPlay={isVisible}
        style={StyleSheet.absoluteFillObject}
        isLooping
        onError={(error) => console.log(error)}
        usePoster={true}
        onReadyForDisplay={onReadyForDisplay}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
      />
      {!isPlaying && isReady && (
        <TouchableOpacity style={styles.overlayButton} onPress={togglePlayPause}>
          <IC_play color={Colors.white} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default VideoPlayer;
