import { StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const shows = [
    {
        image:require('../assets/dignityShirt.jpg'), 
        name:"Yo soy Dignity",
        bigName:"Yo soy \n Dignity",
        time:"Jueves \n 5-6",
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
                appUrl:'youtube://channel/UC4NmuUu6UjYQ5BlzAizvnkA',
                webUrl:'www.youtube.com/channel/UC4NmuUu6UjYQ5BlzAizvnkA',
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
                appUrl:'fb://profile/100095557771837',
                webUrl:'https://www.facebook.com/people/Yo-soy-Dignity/100095557771837/',
        
            },
        ]
    },
    {
        image:require('../assets/turitmo.jpg'),
        name:"Renueva tu Ritmo",
        bigName:"Renueva tu \n Ritmo",
        time:"Lunes, Miercoles, Viernes \n 6-7 " ,
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
        image: require("../assets/entrelazados.jpg"),
        name:"Entrelazados",
        bigName:"Entrelazados",
        time:"Martes, Jueves \n 6-7",
        info:"Un programa creado por el pastor Julio y Bibiana lleno de mucha información para su vida en general cómo el noviazgo, matrimonio y su vida  diaria pero todo enfocado en Cristo. Ellos le pone un toque divertido con sus testimonios.",
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
                appUrl:'youtube://www.youtube.com/@entrelazados_podcast',
                webUrl:'https://www.youtube.com/@entrelazados_podcast',
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
                appUrl:'instagram://user?username=entrelazados.podcast',
                webUrl: 'https://www.instagram.com/entrelazados.podcast/?igsh=NGZ6dXFqNmRqaHBw',
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
                appUrl:'fb://profile/61560725337647',
                webUrl:'https://www.facebook.com/entrelazados.podcast?mibextid=JRoKGi',
        
            },
        ]

    },
    { 
        image: require("../assets/sirviendo.jpeg"),
        name:"Sirviendo Dia a Dia ",
        bigName:"Sirviendo \n Dia a Dia",
        time:"Miercoles \n 4-5pm",
        info:""

    },
    { 
        image: require("../assets/zonadefe.jpeg"),
        name:"Zona De FE",
        bigName:"Zona \n De FE",
        time:"Miercoles \n 7pm",
        info:""

    },
    
]

export default shows;