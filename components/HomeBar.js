import { View,Text, StyleSheet} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeBar = () => {
    return (
        <View style={styles.container} >
            <View style={styles.iconsContainer}>
                <View  style={styles.iconBox}>
                    <FontAwesome name='home' size={35}/>
                    <Text>Home</Text>
                </View>
                <View style={styles.iconBox}>
                    <Ionicons name="radio-outline" size={35} color="black" />
                    <Text>Live</Text>
                </View>
                <View  style={styles.iconBox}>
                    <Ionicons name="person-outline" size={35} color="black" />
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
        borderTopWidth:2,
        borderColor:'grey',
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
        justifyContent:'center'
    }
    
})

export default HomeBar;