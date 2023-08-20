import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';

const LoadingComponent = () => {
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        }}>
            <Image source={require('../../images/loading01.gif')} style={{
                width: 200,
                height: 200,
            }} />
            {/* <ActivityIndicator size="large" color="#0000ff" /> */}
            {/* <Text style={{
                marginTop: 10,
                fontSize: 16,
            }}>Loading...</Text> */}
        </View>
    );
};

export default LoadingComponent;