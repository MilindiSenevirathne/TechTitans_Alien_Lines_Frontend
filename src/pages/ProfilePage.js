import React, {useState} from "react";
import NavBar from "../components/navbar/NavBar";
import {Text, StyleSheet, TouchableOpacity, View, Image, FlatList, SafeAreaView} from "react-native";
import {PaperProvider, ThemeProvider, DefaultTheme} from "react-native-paper";
import customTheme from "../components/styles/theme";
import {CommonButton} from '../components/common/CommonButton';

export default function MyProfile({navigation}) {
    const [userName, setUserName] = useState("Tanya Edward");
    const [email, setEmail] = useState("abc@gmail.com");
    const [phone, setPhone] = useState("09595");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("St claire");

    const handleEditImageClick = () => {
        navigation.navigate('ProfileEdit', {userName, email, phone, dob, address}); // Navigate to 'MyProfile' screen
    };

    const renderProfileImage = () => {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../images/profileCover.png')} style={styles.content}/>
                </View>
                <TouchableOpacity onPress={handleEditImageClick}>
                    <Image source={require('../images/pencil.png')} style={styles.editIcon}/>
                </TouchableOpacity>
                <View>
                    <Image
                        source={require('../images/profile.png')}
                        style={styles.profileImage}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Tanya Edwards</Text>
                    <Text style={styles.subtitle}>St Fransico, CA</Text>
                </View>
            </View>
        )
    }

    const renderProfileDetails = () => {
        return (
            <View style={styles.container}>
                <TableRow data1="UserName" data2="Tanya Edwards"/>
                <TableRow data1="Email" data2="Tanya@gmail.com"/>
                <TableRow data1="Phone" data2="0715588964"/>
                <TableRow data1="Date of Birth" data2="March 25, 2130"/>
                <TableRow data1="Address" data2="6391 Elgin St Celina"/>
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
                    {renderProfileImage()}
                    {renderProfileDetails()}
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
        marginBottom: 30
        // borderColor: '#000000',
        // borderBottomWidth: 2,
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
        marginTop: -130,
        marginBottom: 100,
        alignSelf: 'flex-end',
        marginRight: 30

    }
});