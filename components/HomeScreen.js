import { StatusBar } from 'expo-status-bar';

import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NavBar from './NavBar';
import Events from './Events';
import Radio from './Radio';
import Socials from './Socials';
import HomeBar from './HomeBar';

const HomeScreen = ({navigation:{navigate}}) => {
    return (
    <SafeAreaView style={{backgroundColor:'white'}}>
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
    <HomeBar/>
   </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container:{
    marginBottom:0,
  }
})

export default HomeScreen;