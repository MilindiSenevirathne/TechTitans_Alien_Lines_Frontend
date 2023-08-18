import { en, registerTranslation } from 'react-native-paper-dates';
registerTranslation('en', en);
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import HomePage from './src/pages/HomePage';
import Details from './src/pages/Details';

const Stack = createStackNavigator();


export default function App() {
  return(
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomePage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}


