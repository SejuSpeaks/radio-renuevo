import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';


function handleRegistrationError(errorMessage) {
    alert(errorMessage);
    throw new Error(errorMessage);
  }

export async function registerForPushNotificationsAsync() {
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        handleRegistrationError('Permission not granted to get push token for push notification!');
        return;
      }
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
      if (!projectId) {
        handleRegistrationError('Project ID not found');
      }
      try {
        const pushTokenString = (
          await Notifications.getExpoPushTokenAsync({
            projectId,
          })
        ).data;
        console.log(pushTokenString);
        return pushTokenString;
      } catch (e) {
        handleRegistrationError(`${e}`);
      }
    } else {
      handleRegistrationError('Must use physical device for push notifications');
    }
  }

  

  function getUserTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}


  export function convertToLocalTime(timeString, userTimeZone = getUserTimeZone()) {
    console.log(userTimeZone)

    // Parse the input time string (assuming format like '5:00 PM EST')
    const [time, period, zone] = timeString.split(' ');

    console.log('TIME', time, 'PERIOD', period, 'ZONE', zone)

    // Convert time into 24-hour format if necessary
    let [hours, minutes] = time.split(':').map(Number);
    if (period.toLowerCase() === 'pm' && hours !== 12) {
        hours += 12;
    } else if (period.toLowerCase() === 'am' && hours === 12) {
        hours = 0;
    }

    // Create a Date object in the EST timezone
    const estDate = new Date();

    // Set the hours and minutes for the EST timezone
    estDate.setHours(hours, minutes, 0, 0);

    
    // Convert the time in EST to the local timezone using the Intl API
    //TO SEE THE DATE YOU JUST CREATED IN EST
    const estTime = estDate.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        hour12: false, // Use 24-hour format for clarity
    });

    console.log('EST DATE ', estTime)
    
    
    // Now, parse that time back into a date object and convert to the local timezone
    const localTime = new Date(estDate);

    const userLocalTime = localTime.toLocaleString('en-US',{
        timeZone: userTimeZone,
        hour12: false,
    })

    return localTime;
}



export async function schedulePushNotifications(timeOfShow){
  const triggerDate = await convertToLocalTime(timeOfShow);

  await Notifications.scheduleNotificationAsync({
      content:{
          'title': 'Notifications worked!',
          body:"This worked woohoo!"
      },
      trigger:{date: triggerDate}
  })
}