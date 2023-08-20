import React, {useState} from "react";
import NavBar from "../components/navbar/NavBar";
import {Text, StyleSheet, View, Image, FlatList, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import {PaperProvider, ThemeProvider, DefaultTheme} from "react-native-paper";
import customTheme from "../components/styles/theme";
import {CommonButton} from '../components/common/CommonButton';
import CalenderField from '../components/input/CalendarField';
import {TextInput, useTheme} from 'react-native-paper';
import {DatePickerInput} from 'react-native-paper-dates';
import moment from "moment";
import Loading from "../components/common/Loading";

export default function ProfileEdit({navigation, route}) {

    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState(route.params?.name);
    const [surename, setSurename] = useState(route.params?.surename);
    const [email, setEmail] = useState(route.params?.email);
    const [phone, setPhone] = useState(route.params?.phone_no);
    const [DOB, setDOB] = useState(route.params?.dob);
    const [address, setAddress] = useState(route.params?.address);
    const theme = useTheme();

    const onUpdateData=async () => {
        setIsLoading(true); // Start loading

        const baseURL = 'http://alienlines.eastus.cloudapp.azure.com:3000/api/user/4';

        const data = {
            name: name,
            surename: surename,
            email: email,
            phone_no:phone,
            dob: moment(DOB).format("YYYY-MM-DD"),
            address: address,
            img_url: route.params?.img_url
        }

        console.log(data)
        try {

            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify( data )
            }

            await fetch(baseURL, requestOptions)
            navigation.navigate('MyProfile')

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        } finally {
            setIsLoading(false); // Stop loading
        }
    }

    const renderProfileImage = () => {
        return (
            <View style={styles.container}>
                <Image source={require('../images/profileCover.png')} style={styles.content}/>
                <View>
                    <Image
                        source={require('../images/profile.png')}
                        style={styles.profileImage}
                    />
                </View>
                <View>
                    <Text style={styles.title}>{name} {surename}</Text>
                    <Text style={styles.subtitle}>{route.params?.address}</Text>
                </View>
            </View>
        )
    }

    const renderProfileDetails = () => {
        return (
            <View>
                <View style={styles.textfield}>
                    <TextInput
                        label='name'
                        value={name}
                        onChangeText={setName}
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
                        label='surename'
                        value={surename}
                        onChangeText={setSurename}
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
                        value={new Date(DOB)}
                        onChangeText={(dob) => {
                            console.log(dob)
                            setDOB(dob)}
                        }
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
                    <CommonButton lable={'Save'} commonBtnPress={onUpdateData}/>
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
                    <NavBar isLogged={true} />
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <ScrollView>
                            {renderProfileImage()}
                            {renderProfileDetails()}
                        </ScrollView>
                    )}
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
        marginTop: -80
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
    }
});