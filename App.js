import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SetTimeScreen from './screens/setTime.screen'
import CountDownScreen from './screens/countDown.screen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "SetTimeScreen">
        <Stack.Screen name="SetTimeScreen" component={SetTimeScreen}/>
        <Stack.Screen name="CountDownScreen" component={CountDownScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
