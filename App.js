import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './components/HomeScreen'; 
import Live from './components/Live';
import NotificationsScreen from './components/NotificationsScreen'; // Adjust the path as necessary
import HomeBar from './components/HomeBar';
import ArtistProfile from './components/ArtistProfile';
import NavBar from './components/NavBar';
import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();


function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor:'white' }}>
      <NavigationContainer>
        <SafeAreaView>
          <NavBar/>
        </SafeAreaView>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Notifications' component={NotificationsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Live' component={Live} options={{headerShown:false, 
           transitionSpec: {
            open: { animation: 'timing', config: { duration: 0 } },
            close: { animation: 'timing', config: { duration: 0 } },
          },
        }}/>
        <Stack.Screen name="ArtistProfile" component={ArtistProfile} options={{headerShown:false}}/>
        </Stack.Navigator>
        <HomeBar/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
