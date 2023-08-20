import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { en, registerTranslation } from 'react-native-paper-dates';
import NavBar from '../components/navbar/NavBar';
registerTranslation('en', en);
import SuccessErrorModal from '../components/common/SuccessErrorModal'
import { set } from 'date-fns';

export default function PaymentIdPage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handlepayment = async () => {
    setModalVisible(true);
    console.log(modalVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <NavBar isLogged={true} />

        <View style={styles.miniContainer}>
          <Text style={{ fontSize: 30, fontWeight: '700', color: '#00305e' }}>Payment</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => handlepayment()} style={styles.circle}>
            <Image source={require('../images/fingerprint.png')} style={{ width: 120, height: 120 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 20, fontWeight: '500', color: 'black' }}>Use Touch ID to </Text>
          <Text style={{ fontSize: 20, fontWeight: '500', color: 'black' }}>authorize the payment</Text>
        </View>
      </ScrollView>
      {modalVisible && (
        <SuccessErrorModal
          isError={false}
          title="Payment Successfully"
          message="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
          visible={true}
        />
      )}
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
    flex: 1,
    width: 220,
    height: 220,
    borderRadius: 120,
    backgroundColor: '#00305e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
