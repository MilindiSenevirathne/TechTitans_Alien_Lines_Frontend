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
import MyBookings from './src/pages/MyBookings';
import LoadingPage from './src/pages/LoadingPage';
import LandingPage from './src/pages/LandingPage';
import MyProfile from './src/pages/ProfilePage';
import ProfileEdit from './src/pages/ProfileEdit'

const Stack = createStackNavigator();

export default function App() {
  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,

    colors: {
      ...DefaultTheme.colors,
      primary: "#4C0259",
      onPrimaryContainer: "#ffffff",
      onSecondaryContainer: "#ffffff",
      surfaceVariant: "#ffffff",
      onSurfaceVariant: "#000000cc",
      secondary: "#CA4255",
      fieldColor: "#D3D1D1",
      elevation: {
        level2: "#ffffff",
      }
    },
  };
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Loading"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Loading" component={LoadingPage} />
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="Landing" component={LandingPage} />
              <Stack.Screen name='MyBookings' component={MyBookings}/>
              <Stack.Screen name="MyProfile" component={MyProfile} />
              <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </ThemeProvider>
    </PaperProvider>
  );
}
