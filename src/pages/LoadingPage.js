import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoadingPage = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Landing');
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Image source={require('../images/loadingBackground.png')} style={styles.backgroundImage} />
        <Image source={require('../images/loadingGif.gif')} style={styles.loadingGif} />
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  loadingGif: {
    width: 307,
    height: 417,
  },
});

export default LoadingPage;
