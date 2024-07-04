import { StatusBar } from 'expo-status-bar';

import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NavBar from './NavBar';
import Events from './Events';
import Radio from './Radio';
import Socials from './Socials';

const HomeScreen = ({navigation:{navigate}}) => {
    return (
    <SafeAreaView style={{backgroundColor:'white'}}>
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

   </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container:{
    marginBottom:25,
  }
})

export default HomeScreen;