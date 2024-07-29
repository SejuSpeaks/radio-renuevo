import { useState } from "react";
import { View,Text,Image,StyleSheet, Button,TouchableOpacity,TouchableWithoutFeedback, } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";

const MusicPlayer = () => {

    const [playing,setPlaying] = useState(false)
    const [sound, setSound] = useState();
    const nav = useNavigation();


    const playSound = async (streamUrl) => {
        console.log('playing sound');
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: streamUrl },
          { shouldPlay: true }
        );
        setSound(newSound);
        await newSound.playAsync();
        setPlaying(true);
      };

    const changePlay = async () => {
        if (playing){
            console.log('stopping sound');
            setPlaying(false);
          
        }
        else{
            setPlaying(true);
            const url = await fetchStreamUrl("https://us2.maindigitalstream.com:2199/tunein/renuevo.pls")
            console.log(url, 'THIS IS URL');
            if(url){
                playSound(url);
            }
            else{
                console.log('failed to stream');
            }
        }
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
                    <Text style={styles.songTitle}>Radio Renuevo</Text>
                    <Text style={styles.artistName}>102.3FM</Text>
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

const fetchStreamUrl = async (url) => {
    try {
        const response = await fetch(url);
        const text = await response.text();
        const matches = text.match(/File1=(.+)/);
        return matches ? matches[1].trim() : null;
    } catch (error) {
        console.error('Error fetching url', error);
        return null;
    }
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