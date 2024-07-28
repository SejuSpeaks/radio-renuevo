import { useState } from "react";
import { View,Text,Image,StyleSheet, Button,TouchableOpacity,TouchableWithoutFeedback, } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const MusicPlayer = () => {

    const [playing,setPlaying] = useState(false)
    const nav = useNavigation();

    const changePlay = () => {
        setPlaying(!playing)
        console.log(playing)
    }

    return (
        <TouchableOpacity activeOpacity={1} style={{height:"7%",zIndex:0}} onPress={(e)=> {
            console.log('box')
            nav.navigate("Live")
            //screen comes from bottom
        }}>

        <View style={styles.container}>

            <View style={{flexDirection:'row',gap:10, height:'100%'}}>
              
                <Image style={styles.image} source={require("../assets/radioLogo.png")}/>
             

                <View style={{justifyContent:'center'}}>
                    <Text style={styles.songTitle}>Un nuevo Comienzo</Text>
                    <Text style={styles.artistName}>Ivelisse Medina</Text>
                </View>

            </View>

            <View style={styles.audioButton} >
                <TouchableOpacity onPress={changePlay} >
                    {playing === false ?  <FontAwesome name='play' size={24} color={'black'}/> : <FontAwesome name='pause' size={24} color={'black'}/>}
                
                </TouchableOpacity>
            </View>

        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFF",
        flexDirection:"row",
        justifyContent:'space-between',
        height:'100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderWidth:'1',
        borderColor:'#dad4d4',
        overflow:'visible',
        alignItems:'center'
    },
    image:{
        height:'100%',
        width:60,
        backgroundColor:"pink"
    },
    artistName:{
        color:'grey'
    },
    songTitle:{
        fontWeight:'500'
    },
    audioButton:{
        height:'100%',
        width:'15%',
        alignItems:'center',
        justifyContent:'center',
        zIndex:1
    }

})

export default MusicPlayer;