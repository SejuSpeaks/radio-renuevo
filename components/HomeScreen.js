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

    <NavBar/> 
    
    <View style={styles.container}>
      <Events/>
    </View>

    <View style={styles.container}>
      <Radio/>
    </View>

    <View>
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
    marginBottom:0,
  },
  homeBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
},
})

export default HomeScreen;