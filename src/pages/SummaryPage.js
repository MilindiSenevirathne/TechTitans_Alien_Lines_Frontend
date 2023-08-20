import React from 'react';
import { View, Text, TouchableOpacity, Platform, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { formatDate } from '../utils/dateUtils.js';
import { calculateTimeDifference } from '../utils/timeDifferUtils.js';
import { CommonButton } from '../components/common/CommonButton';

const SummaryPage = () => {
  const route = useRoute();
  const { summary } = route.params;

  const handleContinue = () => {
    console.log('Continue clicked');
  }

  return (
    <View style={{
      padding: 20,
      marginTop: 20,
    }}>
      <View style={[
        {
          backgroundColor: "white",
          borderRadius: 15,
          padding: 20,
        },
        Platform.OS === 'ios' && {
          shadowColor: 'rgba(0, 0, 0, 0.25)',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
        },
        Platform.OS === 'android' && {
          elevation: 5
        },
      ]}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <Text style={{ alignSelf: 'left', fontWeight: 'bold', color: '#4C0259', fontSize: 18}}> {summary.departureStationId.name}  <Image source={require('../images/right-arrow.png')} style={{ width: 31, height: 18 }} />  {summary.arrivalStationId.name} </Text>
          <Text style={{ alignSelf: 'right', fontWeight: 'bold', color: '#8B8B8B', fontSize: 12 }}>{calculateTimeDifference(summary.departureDateTime, summary.arrivalDateTime)}</Text>
        </View>
        <Text style={{ color: '#263238' }}> {formatDate(summary.departureDateTime)}</Text>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 15,
        }}>
          <TouchableOpacity onPress={() => handleContinue()} style={{
            backgroundColor: '#CA4255',
            borderRadius: 20,
            padding: 8,
            width: 130,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              fontSize: 15,
              fontWeight: '800',
              color: '#FFFFFF'
            }}> Change </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15,
      }}>
        <TouchableOpacity onPress={() => handleContinue()} style={{
          backgroundColor: '#D9D9D9',
          borderRadius: 10,
          padding: 8,
          width: 160,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 15,
            fontWeight: '800',
            color: '#7E7E7E'
          }}> + Add Promo Code </Text>
        </TouchableOpacity>
      </View>

      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      }}>
        Your Booking
      </Text>

      <View style={styles.flexbox}>
        <Text>Spaceship fees </Text>
        <Text>$500,000</Text>
      </View>

      <View style={styles.flexbox}>
        <Text>Food fees</Text>
        <Text>$20,000 </Text>
      </View>

      <View style={styles.flexbox}>
        <Text>Oxygen fees</Text>
        <Text>$100,000</Text>
      </View>

      <View style={styles.line}></View>

      <View style={styles.flexbox}>
        <Text>Gross Amount</Text>
        <Text>$500,000</Text>
      </View>

      <View style={styles.flexbox}>
        <Text>Total Taxes</Text>
        <Text>$20,000 </Text>
      </View>

      <View style={styles.flexbox}>
        <Text>Promotions</Text>
        <Text>($100,000)</Text>
      </View>

      <View style={styles.line}></View>

      <View style={styles.flexbox}>
        <Text>Total</Text>
        <Text>$100,000</Text>
      </View>

      <View style={styles.line}></View>
      <View style={styles.line}></View>

      <View style={{
        marginTop: 20,
      }}>
        <CommonButton lable={'Continue'} commonBtnPress={() => handleContinue()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    width: '40%',
    height: 1,
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  flexbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  }
});
export default SummaryPage;
