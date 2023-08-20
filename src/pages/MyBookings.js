import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar/NavBar";
import { Text, TouchableOpacity, View, Image, FlatList, SafeAreaView, ActivityIndicator } from "react-native";
import { PaperProvider, ThemeProvider, DefaultTheme } from "react-native-paper";
import customTheme from "../components/styles/theme";

// const data = [
//     {
//         "id": 5,
//         "userId": 4,
//         "shuttle_name": "Ares Prime",
//         "shuttle_type": "FTL",
//         "no_passengers": 2,
//         "_from": "New York",
//         "_to": "Mars Square",
//         "dep_date": "2023-08-22T05:30:00.000+00:00",
//         "return_date": "2023-10-05T05:30:00.000+00:00",
//         "journey_rate": 500000.0,
//         "total_price": 645000.0,
//         "services": [
//             "Foods & Refreshments",
//             "Wheel Chair Assistance"
//         ],
//         "passengers": [
//             {
//                 "id": 5,
//                 "name": "Nuwan",
//                 "surename": "Abeysekara",
//                 "dob": "1995-02-25T05:30:00.000+00:00",
//                 "nationality": "Sri Lankan",
//                 "doc_type": "Passport",
//                 "doc_no": "W111222",
//                 "email": "nuwan@gmail.com",
//                 "phone_no": "0798882221"
//             },
//             {
//                 "id": 6,
//                 "name": "Saman",
//                 "surename": "Aponsu",
//                 "dob": "1998-10-02T06:00:00.000+00:00",
//                 "nationality": "Sri Lankan",
//                 "doc_type": "Passport",
//                 "doc_no": "W485369",
//                 "email": "aponsu@gmail.com",
//                 "phone_no": "0785556664"
//             }
//         ]
//     }
// ]


export default function MyBookings({ navigation }) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(data);

    const [isPending, setPending] = useState(true)
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    const today = new Date();

    const tripsPending = [];
    const tripsUpcoming = [];

    useEffect(() => {
        getSpaceShuttleData();
    }, []);

    async function getSpaceShuttleData() {
        const url = 'http://alienlines.eastus.cloudapp.azure.com:3000/api/booking';
        
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            const data = await response.json();
            setData(data)
            console.log ('data', data);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }


    data?.forEach(trip => {
        const depatureDate = new Date(trip.dep_date)

        if (depatureDate < today) {
            tripsUpcoming.push(trip)
        } else {
            tripsPending.push(trip)
        }
    })

    const renderTitle = () => {
        return (
            <View>
                <NavBar isLogged={true} />
                <View style={{ padding: 15 }}>
                    <Text style={{ color: '#4C0259', fontSize: 18, fontWeight: '700' }}>My Bookings</Text>
                </View>
            </View>
        )
    }

    const renderOptions = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => setPending(true)}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../images/wall-clock.png')} style={{ height: 20, width: 20 }} />
                            <Text style={{ fontSize: 15, fontWeight: '600', marginLeft: 10 }}>Pending</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setPending(false)}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../images/completed.png')} style={{ height: 20, width: 20 }} />
                            <Text style={{ fontSize: 15, fontWeight: '600', marginLeft: 10 }}>Completed</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 3, backgroundColor: isPending ? '#000000' : '#D9D9D9', marginTop: 10, width: '50%' }}></View>
                    <View style={{ height: 3, backgroundColor: isPending ? '#D9D9D9' : '#000000', marginTop: 10, width: '50%' }}></View>
                </View>
            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ borderRadius: 10, borderColor: '#D3D1D1', borderWidth: 1, marginTop: 10 }}>
                <View style={{ flexDirection: 'row-reverse', marginTop: 8, marginRight: 8 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: isPending ? '#00C9BF' : '#32BA7C', borderRadius: 10, borderWidth: 1, borderColor: '#00C9BF', width: isPending ? 60 : 70, justifyContent: 'center', padding: 2 }}>
                        <Image source={require('../images/badge.png')} style={{ height: 7, width: 7, marginTop: 2 }} />
                        <Text style={{ color: '#fff', fontSize: 7, marginLeft: 2 }}>{isPending ? 'Pending' : 'Completed'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{ paddingLeft: 10, paddingBottom: 10, paddingRight: 10, width: '30%' }}>
                        <Image source={item.image ? item.image : require('../images/noimage.png')} style={{ borderRadius: 10, height: 88, width: 88 }} />
                    </View>
                    <View style={{ width: '70%', marginLeft: 15, padding: 7 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 12, fontWeight: '700' }}>{item._from}</Text>
                            <Text style={{ fontSize: 12, fontWeight: '700', marginLeft: 2 }}>{'->'}</Text>
                            <Text style={{ fontSize: 12, fontWeight: '700', marginLeft: 2 }}>{item._to}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: '700', color: '#4C0259' }}>{item.shuttle_name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, fontWeight: '500' }}>{item.passengers.length + ' Adults'}</Text>
                            <Image source={require('../images/dot.png')} style={{ height: 4, width: 4, marginLeft: 10, marginTop: 5 }} />
                            <Text style={{ fontSize: 10, fontWeight: '500', marginLeft: 7 }}>{'$' + item.total_price}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, fontWeight: '500' }}>Depature</Text>
                            <Text style={{ fontSize: 10, fontWeight: '500', marginLeft: 3 }}>:</Text>
                            <Text style={{ fontSize: 10, fontWeight: '500', marginLeft: 3 }}>{new Date(item.dep_date).toLocaleDateString('en-US', options)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 10, fontWeight: '500' }}>Return    </Text>
                            <Text style={{ fontSize: 10, fontWeight: '500', marginLeft: 3 }}>:</Text>
                            <Text style={{ fontSize: 10, fontWeight: '500', marginLeft: 3 }}>{new Date(item.return_date).toLocaleDateString('en-US', options)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const renderBookingDetails = () => {
        return (
            <SafeAreaView style={{ flex: 1, alignSelf: 'center', width: '90%' }}>
                {(isPending && tripsPending.length == 0) || (!isPending && tripsUpcoming.length == 0) ? (
                    <View style={{ justifyContent: 'center', marginTop: '30%' }}>
                        <Image source={require('../images/noData.png')} style={{ height: 250, width: 250, alignSelf: 'center' }} />
                        <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 10, alignSelf: 'center' }}>No Data to Display</Text>
                    </View>
                ) : (
                    <FlatList
                        data={isPending ? tripsPending : tripsUpcoming}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                    />
                )}
            </SafeAreaView>
        )
    }

    // if (loading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size="large" color="#0000ff" />
    //         </View>
    //     );
    // }

    return (
        <PaperProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
                {renderTitle()}
                {renderOptions()}
                {renderBookingDetails()}
            </ThemeProvider>
        </PaperProvider>
    )
}