import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
import { useTheme } from 'react-native-paper';
import { CommonButton } from '../components/common/CommonButton';

const LandingPage = ({ navigation }) => {
  const theme = useTheme();

  const RenderItem = ({ item }) => {
    if (item.key === 's1') {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            paddingBottom: 50,
          }}
        >
          <Image style={styles.introImageStyle} source={item.image} />
          <Text style={styles.introTextStyle}>{item.text}</Text>
          <Image
            source={require('../images/logo.png')}
            style={styles.logoImage}
          />
        </View>
      );
    }
    if (item.key === 's2') {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}
        >
          <Text style={styles.introTitleStyle}>{item.title}</Text>
          <Image style={styles.ImageStyle} source={item.image} />
          <Text style={styles.TextStyle}>{item.text}</Text>
          <View style={styles.ButtonContainer}>
          <CommonButton lable={'Login'} commonBtnPress={()=>navigation.navigate('Home')} backgroundColor='#ffffff' fontColor='#ffffff' borderColor='#ffffff'/>
          <CommonButton lable={'Get Started'} commonBtnPress={()=>navigation.navigate('Home')} backgroundColor='#ffffff' fontColor='#4C0259'/>
          </View>
        </View>
      );
    }
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        showSkipButton={false}
        showNextButton={false}
        showDoneButton={false}
        style={{backgroundColor:'#4C0259'}}
      />
    </>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  introImageStyle: {
    resizeMode: 'cover',
    height: 470,
    width: '100%'
  },
  logoImage: {
    width: 400,
    height: 66,
    justifyContent: 'center',
    resizeMode: 'contain',
    marginTop: 10,
  },
  introTextStyle: {
    marginTop: 40,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
  introTitleStyle: {
    marginTop: 120,
    marginHorizontal:20,
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ImageStyle: {
    width: "100%",
    marginTop: 40,
    height: 180,
    resizeMode: 'cover',
  },
  TextStyle: {
    marginTop: 80,
    fontSize: 16,
    color: 'white',
    marginHorizontal:20,
    textAlign: 'center',
  },
  ButtonContainer: {
    marginTop: 30,
    width: 300
  }
});

const slides = [
  {
    key: 's1',
    text: 'Welcome to',
    image: require('../images/landingBackground1.png'),
    backgroundColor: '#4C0259',
  },
  {
    key: 's2',
    title: 'The best assistant for your travel with Alien Lines',
    text: 'We’re happy to share our best tips for destinations where you can relax. But you find the nicest city trips as well!',
    image: require('../images/landingBackg2.png'),
    backgroundColor: '#4C0259',
  },
];
