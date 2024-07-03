import { StatusBar } from 'expo-status-bar';

import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NavBar from './NavBar';
import Events from './Events';

const HomeScreen = ({navigation:{navigate}}) => {
    return (
    <SafeAreaView style={{backgroundColor:'white'}}>
    <NavBar/>
    
    <Events/>



   </SafeAreaView>
    )
}

export default HomeScreen;