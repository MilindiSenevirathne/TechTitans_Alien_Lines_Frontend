import { en, registerTranslation } from 'react-native-paper-dates';
registerTranslation('en', en);
import {
  DefaultTheme,
  PaperProvider,
  ThemeProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import HomePage from './src/pages/HomePage';
import BookingPage from './src/pages/BookingPage';
import MyBookings from './src/pages/MyBookings';
import LoadingPage from './src/pages/LoadingPage';
import LandingPage from './src/pages/LandingPage';
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
              <Drawer.Screen name="Loading" component={LoadingPage} />
              <Drawer.Screen name="Home" component={HomePage} />
              <Drawer.Screen name="BookingPage" component={BookingPage} />
              <Drawer.Screen name="Landing" component={LandingPage} />
              <Drawer.Screen name='MyBookings' component={MyBookings}/>
            </Drawer.Navigator>
          </NavigationContainer>
        </View>
      </ThemeProvider>
    </PaperProvider>
  );
}
