import { StatusBar } from 'expo-status-bar';

import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NavBar from './NavBar';
import Events from './Events';
import Radio from './Radio';
import Socials from './Socials';
import HomeBar from './HomeBar';
import DailyShows from './DailyShows';


const HomeScreen = ({navigation:{navigate}}) => {
    return (
    <SafeAreaView style={styles.parent}>
    <ScrollView >
    
    <View style={styles.container}>
      <Radio/>
    </View>
    
    <View style={styles.container}>
      <DailyShows/>
    </View>
    
    <View style={styles.container}>
      <Events/>
    </View>
    






    <View>
      <Text style={styles.heading}>Socials</Text>
      <Socials/>
    </View>

    <View style={styles.footer}>
     
    </View>

    </ScrollView>
    
   </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  parent:{
    flex:1,
    backgroundColor:'white',
  },
  footer:{
    padding:30,
    marginBottom:30,
  },
  container:{
    marginBottom:30,
  },
  homeBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
},
heading: {
  fontSize: 24,
  padding:10,
  fontWeight: 'bold',
  marginBottom: 16,
},
})

export default HomeScreen;