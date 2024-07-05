import { View,Text,StyleSheet } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
        })
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
        })
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
        })
    },
    {
        name:"Youtube",
        icon:<FontAwesome name='youtube' size={24} color={'white'}/>,
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:100,
            width:50,
            height:50,
            backgroundColor:"red"
        })
    },
        
]

const Icon = ({social}) => {
    return (
    <View style={social.styles}>
        {social.icon}
    </View>
    )
}

const displaySocials = socials.map((social,index) => <Icon key={index} social={social}/>)

const Socials = () => {
    return (
        <View>
            <Text style={styles.heading}>Socials</Text>

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