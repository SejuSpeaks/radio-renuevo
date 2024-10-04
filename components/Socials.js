import { View,Text,StyleSheet} from "react-native";
import { Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from "expo-linear-gradient";

const goToLink = (appUrl, webUrl) => {
    console.log('pressed')
    Linking.canOpenURL(appUrl)
    .then(supports => {
        if(supports) return Linking.openURL(appUrl)
        else return Linking.openURL(webUrl);
    })
    
}



const Icon = ({social}) => {
    return (
    <TouchableOpacity onPress={()=>goToLink(social.appUrl,social.webUrl)} style={social.styles}>
        <LinearGradient colors={social.linearColors} style={social.styles}>
            <Text>
                <FontAwesome  name={social.icon.name} size={social.icon.size} color={social.icon.color}/>
            </Text>
        </LinearGradient>
    </TouchableOpacity>
    )
}

const Socials = ({socials}) => {
    const displaySocials = Array.isArray(socials) && socials.length > 0
    ? socials.map((social, index) => <Icon key={index} social={social} />)
    : null;

    return (
        <View>
            <View style={styles.iconsContainer}>
                {displaySocials}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    iconsContainer:{
        display:"flex",
        flexDirection:"row",
         padding:10, 
         marginBottom:0 ,
          gap:10
        },
    heading: {
        fontSize: 24,
        padding:10,
        fontWeight: 'bold',
        marginBottom: 0,
      },
    
})

export default Socials;