import React, {useEffect, useState} from "react";
import NavBar from "../components/navbar/NavBar";
import {Text, StyleSheet, TouchableOpacity, View, Image, FlatList, SafeAreaView, ScrollView} from "react-native";
import {PaperProvider, ThemeProvider, DefaultTheme} from "react-native-paper";
import customTheme from "../components/styles/theme";
import {CommonButton} from '../components/common/CommonButton';
import Loading from "../components/common/Loading";
import moment from "moment";

export default function MyProfile({navigation, route}) {

    const [isLoading, setIsLoading] = useState(false);
    const [userDetails, setUserDetails] = useState({
        id: null,
        img_url: "",
        name: "",
        surename: "",
        dob: "",
        email: "",
        phone_no: "",
        address: ""
    })

    useEffect(() => {
        getProfileData();
    }, [])

    async function getProfileData() {
        setIsLoading(true); // Start loading

        const baseURL = 'http://alienlines.eastus.cloudapp.azure.com:3000/api/user/4';

        try {
            const response = await fetch(baseURL);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            const data = await response.json();
            setUserDetails(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        } finally {
            setIsLoading(false); // Stop loading
        }
    }

    const handleEditImageClick = () => {
        navigation.navigate('ProfileEdit', userDetails); // Navigate to 'MyProfile' screen
    };

    const renderProfileImage = () => {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={handleEditImageClick}  style={styles.editIcon}>
                    <Image source={require('../images/pencil.png')}/>
                </TouchableOpacity>
                <View>
                    <Image source={require('../images/profileCover.png')} style={styles.content}/>
                </View>
                <View>
                    <Image
                        source={require('../images/profile.png')}
                        style={styles.profileImage}
                    />
                </View>
                <View>
                    <Text style={styles.title}>{userDetails?.name} {userDetails?.surename}</Text>
                    <Text style={styles.subtitle}>{userDetails?.address}</Text>
                </View>
            </View>
        )
    }

    const renderProfileDetails = () => {
        return (
            <View style={styles.container}>
                <TableRow data1="UserName" data2={`${userDetails?.name} ${userDetails?.surename}`}/>
                <TableRow data1="Email" data2={userDetails?.email}/>
                <TableRow data1="Phone" data2={userDetails?.phone_no}/>
                <TableRow data1="Date of Birth" data2={moment(userDetails?.dob).format("YYYY-MM-DD")}/>
                <TableRow data1="Address" data2={userDetails?.address}/>
                <View style={{marginTop: 30}}>
                    <CommonButton lable={'Sign Out'} commonBtnPress={() => navigation.navigate('Home')}/>
                </View>
            </View>
        )
    }

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

const TableRow = ({data1, data2}) => {
    return (
        <View>
            <View style={styles.tableRow}>
                <View style={styles.column}>
                    <Text style={styles.cell}>{data1}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.cell}>{data2}</Text>
                </View>
            </View>
            <View style={styles.horizontalLine}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        marginBottom: 30,
        position: "relative"
    },
    content: {
        width: '100%',
        // marginTop: -20
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: -60
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30
    },
    column: {
        flex: 1,
        marginLeft: 35,

    },
    cell: {
        fontSize: 18,
        color: '#808080',
    },
    horizontalLine: {
        borderBottomWidth: 2,
        borderColor: '#C0C0C0',
        flex: 1,
        marginLeft: 20,
        marginRight: 20
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
    editIcon: {
        position: "absolute",
        zIndex: 1,
        top: 10,
        right: 10
    }
});