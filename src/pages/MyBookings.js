import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import { Text, TouchableOpacity, View, Image, FlatList, SafeAreaView } from "react-native";
import { PaperProvider, ThemeProvider, DefaultTheme } from "react-native-paper";
import customTheme from "../components/styles/theme";

const data = [
    {
        id: 1,
        from: 'Los Angeles',
        to: 'Ares Prime',
        flight: '2346J',
        passenger: '1 Adult',
        price: '$645,000',
        depature: '13 Aug 2160',
        return: '28 Aug 2160',
        image: require('../images/place1.png')
    },
    {
        id: 2,
        from: 'Los Angeles',
        to: 'Jovian Skypoint',
        flight: '8325B',
        passenger: '2 Adults',
        price: '$2,102,000',
        depature: '05 Oct 2160',
        return: '22 Oct 2160',
        image: require('../images/place2.png')
    }
]

const data2 = [
    {
        id: 1,
        from: 'Los Angeles',
        to: 'Ares Prime',
        flight: '2346J',
        passenger: '1 Adult',
        price: '$645,000',
        depature: '13 Aug 2160',
        return: '28 Aug 2160',
        image: require('../images/place3.jpg')
    }
]

export default function MyBookings({ navigation }) {

    const [isPending, setPending] = useState(true)

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
            <View style={{ borderRadius: 10, borderColor: '#D3D1D1', borderWidth:1, marginTop:10 }}>
                <View style={{flexDirection:'row-reverse', marginTop:8, marginRight:8}}>
                    <View style={{flexDirection:'row', backgroundColor:isPending ? '#00C9BF': '#32BA7C', borderRadius:10, borderWidth:1, borderColor:'#00C9BF', width: isPending ? 60 : 70, justifyContent:'center', padding:2}}>
                        <Image source={require('../images/badge.png')} style={{height:7, width:7, marginTop:2}}/>
                        <Text style={{color:'#fff', fontSize:7, marginLeft:2}}>{isPending ? 'Pending' : 'Completed'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <View style={{paddingLeft:10, paddingBottom:10, paddingRight:10, width:'30%'}}>
                    <Image source={item.image} style={{ borderRadius: 10, height: 88, width: 88 }} />
                    </View>
                    <View style={{width:'70%', marginLeft:15,padding:7}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:12, fontWeight:'700'}}>{item.from}</Text>
                            <Text style={{fontSize:12, fontWeight:'700', marginLeft:2}}>{'->'}</Text>
                            <Text style={{fontSize:12, fontWeight:'700', marginLeft:2}}>{item.to}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:12, fontWeight:'700',color:'#4C0259'}}>{item.flight}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:10, fontWeight:'500'}}>{item.passenger}</Text>
                            <Image source={require('../images/dot.png')} style={{height:4, width:4, marginLeft:10, marginTop:5}}/>
                            <Text style={{fontSize:10, fontWeight:'500', marginLeft:7}}>{item.price}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:10, fontWeight:'500'}}>Depature</Text>
                            <Text style={{fontSize:10, fontWeight:'500', marginLeft:3}}>:</Text>
                            <Text style={{fontSize:10, fontWeight:'500', marginLeft:3}}>{item.depature}</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:10, fontWeight:'500'}}>Return    </Text>
                            <Text style={{fontSize:10, fontWeight:'500', marginLeft:3}}>:</Text>
                            <Text style={{fontSize:10, fontWeight:'500', marginLeft:3}}>{item.return}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const renderBookingDetails = () => {
        return (
            <SafeAreaView style={{flex:1, alignSelf:'center', width:'90%'}}>
                <FlatList
                data={isPending ? data : data2}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
            />
            </SafeAreaView>
        )
    }

    return (
        <PaperProvider theme={customTheme}>
            <ThemeProvider theme={customTheme}>
                <SafeAreaView style={{flex: 1}}>
                {renderTitle()}
                {renderOptions()}
                {renderBookingDetails()}
                </SafeAreaView>
            </ThemeProvider>
        </PaperProvider>
    )
}