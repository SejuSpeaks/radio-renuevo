
import { View, Image, Text, ScrollView, StyleSheet,Dimensions } from "react-native";
const {width, height} = Dimensions.get('window')
import Socials from "./Socials";
import { LinearGradient } from "expo-linear-gradient";

import changeTitleColor from "../util/changeTitleColor";
import socials from "../data/radioSocials";

const ShowInformation = ({route}) => {
    const show = route.params;
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View>
                <View style={styles.imageParent}>
                    <Image source={show.image} style={styles.image}/>
                    <LinearGradient colors={["#00B3FF","#FF2EA1"]} style={styles.circle}>
                         <Text style={styles.showTime}>
                             {show.time}
                         </Text>
                    </LinearGradient>

                </View>

            </View>
            <View style={styles.showInfoParentContainer}>

                <View style={styles.showInfoContainer}>
                    {changeTitleColor(show.name)}
                    {/* slice show title when you see a space, turn that word into a different color  */}
                    <View style={styles.showInfo}>
                        <Text style={styles.p}>{show.info}</Text>
                    </View>
                </View>

                <View style={styles.bar}></View>
            </View>

            <View style={styles.socialsContainer}>
                <Socials socials={show.socials}/>
            </View>

            <View style={styles.footer}></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    p:{
        fontSize:18,
        textAlign:'left'
    },
    socialsContainer:{
        marginTop:20,
        paddingLeft:10
    },
    bar:{
        width:3,
        backgroundColor:"#FF2CA0",
        height:'80%',
        marginTop:'30%'

    },
    showInfoParentContainer:{
        paddingLeft:20,
        flexDirection:'row'
    },
    showInfoContainer:{
        width:'90%'
    },
    circle:{
        backgroundColor:"#01B2FD",
        borderRadius:100,
        height:90,
        width:90,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:-20,
        right:10,

    },
    showInfo:{
        width:'75%',
    },
    showName:{
        fontSize:48,
        fontFamily:'Roboto',

    },
    imageParent:{
        height:height * 0.4,
        width:width
    },
    showTime:{
        color:'white',
        fontWeight:"700",
        textAlign:'center'
    },
    image:{
        // height:'100%',
        // width:width -45
        height:height * 0.4,
        width:width
    },
    footer:{
        padding:30,
        marginBottom:30,
      },
})

export default ShowInformation;