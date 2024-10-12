import 'react-native-gesture-handler';
import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './components/HomeScreen'; 
import Live from './components/Live';
import NotificationsScreen from './components/NotificationsScreen';
import ArtistProfile from './components/ArtistProfile';
import NavBar from './components/NavBar';
import { SafeAreaView, StatusBar } from 'react-native';
import MusicPlayer from './components/MusicPlayer';
import BottomTab from './components/BottomTab';
import Loading from './components/Loading';
import { Suspense } from 'react';
import ShowInformation from './components/ShowInformation';
import TrackPlayer from 'react-native-track-player';
import { setupEventListeners } from './util/trackPlayer';
import { convertToLocalTime, registerForPushNotificationsAsync, schedulePushNotifications } from './util/pushNotifications';
import * as Notifications from 'expo-notifications';
const Stack = createStackNavigator();

//import shows
import shows from './data/shows';

// SplashScreen.preventAutoHideAsync();


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(undefined);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(()=>{
    //set up TrackPlayer
    TrackPlayer.registerPlaybackService(() => setupEventListeners);
    //set up notifications
    registerForPushNotificationsAsync()
    .then(token => setExpoPushToken(token ?? ""))
    .catch(error => setExpoPushToken(`${error}`))

    console.log(expoPushToken);
    
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
    
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    schedulePushNotifications(shows)


    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };

  },[])


  return (
    <Suspense fallback={<Loading/>}>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor:'white' }}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <SafeAreaView>
            <NavBar/>
          </SafeAreaView>
          <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name='Notifications' component={NotificationsScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="ShowDetails" component={ShowInformation} options={{headerShown:false}}/>
              <Stack.Screen name='Live' component={Live} options={{headerShown:false, 
                transitionSpec: {
                  open: { animation: 'timing', config: { duration: 0 } },
                  close: { animation: 'timing', config: { duration: 0 } },
                  },
                }}/>
              <Stack.Screen name="ArtistProfile" component={ArtistProfile} options={{headerShown:false}}/>
              <Stack.Screen name="MusicPlayer" component={MusicPlayer} options={{headerShown:false}}/>
          </Stack.Navigator>

          <BottomTab/>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Suspense>
  );
}

export default App;
