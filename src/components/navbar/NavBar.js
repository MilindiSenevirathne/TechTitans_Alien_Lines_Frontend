import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function NavBar({ isLogged }) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      width: 360,
    },
    logoImageContainer: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'start',
    },
    profileImageContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    menuIconContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    authButtonContainer: {
      flex: 2,
      justifyContent: 'center',
    },
    logoImage: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      resizeMode: 'contain',
    },

    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'contain',
    },
    menuIcon: {
      width: 40,
      height: 50,
      justifyContent: 'center',
      resizeMode: 'contain',
    },
    authButton: {
      width: 100,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'contain',
    },
  });

  if (isLogged) {
    return (
      <View style={styles.container}>
        <View style={styles.logoImageContainer}>
          <Image
            source={require('../../images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../../images/profile.jpg')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.menuIconContainer}>
          <Image
            source={require('../../images/menu.png')}
            style={styles.menuIcon}
          />
        </View>
      </View>
    );
  }

  if (!isLogged) {
    return (
      <View style={styles.container}>
        <View style={styles.logoImageContainer}>
          <Image
            source={require('../../images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.authButtonContainer}>
          <Image
            source={require('../../images/authButton.png')}
            style={styles.authButton}
          />
        </View>
      </View>
    );
  }
}
