import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import TextField from '../components/input/TextField';
import * as React from 'react';
import { PaperProvider, Searchbar } from 'react-native-paper';
import {
  DefaultTheme,
  Provider,
  ThemeProvider,
} from 'react-native-paper';
import DropdownField from '../components/input/DropdownField';
import CalenderField from '../components/input/CalendarField';
import { en, registerTranslation } from 'react-native-paper-dates';
import SearchField from '../components/input/SearchField';
import NavBar from '../components/navbar/NavBar';
import { CommonButton } from '../components/common/CommonButton';
import customTheme from '../components/styles/theme';
import SuccessErrorModal from '../components/common/SuccessErrorModal';
registerTranslation('en', en);
import { useNavigation } from '@react-navigation/native';

const travellingModes = [
  {value:'ftl', label:'FTL Drive'},
  {value:'ele', label:'Space Elevator'},
  {value:'cruise', label:'Space Cruise'},
  {value:'teleport', label:'Teleport'}
]

export default function HomePage({ navigation }) {

  const [isBookingDetailsClicked, setBookingDetailsClicked] = React.useState(true)
  const [isShuttleStatusClicked, setShuttleStatusClicked] = React.useState(false)

  const modalShow = React.useRef(null)
  //   for testing booking page
  const nav = useNavigation();

  const navigateToSpaceships = () => {
    nav.navigate('BookingPage', { from: 'Los Angeles, Earth', to: 'Ares Prime, Mars', date: '2023-08-19' });
  };
  
  const bookAShuttle = () => {
    return(
      <View style={{ borderRadius: 50, height: isBookingDetailsClicked ? 500 : 50, borderColor: '#D3D1D1', elevation: 5, borderWidth: 1, padding: 10, width: '90%', alignSelf: 'center', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 3 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../images/Spaceship.png')} style={{ height: 22, width: 22, marginLeft: 10 }} />
              <Text style={{ fontSize: 14, fontWeight: '700', marginLeft: 10, marginTop: 2 }}>Book a Space Shuttle</Text>
            </View>
            {isBookingDetailsClicked ? (
              <Image source={require('../images/down-arrow.png')} style={{ height: 20, width: 20, transform: [{rotate: '-180deg'}] }} />
            ): (
              <Image source={require('../images/down-arrow.png')} style={{ height: 20, width: 20 }} />
            )}
          </View>
          {isBookingDetailsClicked && (
              <View style={{ flexDirection: 'column', marginTop: 10 }}>
              <DropdownField label={'Travelling Mode'} list={travellingModes} />
            </View>            
            )}
        </View>
    )
  }

  const shuttleStatus = () => {
    return (
      <View style={{ borderRadius: 50, height: 50, borderColor: '#D3D1D1', elevation: 5, borderWidth: 1, padding: 10, width: '85%', alignSelf: 'center', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 3 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../images/charging-circle.png')} style={{ height: 22, width: 22, marginLeft: 10 }} />
              <Text style={{ fontSize: 14, fontWeight: '700', marginLeft: 10, marginTop: 2 }}>Spaceship Status</Text>
            </View>
            <Image source={require('../images/down-arrow.png')} style={{ height: 20, width: 20 }} />
          </View>
        </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <NavBar isLogged={false} />
        <Image source={require('../images/HomeImage.png')} style={{ width: '100%', height: 160, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }} />
        {bookAShuttle()}
        {/* {shuttleStatus()} */}
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
    paddingTop: 40,
    width: 360,
  },
  textfield: {
    marginTop: 5,
    width: 300,
  },
});