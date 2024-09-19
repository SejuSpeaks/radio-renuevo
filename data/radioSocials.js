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
        appUrl:'fb://profile/Renuevo102.3fm',
        webUrl:'https://www.facebook.com/Renuevo102.3fm/',

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
    {
        name:"Youtube",
        icon: {name:'youtube', size:24, color:'white'},
        linearColors:["#00B3FF","#FF2EA1"],
        styles: StyleSheet.create({
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10,
            width:50,
            height:50,
            backgroundColor:"black"
        }),
        appUrl:'youtube://',
        webUrl:'',
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
        appUrl:'instagram://',
        webUrl:'',
    },
        
]

export default socials;
