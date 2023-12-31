import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import {
  PaperProvider,
  ThemeProvider
} from 'react-native-paper';
import SideNavbar from './src/components/navbar/SideNavBar';
import customTheme from './src/components/styles/theme';
import Assistance from './src/pages/AssistancePage';
import BookingPage from './src/pages/BookingPage';
import ChooseServices from './src/pages/ChoseServicePage';
import DestinationDetails from "./src/pages/DestinationDetails";
import ExtraBaggage from './src/pages/ExtraBaggagePage';
import HomePage from './src/pages/HomePage';
import LandingPage from './src/pages/LandingPage';
import LoadingPage from './src/pages/LoadingPage';
import MyBookings from './src/pages/MyBookings';
import MyWalletPage from './src/pages/MyWalletPage';
import PassengerDetails from './src/pages/PassengerDetails';
import PaymentIdPage from './src/pages/PaymentIdPage';
import Seatbooking from './src/pages/SeatsBookingPage';
import SpecialMeals from './src/pages/SpecialMealsPage';
import SummaryPage from './src/pages/SummaryPage';
import MyProfile from "./src/pages/ProfilePage";
import ProfileEdit from "./src/pages/ProfileEdit";

//const Drawer = createDrawerNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
          <NavigationContainer>

            <Drawer.Navigator drawerContent={props => <SideNavbar {...props} />}
              initialRouteName="Loading"
              screenOptions={{ headerShown: false, drawerPosition: 'right' }}
            >

              <Drawer.Screen name="Loading" component={LoadingPage} />
              <Drawer.Screen name="Home" component={HomePage} />
              <Drawer.Screen name="BookingPage" component={BookingPage} />
              <Drawer.Screen name="Landing" component={LandingPage} />
              <Drawer.Screen name='MyBookings' component={MyBookings} />
              <Drawer.Screen name='PassengerDetails' component={PassengerDetails} />
              <Drawer.Screen name='MyWalletPage' component={MyWalletPage} />
              <Drawer.Screen name='ChooseServices' component={ChooseServices} />
              <Drawer.Screen name='ExtraBaggage' component={ExtraBaggage} />
              <Drawer.Screen name='Seatbooking' component={Seatbooking} />
              <Drawer.Screen name='SpecialMeals' component={SpecialMeals} />
              <Drawer.Screen name='Assistance' component={Assistance} />
              <Drawer.Screen name='SummaryPage' component={SummaryPage} />
              <Drawer.Screen name='DestinationDetails' component={DestinationDetails} />
              <Drawer.Screen name='PaymentIdPage' component={PaymentIdPage} />
              <Drawer.Screen name='MyProfile' component={MyProfile} />
              <Drawer.Screen name='ProfileEdit' component={ProfileEdit} />
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </ThemeProvider>
    </PaperProvider>

  );
}
