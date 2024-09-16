import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const socials = [
    {
        name:"WhatsApp",
        icon: {name:'whatsapp', size:24, color:'white'},
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            width:50,
            height:50,
            backgroundColor:"green"
        }),
        appUrl:'',
        webUrl:'',
    },
    {
        name:"Facebook",
        icon: {name:'facebook', size:24, color:'white'},
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            width:50,
            height:50,
            backgroundColor:"blue"
        }),
        appUrl:'fb://profile/Renuevo102.3fm',
        webUrl:'https://www.facebook.com/Renuevo102.3fm/',

    },
    {
        name:"Email",
        icon: {name:'envelope', size:24, color:'white'},
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            width:50,
            height:50,
            backgroundColor:"grey"
        }),
        appUrl:'googlegmail://co?to=renuevo1023@gmail.com',
        webUrl:'mailto:renuevo1023@gmail.com',
    },
    {
        name:"Youtube",
        icon: {name:'youtube', size:24, color:'white'},
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            width:50,
            height:50,
            backgroundColor:"red"
        }),
        appUrl:'youtube://',
        webUrl:'',
    },
        
]

export default socials;
