import React, { useRef } from 'react';
import { Animated, PanResponder, View, Dimensions, StyleSheet, SafeAreaView, Text,Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";
import { AntDesign, Feather as Icon } from "@expo/vector-icons";
const { height, width } = Dimensions.get('window');



const MusicPlayer = ({onPress, changePlay, playing, setPlaying}) => {
   return (
    <>
        <SafeAreaView style={styles.root}>

        <LinearGradient
        colors={['white','white']}
        style={StyleSheet.absoluteFill}
        locations={[1,0.2]}
        />

        <View style={styles.container}>

        <View style={styles.header}>
          <RectButton style={styles.button} {...{ onPress }}>
            <Icon name="chevron-down" color="black" size={34} />
          </RectButton>
          <Text style={styles.title}>Radio Renuevo</Text>
          
          <RectButton style={styles.button} {...{ onPress }}>
            <Icon name="more-horizontal" color="black" size={24} />
          </RectButton>
        </View>


        <Image source={require("../assets/titoritmo.jpg")} style={styles.cover} />

        <View style={styles.metadata}>
            <View>
            <Text style={styles.song}>Radio Renuveo</Text>
            <Text style={styles.artist}>102.3FM</Text>
            </View>
        </View>
        <View style={styles.slider} />

        <View style={styles.controls}>
            <AntDesign name="stepbackward" color="lightgrey" size={42} />
            {playing ?  <AntDesign name="pause" color="black" size={90} onPress={()=> changePlay()} /> : <AntDesign name="play" color="black" size={90} onPress={()=> changePlay()} />} 
            
            <AntDesign name="stepforward" color="lightgrey" size={42} />
        </View>

        </View>
        </SafeAreaView>
    </>
   );
};

const styles = StyleSheet.create({
    root: {
      flex: 1
    },
    container: {
      margin: 16,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    button: {
      padding: 16
    },
    title: {
      color: "black",
      padding: 16
    },
    cover: {
      marginVertical: 16,
      width: width - 32,
      height: width - 32,
      borderRadius:5,
    },
    metadata: {
      color:'black',
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "center",
    },
    text:{
        color:'black',
    },
    song: {
      fontSize: 32,
      fontWeight: "bold",
      color: "white",
      fontFamily:'Gotham-Bold',
      color:'black'

    },
    artist: {
      color: "white",
      fontFamily:'Gotham-Bold',
      color:'black'
    },
    slider: {
      backgroundColor: "rgba(92, 86, 89, 0.47)",
      width: width - 32,
      borderRadius: 2,
      height: 4,
      marginVertical: 16,
     
    },
    controls: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: '10%'
    }
  });

export default MusicPlayer;
