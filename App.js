import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import {
  PaperProvider,
  ThemeProvider
} from 'react-native-paper';
import { en, registerTranslation } from 'react-native-paper-dates';
import customTheme from './src/components/styles/theme';
import Assistance from './src/pages/AssistancePage';
import BookingPage from './src/pages/BookingPage';
import ChooseServices from './src/pages/ChoseServicePage';
import ExtraBaggage from './src/pages/ExtraBaggagePage';
import HomePage from './src/pages/HomePage';
import LandingPage from './src/pages/LandingPage';
import MyWalletPage from './src/pages/MyWalletPage';
import LoadingPage from './src/pages/LoadingPage';
import MyBookings from './src/pages/MyBookings';
import PassengerDetails from './src/pages/PassengerDetails';
import Seatbooking from './src/pages/SeatsBookingPage';
import SpecialMeals from './src/pages/SpecialMealsPage';=
import Assistance from './src/pages/AssistancePage';
import customTheme from './src/components/styles/theme';
import SideNavbar from './src/components/navbar/SideNavBar';

//const Drawer = createDrawerNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
          <NavigationContainer>
    
          <Drawer.Navigator drawerContent={props => <SideNavbar {...props}/>}
             initialRouteName="Loading"
              screenOptions={{ headerShown: false , drawerPosition: 'right'}}
            >

              <Stack.Screen name="Loading" component={LoadingPage} />
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="BookingPage" component={BookingPage} />
              <Stack.Screen name="Landing" component={LandingPage} />
              <Stack.Screen name='MyBookings' component={MyBookings}/>
              <Stack.Screen name='PassengerDetails' component={PassengerDetails}/>
              <Stack.Screen name='MyWalletPage' component={MyWalletPage}/>
              <Stack.Screen name='ChooseServices' component={ChooseServices} />
              <Stack.Screen name='ExtraBaggage' component={ExtraBaggage} />
              <Stack.Screen name='Seatbooking' component={Seatbooking} />
              <Stack.Screen name='SpecialMeals' component={SpecialMeals} />
              <Stack.Screen name='Assistance' component={Assistance} />
         
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </ThemeProvider>
    </PaperProvider>
    
  );
}
