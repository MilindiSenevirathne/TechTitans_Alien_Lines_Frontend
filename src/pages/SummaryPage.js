import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Platform, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { formatDate } from '../utils/dateUtils.js';
import { calculateTimeDifference } from '../utils/timeDifferUtils.js';
import { CommonButton } from '../components/common/CommonButton';
import Loading from '../components/common/Loading';
import { useNavigation } from '@react-navigation/native';
import NavBar from '../components/navbar/NavBar';

const SummaryPage = () => {
  const route = useRoute();
  const nav = useNavigation();
  const { summary, selectedPackage } = route.params;

  const [isLoading, setIsLoading] = useState(true);
  const [grossAmount, setgrossAmount] = useState(0);
  const [totalTaxes, settotalTaxes] = useState(0);
  const [promotions, setpromotions] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {
    if (summary && selectedPackage) {
      setIsLoading(false);
    }
  }, [summary, selectedPackage]);

  const formattedNumber = (number) => {
    return number.toLocaleString();
  };

  const setData = () => {
    setIsLoading(true);
    if (summary) {
      let grossAmount = 0;

      if (selectedPackage) {
        grossAmount += selectedPackage.price;
      }

      if (summary.spaceShuttleScheduleServices) {
        summary.spaceShuttleScheduleServices.forEach((service) => {
          grossAmount += service.price;
        });
      }

      setgrossAmount(grossAmount);
      settotalTaxes(grossAmount * 0.1);
      setTotal((grossAmount * 1.1) - promotions);
    }
    setIsLoading(false);
  }


  const handleContinue = () => {
    console.log('Continue clicked');
  }

  const handlepromocode = () => {
    console.log('promo code clicked');
  }

  const handleChange = () => {
    nav.navigate('BookingPage', { shuttleType: summary.shuttleId.shuttleType, passengerCount: 1, departureDate: summary.departureDateTime, departureId: summary.departureStationId.id, arrivalDate: summary, arrivalId: summary.arrivalStationId.id, from: summary.departureStationId.name, to: summary.arrivalStationId.name });
  }
  return (
    <ScrollView style={{
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
              <Text style={{ alignSelf: 'left', fontWeight: 'bold', color: '#4C0259', fontSize: 18 }}> {summary.departureStationId.name}  <Image source={require('../images/right-arrow.png')} style={{ width: 31, height: 18 }} />  {summary.arrivalStationId.name} </Text>
              <Text style={{ alignSelf: 'right', fontWeight: 'bold', color: '#8B8B8B', fontSize: 12 }}>{calculateTimeDifference(summary.departureDateTime, summary.arrivalDateTime)}</Text>
            </View>
            <Text style={{ color: '#263238' }}> {formatDate(summary.departureDateTime)}</Text>
            <View style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 15,
            }}>
              <TouchableOpacity onPress={() => handleChange()} style={{
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
            <TouchableOpacity onPress={() => handlepromocode()} style={{
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
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 20,
            marginTop: 20,
          }}>
            Your Booking
          </Text>
          <View style={{
            marginBottom: 15,
          }}>
            <View style={styles.flexbox}>
              <Text style={styles.text}>Spaceship fees </Text>
              <Text style={styles.text}>${formattedNumber(selectedPackage.price)}</Text>
            </View>
            {summary.spaceShuttleScheduleServices && summary.spaceShuttleScheduleServices.length > 0 && (
              summary.spaceShuttleScheduleServices.map((service) => (
                <View key={service.id} style={styles.flexbox}>
                  <Text style={styles.text}>{service.name}</Text>
                  <Text style={styles.text}>${formattedNumber(service.price)}</Text>
                </View>
              ))
            )}
          </View>

          <View style={styles.line}></View>

          <View style={{
            marginTop: 10,
            marginBottom: 15,
          }}>
            <View style={styles.flexbox}>
              <Text style={styles.text}>Gross Amount</Text>
              <Text style={styles.text}>${formattedNumber(grossAmount)}</Text>
            </View>

            <View style={styles.flexbox}>
              <Text style={styles.text}>Total Taxes</Text>
              <Text style={styles.text}>${formattedNumber(totalTaxes)}</Text>
            </View>

            <View style={styles.flexbox}>
              <Text style={styles.text}>promotions</Text>
              <Text style={styles.text}>(${formattedNumber(promotions)})</Text>
            </View>
          </View>

          <View style={styles.line}></View>

          <View style={styles.flexbox}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${formattedNumber(total)}</Text>
          </View>

          <View style={styles.line}></View>
          <View style={styles.line}></View>

          <View style={{
            marginTop: 40,
          }}>
            <CommonButton lable={'Continue'} commonBtnPress={() => handleContinue()} />
          </View>
        </View>)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  line: {
    width: '40%',
    height: 1,
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  flexbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
  }
});
export default SummaryPage;
