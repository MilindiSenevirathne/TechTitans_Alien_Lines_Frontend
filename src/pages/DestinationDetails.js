import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import { Text, TouchableOpacity, View, Image, FlatList, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { PaperProvider, ThemeProvider, DefaultTheme } from "react-native-paper";
import customTheme from "../components/styles/theme";
import {useEffect} from "react";
import Loading from "../components/common/Loading";

const data = {
    id: 1,
    name: 'Ares Prime',
    planet: 'Mars',
    destinationImages: [
        { id: 1, imageUrl: require('../images/place1.png') },
        { id: 2, imageUrl: require('../images/place2.png') },
    ],
    destinationFeatures: [
        { id: 1, feature_name: "Climate", feature_description: "On Solar City, the climate varies across its regions, adding a unique charm to each culture. Lumoria's \"Luminar Shifts\" paint the sky with magical hues during gatherings. The Desert of Mirages showcases arid beauty, shaped by nomadic Sandstriders. Aurorium, by the Crystal Peaks, enjoys temperate weather that fuels the inventive spirit of " },
        { id: 1, feature_name: "Culture", feature_description: "Solar City is a wondrous realm where Lumoria's annual Festival of the Floating Lanterns lights up the night sky, celebrating the harmonious fusion of magic and technology. Meanwhile, the Eldra tribe in the heart of the Verdant Forest shares ancient wisdom during the captivating Moonlit Ritual. Diverse cultures, from the inventors of Aurorium" },
    ]
}


export default function DestinationDetails({ navigation }) {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        id: null,
        name: '',
        planet: '',
        destinationImages: [],
        destinationFeatures: []
    });
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        getDestinationData();
    }, [])


    async function getDestinationData() {
        setIsLoading(true); // Start loading

        const baseURL = 'http://alienlines.eastus.cloudapp.azure.com:3000/api/destination/1';

        try {
            const response = await fetch(baseURL);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            const data = await response.json();
            console.log(data)
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        } finally {
            setIsLoading(false); // Stop loading
        }
    }

    const renderTitle = () => {
        return (
            <View>
                <NavBar isLogged={true} />
            </View>
        )
    }

    const renderBookingDetails = () => {
        return (
            <SafeAreaView style={{ flex: 1, alignSelf: 'center', width: '100%' }}>

                    
                        <View style={{ height: '50%', shadowColor: '#162438', shadowOffset: { width: 0, height: 15 }, shadowOpacity: 0.9, shadowRadius: 20 }}>
                            <Image source={require('../images/place2.png')} style={{ borderBottomLeftRadius: 40, borderBottomRightRadius: 40, height: '100%', width: '100%' }} />
                        </View>
                    

                    <ScrollView>
                        <View style={{ padding: 30 }}>
                            <View><Text style={{ fontSize: 35, fontWeight: '700' }}>{data.name}</Text></View>
                            <View style={{ marginTop: 10, display: "flex", flexDirection: "row", alignItems: "center" }}>
                                {data?.destinationFeatures.map((item, index) => {
                                    return (
                                        <TouchableOpacity onPress={() => setSelected(index)}>
                                            <View style={selected === index ? styles.chipButtonSelected : styles.chipButton}><Text style={selected === index ? styles.chipButtonSelectedText : styles.chipButtonText}>{item.featureName}</Text></View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 17, lineHeight: 25 }}>{data?.destinationFeatures[selected]?.featureDescription}</Text>
                            </View>
                        </View>
                    </ScrollView>
                
            </SafeAreaView>
        )
    }

    return (
        <PaperProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
                {renderTitle()}
                {isLoading ? (
                    <Loading />
                ) : (
                    renderBookingDetails()
                )}
            </ThemeProvider>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    chipButton: {
        marginRight: 10,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 15,
        paddingLeft: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#D6D6D6",
        borderStyle: "solid"
    },
    chipButtonSelected: {
        marginRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 5,
        border: "none",
        backgroundColor: "#151414",
    },
    chipButtonText: {
        fontSize: 18,
    },
    chipButtonSelectedText: {
        fontSize: 20,
        color: "#FFFFFF",
    }
})