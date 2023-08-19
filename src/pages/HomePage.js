import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TextField from '../components/input/TextField';
import * as React from 'react';
import { PaperProvider, Searchbar } from 'react-native-paper';
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
registerTranslation('en', en);

export default function HomePage({ navigation }) {
  return (
        <View style={styles.container}>
          <ScrollView>
            <NavBar isLogged={true}/>

            <Text style={styles.text}>Navbar before login</Text>
            <NavBar isLogged={false}/>

            <View style={styles.container}>
              <Text>Sample Text Input</Text>
              <StatusBar style="auto" />
              <View style={styles.textfield}>
                <TextField label="Email" placeholder="Enter Email" />
              </View>
              <View style={styles.textfield}>
                <TextField label="Email" placeholder="Enter Email" />
              </View>

              <Text>Sample Dropdown Input</Text>
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
                  ]}
                  label="Gender"
                />
              </View>
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
                  ]}
                  label="Gender"
                />
              </View>
              <Text>Sample Calendar Input</Text>
              <View style={styles.textfield}>
                <CalenderField label="Birthday" />
              </View>
              <View style={styles.textfield}>
                <CalenderField label="Birthday" />
              </View>

              <Text>Sample Search Bar</Text>
              <View style={styles.textfield}>
                <SearchField />
              </View>
              <View style={styles.textfield}>
                <SearchField />
              </View>
            </View>
            <CommonButton lable={'Press Here'} commonBtnPress={()=>navigation.navigate('ChooseServices')}/>
          </ScrollView>
        </View>
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
  textfield: {
    marginTop: 5,
    width: 300,
  },
});
