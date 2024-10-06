import { StyleSheet } from 'react-native';


const artistData = [
    {
        name:" Pastora Ivelisse Medina",
        profile_image: require("../assets/dignityShirt.jpg"),
        bio:"La Pastora [Nombre], una apasionada líder espiritual y comunicadora, ha dedicado su vida a compartir el mensaje de esperanza y amor de Cristo a través de su ministerio y su programa de radio. Con un corazón ferviente por servir a su comunidad, [Nombre] ha sido una voz influyente y guía espiritual para innumerables personas.",
        socials:[
            {
                name:"Youtube",
                icon:{ name:'youtube', size:24, color:'white'},
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
        name:"Tito [AVERIGUATV]",
        profile_image: require("../assets/radioLogo.png"),
        bio:"Integer at egestas arcu. Integer a condimentum orci. Proin enim felis, gravida dignissim posuere sed, tincidunt vel purus. Vivamus vitae venenatis ipsum. Phasellus bibendum libero sed enim egestas sagittis. Vivamus porttitor ante id velit aliquam, vel ornare metus dictum. Vivamus scelerisque ligula ac nunc pretium posuere. Cras finibus enim non lectus dictum, ac suscipit leo vulputate. Aenean dignissim ac ligula eu aliquam. Quisque eget nisl scelerisque, maximus orci ac, gravida tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque posuere laoreet augue, vitae facilisis velit egestas ac. Cras id risus pharetra, dictum tellus viverra, egestas sem. Vivamus nec porta tellus.",
        socials:[
            {
                name:"Youtube",
                icon:{ name:'youtube', size:24, color:'white'},
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
    },
    {
        name:" Pastor Julio Viera \n & Bibiana",
        profile_image: require("../assets/radioLogo.png"),
        bio:"Integer at egestas arcu. Integer a condimentum orci. Proin enim felis, gravida dignissim posuere sed, tincidunt vel purus. Vivamus vitae venenatis ipsum. Phasellus bibendum libero sed enim egestas sagittis. Vivamus porttitor ante id velit aliquam, vel ornare metus dictum. Vivamus scelerisque ligula ac nunc pretium posuere. Cras finibus enim non lectus dictum, ac suscipit leo vulputate. Aenean dignissim ac ligula eu aliquam. Quisque eget nisl scelerisque, maximus orci ac, gravida tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque posuere laoreet augue, vitae facilisis velit egestas ac. Cras id risus pharetra, dictum tellus viverra, egestas sem. Vivamus nec porta tellus.",
        socials:[
            {
                name:"Youtube",
                icon:{ name:'youtube', size:24, color:'white'},
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
    },
    {
        name:"Dr.Felix Suarex & Dr.Marie Pagan",
        profile_image: require("../assets/radioLogo.png"),
        bio:"Integer at egestas arcu. Integer a condimentum orci. Proin enim felis, gravida dignissim posuere sed, tincidunt vel purus. Vivamus vitae venenatis ipsum. Phasellus bibendum libero sed enim egestas sagittis. Vivamus porttitor ante id velit aliquam, vel ornare metus dictum. Vivamus scelerisque ligula ac nunc pretium posuere. Cras finibus enim non lectus dictum, ac suscipit leo vulputate. Aenean dignissim ac ligula eu aliquam. Quisque eget nisl scelerisque, maximus orci ac, gravida tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque posuere laoreet augue, vitae facilisis velit egestas ac. Cras id risus pharetra, dictum tellus viverra, egestas sem. Vivamus nec porta tellus.",
        socials:[
            {
                name:"Youtube",
                icon:{ name:'youtube', size:24, color:'white'},
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
    },

]

export default artistData;