import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView,} from 'react-native';
import TextField from '../components/input/TextField';
import { PaperProvider, Searchbar, Button } from 'react-native-paper';
import {
  DefaultTheme,
  Provider,
  ThemeProvider,
} from 'react-native-paper';
import DropdownField from '../components/input/DropdownField';
import CalenderField from '../components/input/CalendarField';
import { en, registerTranslation } from 'react-native-paper-dates';
import SearchField from '../components/input/SearchField';
import NavBar from '../components/navbar/NavBar';
import { CommonButton } from '../components/common/CommonButton';
import customTheme from '../components/styles/theme';
import PhoneInput from 'react-native-phone-number-input';
registerTranslation('en', en);
import { Card } from 'react-native-paper';

export default function PassegerDetails({ navigation }) {
        const [phoneNumber, setPhoneNumber] = useState('');
        const nationalityOptions = [
        {
            label: 'Afghanistan',
            value: 'af',
        },
        {
            label: 'Argentina',
            value: 'ar',
        },
        {
            label: 'Australia',
            value: 'au',
        },
        {
            label: 'Belgium',
            value: 'be',
        },
        {
            label: 'Brazil',
            value: 'br',
        },
        {
            label: 'Canada',
            value: 'ca',
        },
        {
            label: 'Chile',
            value: 'cl',
        },
        {
            label: 'China',
            value: 'cn',
        },
        {
            label: 'Denmark',
            value: 'dk',
        },
        {
            label: 'Egypt',
            value: 'eg',
        },
        {
            label: 'France',
            value: 'fr',
        },
        {
            label: 'Germany',
            value: 'de',
        },
        {
            label: 'Greece',
            value: 'gr',
        },
        {
            label: 'Honduras',
            value: 'hn',
        },
        {
            label: 'India',
            value: 'in',
        },
        {
            label: 'Italy',
            value: 'it',
        },
        {
            label: 'Jamaica',
            value: 'jm',
        },
        {
            label: 'Japan',
            value: 'jp',
        },
        {
            label: 'Kenya',
            value: 'ke',
        },
        {
            label: 'Lebanon',
            value: 'lb',
        },
        {
            label: 'Malaysia',
            value: 'my',
        },
        {
            label: 'Mexico',
            value: 'mx',
        },
        {
            label: 'Netherlands',
            value: 'nl',
        },
        {
            label: 'Nigeria',
            value: 'ng',
        },
        {
            label: 'Russia',
            value: 'ru',
        },
        {
            label: 'South Korea',
            value: 'kr',
        },
        {
            label: 'Turkey',
            value: 'tr',
        },
        {
            label: 'United Kingdom',
            value: 'uk',
        },
        {
            label: 'United States',
            value: 'us',
        },
        {
            label: 'Zambia',
            value: 'zm',
        },
        ];


  return (
      <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
    <ScrollView>
      <NavBar isLogged={true}/>

      <Card style={styles.card}>
        <View style={styles.miniContainer}>
        <View style={styles.textContainer}>
        <Text style={{fontSize:20, fontWeight:'800'}}>Adult</Text>
        </View>

        <StatusBar style="auto" />
        <View style={styles.textfield}>
        <DropdownField
           list={[
            {
              label: 'Male',
              value: 'male',
            },
            {
              label: 'Female',
              value: 'female',
            },
            {
              label: 'Other',
              value: 'other',
            },
          ]}
          label="Gender"
        />
        </View>

        <View style={styles.textfield}>
          <TextField label="Name" placeholder="Enter Name" />
        </View>
        <View style={styles.textfield}>
          <TextField label="Surname" placeholder="Enter Surname" />
        </View>

        <View style={styles.textfield}>
          <CalenderField label="Date of Birth" />
        </View>

        <View style={styles.textfield}>
        <DropdownField
          list={nationalityOptions}
          label="Nationality"
        />
        </View>

        <View style={styles.textfield}>
        <DropdownField
           list={[
            {
              label: 'Passport',
              value: 'passport',
            },
            {
              label: 'National ID',
              value: 'nic',
            },
          ]}
          label="Document Type"
        />
        </View>

        <View style={styles.textfield}>
          <TextField label="Document Number" placeholder="Document Number" />
        </View>

      </View>
      </Card>

      <Card style={styles.card}>
      <View style={styles.miniContainer}>
      <View style={styles.textContainer}>
      <Text style={{fontSize:20, fontWeight:'800', marginBottom:10}}>Contact Details</Text>
      <Text style={{fontSize:14, fontWeight:'400'}}>We will send a ticket to this email.</Text>
      <Text style={{fontSize:14, fontWeight:'400'}}>Phone number is required for communication in case of changes</Text>
      </View>

      <View style={styles.textfield}>
          <TextField label="Email" placeholder="Email" />
        </View>

        <PhoneInput
            defaultValue={phoneNumber}
            defaultCode="US"
            layout="first"
            autoFocus
            containerStyle={styles.phoneInput}
            onChangeFormattedText={(text) => {
                setPhoneNumber(text);
              }}
          />

        </View>
        </Card>
        <View style={styles.bottomContainer}>
        <View style={styles.leftButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
          <View >
            <Text style={{fontSize:10, fontWeight:'500', marginBottom:10}}>Total</Text>
            <Text style={{fontSize:12, fontWeight:'500', marginBottom:10}}>$645000</Text>
          </View>
        </TouchableOpacity>

        </View>
        <View style={styles.rightButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
          <View >
            <Text style={styles.buttonTitle}>Continue</Text>
          </View>
        </TouchableOpacity>

              </View>

      </View>

    </ScrollView>
  </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        width: 360,
      },
  miniContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    borderRadius: 40,
    width: 360,
    paddingBottom: 40,
  },
  bottomContainer:{
    backgroundColor: '#4c0259',
    marginTop: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,

  },
  inputContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textfield: {
    marginTop: 25,
    width: 300,
  },
  phoneInput: {
    marginTop: 25,
    width: 300,
    height: 60,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: '#D3D1D1',
  },
  card: {
    padding: 15,
    paddingTop: 25,
    elevation: 10,
    borderRadius: 40,
    borderColor: '#D3D1D1',
    width: 360,
  },
  textContainer: {
    alignItems: 'flex-start',
    padding: 17,
  },
  leftButtonContainer: {
    flexDirection: 'row',
    backgroundColor:'#fff',
    width: '40%',
    borderRadius: 5,
  },
  rightButtonContainer: {
    flexDirection: 'row',
    backgroundColor:'#fff',
    width: '40%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    width: '100%',
    padding: 10,
  },
  inputButton: {
    backgroundColor: 'red',
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#D3D1D1',
    padding: 5,

  },
});
