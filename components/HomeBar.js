import { View,Text, StyleSheet} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withSpring } from "react-native-reanimated";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const HomeBar = ({activeTab, setActiveTab, isMinimized, translationY, SNAP_BOTTOM, springConfig}) => {
    const navigation = useNavigation();

    const navigateTo = (tab) => {
        setActiveTab(tab)

        if(tab !== "Live"){
            navigation.navigate(tab)
        }
        else{
            translationY.value = withSpring(0,springConfig)
            isMinimized.value = 0
        }
        return
    }


    return (
        <View style={styles.container} >
            <View style={styles.iconsContainer}>
                <View  style={styles.iconChildContainer}>
                    <TouchableOpacity style={styles.iconBox} onPress={()=> navigateTo("Home") }>
                    <Ionicons name={activeTab === "Home" ? "home" : "home-outline"} size={25} color="black" />
                        <Text>Home</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.iconChildContainer} >
                    <TouchableOpacity style={styles.iconBox} onPress={()=> navigateTo("Live")}>
                        <Ionicons name={activeTab === "Live" ? "radio" : "radio-outline"} size={25} color="black" />
                        <Text>Live</Text>
                    </TouchableOpacity>
                </View>

                {/* <View  style={styles.iconBox}>
                    <TouchableOpacity style={styles.iconBox} onPress={()=> navigateTo("MusicPlayer")}>
                        <Ionicons name="person-outline" size={30} color="black" />
                        <Text>Account</Text>
                    </TouchableOpacity>
                </View> */}
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:80,
        backgroundColor:'#fff',
        padding:10
    },
    iconsContainer:{
        display:"flex",
        flexDirection:'row',
        // borderWidth:2,
        // borderColor:'grey',
        justifyContent:'space-around',
        alignItems:'center'
    },
    iconChildContainer:{
        justifyContent:'center',
        alignItems:'center'
    },

    iconBox:{
        alignItems:'center',
        justifyContent:'center',
    }
    
})

export default HomeBar;