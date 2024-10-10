import { View,Text,StyleSheet, Button} from "react-native";
import { Linking } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";
import { goToLink } from "./Socials";



const AdverstiseBar = ()=> {
    return(
        <TouchableWithoutFeedback onPress={()=> goToLink('googlegmail://co?to=renuevo1023@gmail.com','mailto:renuevo1023@gmail.com')}>
            <View style={styles.parentOfParent}>
                <View style={styles.partentContainer}>
                    <Text style={styles.heading}>Necesitas un anuncio? Contact us by email!</Text>
                    <FontAwesome name="bullhorn" size={20} color={'blue'}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    heading: {
        fontSize: 12,
        padding:10,
        fontWeight:'bold'
      },
      partentContainer:{
        borderRadius:5,
        padding:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
      },
      parentOfParent:{
        borderWidth:1,
        borderColor:'lightgrey',
        justifyContent:'center',
        alignItems:'center',
      }
})



const social = {
    name:"Email",
    icon: {name:'envelope', size:24, color:'white'},
    linearColors:["#00B3FF","#FF2EA1"],
    styles: StyleSheet.create({
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        width:50,
        height:50,
        backgroundColor:"black"
    }),
    appUrl:'googlegmail://co?to=renuevo1023@gmail.com',
    webUrl:'mailto:renuevo1023@gmail.com',
}


export default AdverstiseBar;