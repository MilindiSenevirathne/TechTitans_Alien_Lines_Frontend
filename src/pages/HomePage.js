import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { en, registerTranslation } from 'react-native-paper-dates';
import { CommonButton } from '../components/common/CommonButton';
import CalenderField from '../components/input/CalendarField';
import DropdownField from '../components/input/DropdownField';
import SearchField from '../components/input/SearchField';
import TextField from '../components/input/TextField';
import NavBar from '../components/navbar/NavBar';
registerTranslation('en', en);

export default function HomePage({ navigation }) {

    const modalShow = React.useRef(null)
    //   for testing booking page
    const nav = useNavigation();

    const navigateToSpaceships = () => {
        nav.navigate('BookingPage', { shuttleType:'LPT', passengerCount: 3, departureDate:'2023-08-20', departureId:22, arrivalDate:'2023-08-20', arrivalId:11, from: 'Los Angeles, Earth', to:'Ares Prime, Mars' });
    };
    const navigateTosummary= () => {
        nav.navigate('SummaryPage', { summary:{
            "id": 111,
            "departureDateTime": "2023-08-20T00:00:00",
            "arrivalDateTime": "2024-09-20T00:00:00",
            "shuttleId": {
                "id": "4",
                "name": "Shuttle#1",
                "shuttleType": "LPT",
                "maxCapacity": 40,
                "imageUrl": "sss"
            },
            "departureStationId": {
                "id": 22,
                "name": "Solar",
                "planet": "Mars"
            },
            "arrivalStationId": {
                "id": 11,
                "name": "Aries",
                "planet": "Saturn"
            },
            "spaceShuttleScheduleRates": [
                {
                    "id": 1,
                    "name": "Basic",
                    "price": 10000.0,
                    "spaceShuttleScheduleId": 111
                },
                {
                    "id": 2,
                    "name": "Economic",
                    "price": 20000.0,
                    "spaceShuttleScheduleId": 111
                },
                {
                    "id": 3,
                    "name": "Business",
                    "price": 40000.0,
                    "spaceShuttleScheduleId": 111
                }
            ],
            "spaceShuttleScheduleServices": [
                {
                    "id": 2,
                    "name": "Personalised Foods",
                    "description": "Customised food options",
                    "price": 7000.0,
                    "spaceShuttleScheduleId": 111
                },
                {
                    "id": 1,
                    "name": "Extra Oxygen",
                    "description": "Provide extra oxygen",
                    "price": 5000.0,
                    "spaceShuttleScheduleId": 111
                }
            ]
        }});
    };
    //    for testing booking page
    return (
        <View style={styles.container}>
            <ScrollView>
                <NavBar isLogged={true} />

                <Text style={styles.text}>Navbar before login</Text>
                <NavBar isLogged={false} />

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
                <CommonButton lable={'Press Here'} commonBtnPress={() => navigation.navigate('ChooseServices')} />

                {/*for testing booking page  */}
                <Button title="Booking page" onPress={navigateToSpaceships} />
                <Button title="Summary page" onPress={navigateTosummary} />

                {/* <SuccessErrorModal isError={true} title={'Payment Successful'} message={'klnknd vcscjhcscvh'} visible={true}/> */}
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
        width: 360,
    },
    textfield: {
        marginTop: 5,
        width: 300,
    },
});