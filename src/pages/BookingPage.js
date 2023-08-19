import { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Use these hooks instead
import { useTheme, RadioButton } from 'react-native-paper';
import { CommonButton } from '../components/common/CommonButton';

const BookingPage = () => {

    const route = useRoute();
    const { from, to, date } = route.params;
    const [selectedSpaceship, setSelectedSpaceship] = useState(null);
    const [chooseRate, setChooseRate] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const getTimeFromDateString = (dateString) => {
        const dateObject = new Date(dateString);
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();

        // Convert hours and minutes to AM/PM format
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };

    const calculateMinPrice = (rates) => {
        if (rates.length === 0) {
            return 0; // Return 0 if there are no rates
        }

        const prices = rates.map(rate => rate.price);
        const minPrice = Math.min(...prices);

        return minPrice;
    };

    const handleShuttleDetailsClick = (spaceship) => {
        setSelectedSpaceship(spaceship);
        setModalVisible(true);
    };

    const handleSelectPackage = () => {
        showAlert(selectedPackage);
    }

    const showAlert = (value) => {
        Alert.alert(
            'Alert Title',
            `${value}`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel', // This makes the button appear differently (e.g., grayed out)
                },
                {
                    text: 'OK',
                    onPress: () => {
                        // Perform an action when OK is pressed
                        console.log('OK Pressed');
                    },
                },
            ],
            { cancelable: false } // Prevents dismissing the alert by tapping outside
        );
    };




    // Sample spaceship data
    const spaceshipData = [
        {
            id: 111,
            departureDateTime: "2023-08-20T00:00:00",
            arrivalDateTime: "2023-08-20T00:00:00",
            shuttleId: {
                id: "4",
                name: "Shuttle#1",
                shuttleType: "LPT",
                maxCapacity: 40,
                imageUrl: "sss"
            },
            departureStationId: {
                id: 22,
                name: "Solar",
                planet: "Mars"
            },
            arrivalStationId: {
                id: 11,
                name: "Aries",
                planet: "Saturn"
            },
            spaceShuttleScheduleRates: [
                {
                    id: 1,
                    name: "Basic",
                    price: 10000.0,
                    spaceShuttleScheduleId: 111
                },
                {
                    id: 2,
                    name: "Economic",
                    price: 8000.0,
                    spaceShuttleScheduleId: 111
                },
                {
                    id: 3,
                    name: "Business",
                    price: 40000.0,
                    spaceShuttleScheduleId: 111
                }
            ]
        },
        {
            id: 113,
            departureDateTime: "2023-08-20T00:10:00",
            arrivalDateTime: "2023-08-20T00:18:00",
            shuttleId: {
                id: "4",
                name: "Shuttle#1",
                shuttleType: "LPT",
                maxCapacity: 40,
                imageUrl: "sss"
            },
            departureStationId: {
                id: 22,
                name: "Solar",
                planet: "Mars"
            },
            arrivalStationId: {
                id: 11,
                name: "Aries",
                planet: "Saturn"
            },
            spaceShuttleScheduleRates: [
                {
                    id: 1,
                    name: "Basic",
                    price: 10000.0,
                    spaceShuttleScheduleId: 111
                },
                {
                    id: 2,
                    name: "Economic",
                    price: 20000.0,
                    spaceShuttleScheduleId: 111
                },
                {
                    id: 3,
                    name: "Business",
                    price: 40000.0,
                    spaceShuttleScheduleId: 111
                }
            ]
        },
    ];


    return (
        <ScrollView style={{
            paddingLeft: 25,
            paddingRight: 25,
            paddingTop: 10,
            marginTop: 20,
        }} >
            {/* header */}
            <View>
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', color: '#4C0259', fontSize: 17 }}> {from}  <Image source={require('../images/two-arrow.png')} style={{ width: 20, height: 20 }} />  {to} </Text>
            </View>


            {/* list */}
            {spaceshipData.map((spaceship) => (
                <View key={spaceship.id} style={{
                    borderWidth: 2,
                    borderColor: '#D3D1D1',
                    borderRadius: 50,
                    marginTop: 10,
                    padding: 25,
                }} >

                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginRight: 10,
                            }}>
                                <Image source={require('../images/Spaceship.png')} style={{ width: 20, height: 20 }} />
                            </View>

                            <View style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 8 }}> {spaceship.shuttleId.name} </Text>
                                <TouchableOpacity onPress={() => handleShuttleDetailsClick(spaceship)}>
                                    <Text style={{ fontWeight: 'bold', color: '#00C9BF', textDecorationLine: 'underline' }}> Shuttle Details </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 8 }}> from ${calculateMinPrice(spaceship.spaceShuttleScheduleRates)} </Text>
                            <Text style={{ fontWeight: 'bold' }}> {getTimeFromDateString(spaceship.departureDateTime)} </Text>
                        </View>

                    </View>
                </View>
            ))}

            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >

                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(217, 217, 217, 0.8)',
                    justifyContent: 'flex-end',
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 50,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        padding: 40,
                        paddingBottom: 20,
                        width: '100%',
                        zIndex: 1,
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, paddingTop: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: '700' }}>{chooseRate ? 'Choose Rate' : 'Shuttle Details'}</Text>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Image source={require('../images/Multiply.png')} style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                        </View>

                        {/* Content of the modal */}

                        {/* Choose Rate */}
                        <Text style={{ alignSelf: 'left', fontWeight: 'bold', color: '#4C0259', fontSize: 14 }}>{from} to {to}</Text>
                        {selectedSpaceship && chooseRate && (
                            <View>
                                <TouchableOpacity onPress={() => setChooseRate(false)} style={{
                                    backgroundColor: '#D3D1D1',
                                    width: 'fit-content',
                                    padding: 5,
                                    borderRadius: 50,
                                    marginTop: 10,
                                    marginBottom: 25,
                                    width: 150,
                                    alignItems: 'center',
                                }}>
                                    <Text>View Shuttle Details</Text>
                                </TouchableOpacity>
                                <View>
                                    <RadioButton.Group onValueChange={(value) => setSelectedPackage(value)} value={selectedPackage}>
                                        {selectedSpaceship.spaceShuttleScheduleRates.map((packageItem) => (
                                            <View key={packageItem.id} style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                backgroundColor: '#F4F3F3',
                                                borderRadius: 10,
                                                justifyContent: 'space-between',
                                                marginBottom: 9,
                                                paddingLeft: 10,
                                                paddingRight: 20,
                                            }}>
                                                <View style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                }}>
                                                    <View style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                    }}>
                                                        <RadioButton.Item value={packageItem.name} style={{ width: 50 }} />
                                                    </View>

                                                    <View style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                    }}>
                                                        <Text style={{ fontWeight: 'bold' }}>{packageItem.name}</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between',
                                                }}>
                                                    <Text>${packageItem.price}</Text>
                                                </View>
                                            </View>
                                        ))}
                                    </RadioButton.Group>
                                </View>
                                <View style={{
                                    marginTop: 20,
                                }}>
                                    <CommonButton lable={'Select'} commonBtnPress={() => handleSelectPackage()} />
                                </View>
                            </View>
                        )}

                        {/* Shuttle Details */}
                        {selectedSpaceship && !chooseRate && (
                            <View style={{ marginTop: 10 }}>
                                <Text>Shuttle details:</Text>
                                <TouchableOpacity onPress={() => setChooseRate(true)} style={{
                                    backgroundColor: '#D3D1D1',
                                    width: 'fit-content',
                                    padding: 5,
                                    borderRadius: 50,
                                    marginTop: 10,
                                    marginBottom: 25,
                                    width: 150,
                                    alignItems: 'center',
                                }}>
                                    <Text>View Shuttle Details</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default BookingPage;
