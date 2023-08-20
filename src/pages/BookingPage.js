import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { CommonButton } from '../components/common/CommonButton';
import Timeline from 'react-native-timeline-flatlist'
import Loading from '../components/common/Loading';
import { getTimeFromDateString } from '../utils/timeUtils.js';
import { formatDate } from '../utils/dateUtils.js';
import { calculateTimeDifference } from '../utils/timeDifferUtils.js';
import NavBar from '../components/navbar/NavBar';

const BookingPage = ({ navigation }) => {

    const route = useRoute();
    const { shuttleType, passengerCount, departureDate, departureId, arrivalDate, arrivalId, from, to } = route.params;
    const [selectedSpaceship, setSelectedSpaceship] = useState(null);
    const [chooseRate, setChooseRate] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    // Sample spaceship data
    const [spaceshipData, setSpaceshipData] = useState([]);

    useEffect(() => {
        getSpaceShuttleData();
    }, []);


    const calculateMinPrice = (rates) => {
        if (rates.length === 0) {
            return 0;
        }
        const prices = rates.map(rate => rate.price);
        const minPrice = Math.min(...prices);
        return minPrice;
    };

    const selectPackage = () => {
        const selectedPackageItem = selectedSpaceship.spaceShuttleScheduleRates.find(
            (packageItem) => packageItem.name === selectedPackage
        );
        return selectedPackageItem;
    }

    const handleShuttleDetailsClick = async (spaceship) => {
        setSelectedSpaceship(spaceship);
        setChooseRate(false);
        setModalVisible(true);
        const newData = timeline(spaceship);
        // Simulate data fetching delay with a timeout
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setData(newData); // Update data
    };

    async function getSpaceShuttleData() {
        setIsLoading(true); // Start loading

        const baseURL = 'http://alienlines.eastus.cloudapp.azure.com:3000/api/space-shuttle/search';
        const queryParams = new URLSearchParams({
            shuttleType: shuttleType,
            passengerCount: passengerCount,
            departureDate: departureDate,
            departureId: departureId,
            arrivalDate: arrivalDate,
            arrivalId: arrivalId,
        });

        const url = `${baseURL}?${queryParams}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            const data = await response.json();
            setSpaceshipData(data.departureList);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        } finally {
            setIsLoading(false); // Stop loading
        }
    }

    const timeline = (spaceship) => {
        return [
            {
                time: getTimeFromDateString(spaceship.departureDateTime),
                title: spaceship.departureStationId.name,
                description: '',
                icon: require('../images/CircledThin.png'),
            },
            {
                time: calculateTimeDifference(spaceship.departureDateTime, spaceship.arrivalDateTime),
                title: spaceship.shuttleId.name,
                description: '',
                icon: require('../images/Spaceship.png'),
            },
            {
                time: getTimeFromDateString(spaceship.arrivalDateTime),
                title: spaceship.arrivalStationId.name,
                description: '',
                icon: require('../images/CircledThin.png'),
            },
        ];
    };

    const handleSelectPackage = () => {
        let rate = selectPackage();
        const nav = useNavigation();
        nav.navigate('PassengerDetails', { rate: rate, selectedSpaceship: selectedSpaceship });
    }

    return (
        <View style={{
            height: '100%',
        }} >
            <View style={{
                height: 100,
            }} >
                <NavBar isLogged={true} />
            </View>

            {isLoading ? (
                <Loading />
            ) : (
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
                                    <View style={{
                                        marginTop: 10
                                    }}>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            color: '#CA4255',
                                            marginLeft: 20,
                                        }}>{formatDate(selectedSpaceship.departureDateTime)}</Text>
                                        <Text style={{ marginBottom: -33 }}>
                                            <Timeline
                                                data={data}
                                                timeContainerStyle={{ minWidth: 100 }}
                                                innerCircle={'icon'}
                                                circleSize={20}
                                                circleColor='white'
                                                lineColor='black'
                                                titleStyle={{ marginTop: -10, fontSize: 15, fontWeight: 'bold' }}
                                            />
                                        </Text>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            color: '#CA4255',
                                            marginLeft: 20,
                                        }}>{formatDate(selectedSpaceship.arrivalDateTime)}</Text>

                                        <View style={{
                                            marginTop: 20,
                                        }}>
                                            <CommonButton lable={'Choose Rate'} commonBtnPress={() => setChooseRate(true)} />
                                        </View>
                                    </View>
                                )}
                            </View>
                        </View>
                    </Modal>

                </ScrollView >
            )}
        </View>
    );
};


export default BookingPage;
