import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TextField from "./src/components/input/TextField";
import * as React from "react";
import { PaperProvider, Searchbar, Card } from "react-native-paper";
import {
  DarkTheme,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
} from "react-native-paper";
import DropdownField from "./src/components/input/DropdownField";
import CalenderField from "./src/components/input/CalendarField";
import { en, registerTranslation } from "react-native-paper-dates";
import SearchField from "./src/components/input/SearchField";
registerTranslation("en", en);

export default function App() {
  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,

    colors: {
      ...DefaultTheme.colors,
      primary: "#4C0259",
      onPrimaryContainer: "#ffffff",
      onSecondaryContainer: "#ffffff",
      surfaceVariant: "#ffffff",
      onSurfaceVariant: "#000000cc",
      secondary: "#CA4255",
      fieldColor: "#D3D1D1",
      elevation: {
        level2: "#ffffff",
      },
    },
  };
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <ScrollView>
          <StatusBar style="auto" />
            <Text>Choose Services</Text>
            <Card>
              <Text style={styles.paragraph}>
                React Native Card View for Android and IOS using
                "react-native-paper"
              </Text>
            </Card>
          </ScrollView>
        </View>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
});
