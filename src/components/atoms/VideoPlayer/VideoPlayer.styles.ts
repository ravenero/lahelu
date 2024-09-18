import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  video: {
    width: '100%'
  },
  videoContainer: {
    position: 'relative',
    backgroundColor: 'black',
    marginBottom: 10,
    flex: 1
  },
  overlayButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default styles;
