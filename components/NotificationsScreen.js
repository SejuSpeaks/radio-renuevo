import { View, Text, SafeAreaView, StyleSheet} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import NavBar from "./NavBar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const NotificationsScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{backgroundColor:'white'}}>
           <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                <FontAwesome size={30} name='chevron-left'/>
            </TouchableOpacity>
            <Text style={styles.title}>Notificaciones</Text>
           </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        gap:10,
    },
    title:{
        fontSize:30,
        fontWeight: 'bold',
    }
})

export default NotificationsScreen;