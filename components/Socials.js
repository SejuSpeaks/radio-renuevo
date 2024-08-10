import { View,Text,StyleSheet } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const socials = [
    {
        name:"WhatsApp",
        icon: <FontAwesome name='whatsapp' size={24} color={'white'}/>,
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:100,
            width:50,
            height:50,
            backgroundColor:"green"
        }),
        appUrl:'',
        webUrl:'',
    },
    {
        name:"Facebook",
        icon:<FontAwesome name='facebook' size={24} color={'white'}/>,
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:100,
            width:50,
            height:50,
            backgroundColor:"blue"
        }),
        appUrl:'fb://profile/Renuevo102.3fm',
        webUrl:'https://www.facebook.com/Renuevo102.3fm/',

    },
    {
        name:"Email",
        icon:<FontAwesome name='envelope' size={24} color={'white'}/>,
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:100,
            width:50,
            height:50,
            backgroundColor:"grey"
        }),
        appUrl:'googlegmail://co?to=renuevo1023@gmail.com',
        webUrl:'mailto:renuevo1023@gmail.com',
    },
    {
        name:"Youtube",
        icon:<FontAwesome  name='youtube' size={24} color={'white'}/>,
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:100,
            width:50,
            height:50,
            backgroundColor:"red"
        }),
        appUrl:'',
        webUrl:'',
    },
        
]

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
        {social.icon}
    </TouchableOpacity>
    )
}

const displaySocials = socials.map((social,index) => <Icon key={index} social={social}/>)

const Socials = () => {
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