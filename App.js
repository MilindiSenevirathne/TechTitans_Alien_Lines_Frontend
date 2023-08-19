import { en, registerTranslation } from 'react-native-paper-dates';
registerTranslation('en', en);
import {
  DefaultTheme,
  PaperProvider,
  ThemeProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import HomePage from './src/pages/HomePage';
import BookingPage from './src/pages/BookingPage';
import MyBookings from './src/pages/MyBookings';
import LoadingPage from './src/pages/LoadingPage';
import LandingPage from './src/pages/LandingPage';
import customTheme from './src/components/styles/theme';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Loading" component={LoadingPage} />
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="BookingPage" component={BookingPage} />
              <Stack.Screen name="Landing" component={LandingPage} />
              <Stack.Screen name='MyBookings' component={MyBookings}/>
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </ThemeProvider>
    </PaperProvider>
  );
}
