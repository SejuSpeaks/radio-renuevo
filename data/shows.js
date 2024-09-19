import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const shows = [
    {
        image:require('../assets/dignityShirt.jpg'), 
        name:"Yo soy \n Dignity",
        time:"Lunes \n 6-7",
        info:"Dignity nace del dolor, del sufrimiento, de la superacion de nuestra fundadora Ivelisse Medina quien por medio de todo lo que emprende, ha sido ejemplo de superacion e influencia a todos aquellos que han experimentado violencia economica, psicologica, emocional, fisica, y sexual siendo una voz de alerta ante el fenenicidio.  El nombre y enfoque del programa sugiere temas relacionados con el respeto, y la autoestima.  El contexto del programa define claramente que significa dignidad. El objetivo es empoderar al oyente con informacion util creando un espacio de apoyo, promoviendo la importancia de los valores del respeto y la empstia. Intereses: salud, bienesestar, derechos, historias inspiradoras, educacion, empleo, etc. segmentos: Entrevistas: Foros y consultas",
        socials:[
            {
                name:"Youtube",
                icon:{ name:'youtube', size:24, color:'white'},
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
                webUrl:'https://www.facebook.com/people/Yo-soy-Dignity/100095557771837/',
        
            },
        ]
    },
    {
        image:require('../assets/turitmo.jpg'),
        name:"Renueva tu \n Ritmo",
        time:"Lunes, Martes, Miercoles \n 6-7 " ,
        info:"Renueva tu ritmo Un programa lleno de mucha música Información que debes escuchar Temas del evangelio que no muchos quieren tocar. Mucha risa pero sobre todo Cristo céntrico. ",
        socials:[
            {
                name:"Youtube",
                icon:{ name:'youtube', size:24, color:'white'},
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
                webUrl:'https://www.facebook.com/people/Yo-soy-Dignity/100095557771837/',
        
            },
        ]

    },
    { 
        image: require("../assets/marbelis.png"),
        name:"Dosis de  \n Esperanza",
        time:"Miercoles \n 6-7",
        info:"",
        socials:[
            {
                name:"Youtube",
                icon:{ name:'youtube', size:24, color:'white'},
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
                webUrl:'https://www.facebook.com/people/Yo-soy-Dignity/100095557771837/',
        
            },
        ]

    },
    { 
        image: require("../assets/radioLogo.png"),
        name:"Rompiendo El Silencio",
        time:"Miercoles \n 6-7",
        info:""

    },
    { 
        image: require("../assets/radioLogo.png"),
        name:"Entrelazados",
        time:"Miercoles \n 6-7",
        info:""

    },
]

export default shows;