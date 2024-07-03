import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NavBar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>                
                <Image style={styles.image} source={require('../assets/radioLogo.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
                <FontAwesome size={24} name="bell" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        height: 60, // Adjust the height as needed
    },
    image: {
        height: 90,
        width: 90,
    },
});

export default NavBar;
