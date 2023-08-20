import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
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
import { Card } from 'react-native-paper';

export default function MyWalletPage({ navigation }) {

  const modalShow = React.useRef(null)

  return (
      <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
    <ScrollView>
      <NavBar isLogged={true}/>

      <Card style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={{fontSize:50, fontWeight:'700'}}>$ 371,000</Text>
        <Text style={{fontSize:20, fontWeight:'500', marginTop:15}}>Wallet Balance</Text>
        </View>
        </Card>


        <View style={styles.topupContainer}>
        <Text style={{fontSize:25, fontWeight:'500',color:'#828282'}}>Top up your wallet</Text>
        </View>
        <View style={styles.textContainer}>
        <View style={styles.textfield}>
          <TextField label="Card Number" placeholder="Card Number" />
        </View>
        <View style={styles.textfield}>
          <TextField label="Expiry Date" placeholder="Expiry Date" />
        </View>
        <View style={styles.textfield}>
          <TextField label="CVV" placeholder="CVV" />
        </View>
        </View>

        <CommonButton lable={'Topup Wallet'} commonBtnPress={()=>navigation.navigate('MyBookings')}/>


          </ScrollView>
        </View>
      </SafeAreaView>
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
  textContainer: {
    alignItems: 'center',
    padding: 25,
  },
  card: {
    alignItems: 'center',
    padding: 20,
    elevation: 5,
    shadowColor: '#4c0259',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: '#fff',
    borderRadius: 0,
  },
  miniContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    borderRadius: 40,
    width: 360,
    paddingBottom: 40,
  },
  textfield: {
    marginTop: 25,
    width: 300,
  },
  topupContainer: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'left',
    paddingLeft: 25,
    paddingBottom: 0,
    marginTop: 28,
    marginBottom: 5,

  },
});
