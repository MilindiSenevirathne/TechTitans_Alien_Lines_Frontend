import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TextField from './src/components/input/TextField';
import * as React from 'react';
import { PaperProvider, Searchbar } from 'react-native-paper';
import {
  DarkTheme,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
} from 'react-native-paper';
import DropdownField from './src/components/input/DropdownField';
import CalenderField from './src/components/input/CalendarField';
import { en, registerTranslation } from 'react-native-paper-dates';
import SearchField from './src/components/input/SearchField';
import NavBar from './src/components/navbar/NavBar';
registerTranslation('en', en);

export default function App() {
  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,

    colors: {
      ...DefaultTheme.colors,
      primary: '#4C0259',
      onPrimaryContainer: '#ffffff',
      onSecondaryContainer: '#ffffff',
      surfaceVariant: '#ffffff',
      onSurfaceVariant: '#000000cc',
      secondary: '#CA4255',
      fieldColor: '#D3D1D1',
      elevation: {
        level2: '#ffffff',
      },
    },
  };
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
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
          </ScrollView>
        </View>
      </ThemeProvider>
    </PaperProvider>
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
