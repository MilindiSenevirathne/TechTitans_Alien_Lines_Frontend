import React from "react";
import NavBar from "../components/navbar/NavBar";
import { View } from "react-native";
import { PaperProvider, ThemeProvider, DefaultTheme } from "react-native-paper";
import customTheme from "../components/styles/theme";

export default function MyBookings({ navigation }) {

    return (
        <PaperProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
                <View>
                    <NavBar isLogged={true} />
                </View>
            </ThemeProvider>
        </PaperProvider>
    )
}