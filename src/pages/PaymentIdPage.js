import { StyleSheet, Text, View, ScrollView , Image} from 'react-native';
import * as React from 'react';
import { en, registerTranslation } from 'react-native-paper-dates';
import NavBar from '../components/navbar/NavBar';
registerTranslation('en', en);

export default function PaymentIdPage({ navigation }) {

  return (
    <View style={styles.container}>
    <ScrollView>
      <NavBar isLogged={true}/>
                      
      <View style={styles.miniContainer}>
        <Text style={{fontSize:30, fontWeight:'700', color:'#00305e'}}>Payment</Text>
        </View>
        <View style={styles.imageContainer}>
        <View style={styles.circle}>
        <Image source={require('../images/fingerprint.png')} style={{ width: 120, height: 120 }} />
        </View>
        </View>
        <View style={styles.textContainer}>
        <Text style={{fontSize:20, fontWeight:'500', color:'black'}}>Use Touch ID to </Text>
        <Text style={{fontSize:20, fontWeight:'500', color:'black'}}>authorize the payment</Text>
        </View>
          </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
    miniContainer: {
        alignItems: 'left',
        padding: 25,
      },
      textContainer: {
        alignItems: 'center',
        padding: 25,
      },
      imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 55,
      },
      circle: {
        flex:1,
        width: 220,
        height: 220,
        borderRadius: 120, 
        backgroundColor: '#00305e', 
        alignItems: 'center',
        justifyContent: 'center',
      },
});
