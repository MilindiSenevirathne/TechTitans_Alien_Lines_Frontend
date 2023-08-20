import React, {useState} from "react";
import NavBar from "../components/navbar/NavBar";
import {Text, StyleSheet, View, Image, FlatList, SafeAreaView} from "react-native";
import {PaperProvider, ThemeProvider, DefaultTheme} from "react-native-paper";
import customTheme from "../components/styles/theme";
import {CommonButton} from '../components/common/CommonButton';
import CalenderField from '../components/input/CalendarField';
import {TextInput, useTheme} from 'react-native-paper';
import {DatePickerInput} from 'react-native-paper-dates';

export default function ProfileEdit({navigation, route}) {
    const [userName, setUserName] = useState(route.params.userName);
    const [email, setEmail] = useState(route.params.email);
    const [phone, setPhone] = useState(route.params.phone);
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState(route.params.address);
    const theme = useTheme();

    const renderProfileImage = () => {
        return (
            <View style={styles.container}>
                <Image source={require('../images/profileCover.png')} style={styles.content}/>
                <Image
                    source={require('../images/profile.png')}
                    style={styles.profileImage}
                />
                <View>
                    <Text style={styles.title}>Tanya Edwards</Text>
                    <Text style={styles.subtitle}>St Fransico, CA</Text>
                </View>
            </View>
        )
    }

    const renderProfileDetails = () => {
        return (
            <View>
                <View style={styles.textfield}>
                    <TextInput
                        label='UserName'
                        value={userName}
                        onChangeText={setUserName}
                        selectionColor={theme.colors.fieldColor}
                        underlineColor='#ffffff'
                        activeUnderlineColor={theme.colors.primary}
                        style={{
                            backgroundColor: '#ffffff',
                            borderWidth: 2,
                            borderColor: theme.colors.fieldColor,
                            borderRadius: 5,
                            paddingHorizontal: 10,
                        }}
                    />
                </View>
                <View style={styles.textfield}>
                    <TextInput
                        label='Email'
                        value={email}
                        onChangeText={setEmail}
                        selectionColor={theme.colors.fieldColor}
                        underlineColor='#ffffff'
                        activeUnderlineColor={theme.colors.primary}
                        style={{
                            backgroundColor: '#ffffff',
                            borderWidth: 2,
                            borderColor: theme.colors.fieldColor,
                            borderRadius: 5,
                            paddingHorizontal: 10,
                        }}
                    />
                </View>
                <View style={styles.textfield}>
                    <TextInput
                        label='Contact Number'
                        value={phone}
                        onChangeText={setPhone}
                        selectionColor={theme.colors.fieldColor}
                        underlineColor='#ffffff'
                        activeUnderlineColor={theme.colors.primary}
                        style={{
                            backgroundColor: '#ffffff',
                            borderWidth: 2,
                            borderColor: theme.colors.fieldColor,
                            borderRadius: 5,
                            paddingHorizontal: 10,
                        }}
                    />
                </View>
                <View style={{
                    borderWidth: 2,
                    borderColor: theme.colors.fieldColor,
                    borderRadius: 5,
                    marginTop: 20,
                    width: '90%',
                    alignSelf: 'center'
                }}>
                    <DatePickerInput
                        locale="en"
                        label={"Date of Birth"}
                        value={dob}
                        onChangeText={(dob) => setDob(dob)}
                        inputMode="start"
                        style={{width: 200}}
                        mode="flat"
                        underlineColor='#ffffff'
                    />
                </View>
                <View style={styles.textfield}>
                    <TextInput
                        label='Address'
                        value={address}
                        onChangeText={setAddress}
                        selectionColor={theme.colors.fieldColor}
                        underlineColor='#ffffff'
                        activeUnderlineColor={theme.colors.primary}
                        style={{
                            backgroundColor: '#ffffff',
                            borderWidth: 2,
                            borderColor: theme.colors.fieldColor,
                            borderRadius: 5,
                            paddingHorizontal: 10,
                        }}
                    />
                </View>
                <View style={{marginTop: 30}}>
                    <CommonButton lable={'Save'} commonBtnPress={() => navigation.navigate('MyProfile')}/>
                </View>
            </View>
        )
    }

    const EditInput = ({label, value, setValue}) => {
        return (
            <View style={styles.textfield}>
                <TextInput
                    label={label}
                    value={value}
                    onChangeText={setValue}
                    selectionColor={theme.colors.fieldColor}
                    underlineColor='#ffffff'
                    activeUnderlineColor={theme.colors.primary}
                    style={{
                        backgroundColor: '#ffffff',
                        borderWidth: 2,
                        borderColor: theme.colors.fieldColor,
                        borderRadius: 5,
                        paddingHorizontal: 10,
                    }}
                />
            </View>
        );
    };

    return (
        <PaperProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
                <SafeAreaView style={{flex: 1}}>
                    {renderProfileImage()}
                    {renderProfileDetails()}
                </SafeAreaView>
            </ThemeProvider>
        </PaperProvider>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        marginBottom: 30
    },
    content: {
        width: '100%',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: -60
    },
    title: {
        fontSize: 22,
        color: '#808080',
        paddingLeft: 10,
        alignSelf: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#808080',
        paddingLeft: 10,
        alignSelf: 'center'
    },
    textfield: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center'
    },
});