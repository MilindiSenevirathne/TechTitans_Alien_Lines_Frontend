import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { DefaultTheme, Card, Text, Button } from "react-native-paper";
import { en, registerTranslation } from "react-native-paper-dates";
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
    <Text>Hi</Text>
  );
}


