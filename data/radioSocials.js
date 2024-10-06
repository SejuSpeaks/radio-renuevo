import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const socials = [
    // {
    //     name:"WhatsApp",
    //     icon: {name:'whatsapp', size:24, color:'white'},
    //     styles: StyleSheet.create({
    //         justifyContent:'center',
    //         alignItems:'center',
    //         borderRadius:10,
    //         width:50,
    //         height:50,
    //         backgroundColor:"green"
    //     }),
    //     appUrl:'https://wa.me/15551234567',
    //     webUrl:'',
    // },
    {
        name:"Facebook",
        icon: {name:'facebook', size:24, color:'white'},
        linearColors:["#00B3FF","#FF2EA1"],
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            width:50,
            height:50,
            backgroundColor:"black"
        }),
        appUrl:'fb://profile/100064516279595',
        webUrl:'https://www.facebook.com/Renuevo102.3fm/',

    },
    {
        name:"Instagram",
        icon: {name:'instagram', size:24, color:'white'},
        linearColors:["#00B3FF","#FF2EA1"],
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            width:50,
            height:50,
            backgroundColor:"black"
        }),
        appUrl:'instagram://user?username=renuevo_102.3',
        webUrl: 'https://www.instagram.com/renuevo_102.3/',
    },
    {
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
    },
        
]

export default socials;
