import { StatusBar } from 'expo-status-bar';

import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NavBar from './NavBar';
import Events from './Events';
import Radio from './Radio';
import Socials from './Socials';
import HomeBar from './HomeBar';

const HomeScreen = ({navigation:{navigate}}) => {
    return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
    <ScrollView >
    
    <View style={styles.container}>
      <Events/>
    </View>

    <View style={styles.container}>
      <Radio/>
    </View>

    <View>
      <Text style={styles.heading}>Socials</Text>
      <Socials/>
    </View>

    </ScrollView>

    {/* <View style={styles.homeBar}>
      <HomeBar/>
    </View> */}
    
   </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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