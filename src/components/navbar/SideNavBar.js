import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SideNavbar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoImageContainer}>
          <Image
            source={require('../../images/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <View style={styles.closeButtonContainer}>
            <Image
              source={require('../../images/close.png')}
              style={styles.closeButton}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.lineContainer}>
        <Image
          source={require('../../images/line.png')}
          style={styles.lineButton}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} >
      <View style={styles.bodyContainer}>
        <View style={styles.bodyImageContainer}>
          <Image
            source={require('../../images/home.png')}
            style={styles.bodyImage}
          />
        </View>
        <View style={styles.bodyTextContainer}>
          <Text style={styles.bodyText}>Home</Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyBookings')} >
      <View style={styles.bodyContainer}>
        <View style={styles.bodyImageContainer}>
          <Image
            source={require('../../images/bookings.png')}
            style={styles.bodyImage}
          />
        </View>
        <View style={styles.bodyTextContainer}>
          <Text style={styles.bodyText}>My Bookings</Text>
        </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyWalletPage')} >
      <View style={styles.bodyContainer}>
        <View style={styles.bodyImageContainer}>
          <Image
            source={require('../../images/wallet.png')}
            style={styles.bodyImage}
          />
        </View>
        <View style={styles.bodyTextContainer}>
          <Text style={styles.bodyText}>My Wallet</Text>
        </View>
      </View>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <View style={styles.bodyImageContainer}>
          <Image
            source={require('../../images/logout.png')}
            style={styles.bodyImage}
          />
        </View>
        <View style={styles.bodyTextContainer}>
          <Text style={styles.bodyText}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C0259',
  },
  headerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: '#4C0259',
    justifyContent: 'center',
    width: '100%',
  },
  logoImageContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'start',
  },
  closeButtonContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  logoImage: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  closeButton: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  lineContainer: {
    width: '100%',
  },
  lineButton: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  bodyContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  bodyImageContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  bodyImage: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  bodyTextContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'start',
  },
  bodyText: {
    fontSize: 20,
    color: '#ffffff',
  },
  footerContainer: {
    flex: 1,
    marginTop: "100%",
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'end',
    width: '100%',
    //backgroundColor: "#ffffff"
  },
});

export default SideNavbar;
