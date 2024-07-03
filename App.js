import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './components/HomeScreen'; 
import NotificationsScreen from './components/NotificationsScreen'; // Adjust the path as necessary

const Stack = createStackNavigator();


function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor:'white' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Notifications' component={NotificationsScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
