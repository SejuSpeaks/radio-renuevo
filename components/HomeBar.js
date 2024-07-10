import { View,Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const HomeBar = () => {
    const [active, setActive] = useState("Home");
    const navigation = useNavigation();

    const navigateTo = (tab) => {
        setActive(tab)
        navigation.navigate(tab)
        return
    }

    return (
        <View style={styles.container} >
            <View style={styles.iconsContainer}>
                <View >
                    <TouchableOpacity style={styles.iconBox} onPress={()=> navigateTo("Home") }>
                    <Ionicons name={active === "Home" ? "home" : "home-outline"} size={30} color="black" />
                        <Text>Home</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity style={styles.iconBox} onPress={()=> navigateTo("Live")}>
                        <Ionicons name={active === "Live" ? "radio" : "radio-outline"} size={30} color="black" />
                        <Text>Live</Text>
                    </TouchableOpacity>
                </View>

                <View  style={styles.iconBox}>
                    <Ionicons name="person-outline" size={30} color="black" />
                    <Text>Account</Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:80,
        backgroundColor:'#fff',
        // borderTopWidth:2,
        // borderColor:'grey',
        padding:10

    },
    iconsContainer:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    iconBox:{
        alignItems:'center',
        justifyContent:'center',
    }
    
})

export default HomeBar;