import 'react-native-gesture-handler';
import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './components/HomeScreen'; 
import Live from './components/Live';
import NotificationsScreen from './components/NotificationsScreen'; // Adjust the path as necessary
import HomeBar from './components/HomeBar';
import ArtistProfile from './components/ArtistProfile';
import NavBar from './components/NavBar';
import { SafeAreaView, StatusBar } from 'react-native';
import MiniPlayer from './components/MiniPlayer';

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

function App() {
  //loading the fonts into the app
  const [loaded,error] = useFonts({
    'Gotahm-Bold': require('./assets/fonts/Gotham-Font/Gotham-Bold.otf'),
  })

  useEffect(()=>{
    if(loaded || error) SplashScreen.hideAsync()
  },[loaded,error])

  if (!loaded && !error) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor:'white' }}>
      <StatusBar barStyle="dark-content" />
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
        <MiniPlayer/>
        <HomeBar/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
