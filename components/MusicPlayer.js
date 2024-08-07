import React, { useRef } from 'react';
import { Animated, PanResponder, View, Dimensions, StyleSheet, SafeAreaView, Text,Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";
import { AntDesign, Feather as Icon } from "@expo/vector-icons";
const { height, width } = Dimensions.get('window');



const MusicPlayer = ({onPress}) => {
   return (
    <>
        <SafeAreaView style={styles.root}>

        <LinearGradient
        colors={["#e4ebe5", "#d194c5"]}
        style={StyleSheet.absoluteFill}
        />

        <View style={styles.container}>


        <Image source={require("../assets/mama.png")} style={styles.cover} />

        <View style={styles.metadata}>
            <View>
            <Text style={styles.song}>Radio Renuveo</Text>
            <Text style={styles.artist}>102.3FM</Text>
            </View>
            <AntDesign name="heart" size={24} color="#55b661" />
        </View>
        <View style={styles.slider} />

        <View style={styles.controls}>
            <AntDesign name="stepbackward" color="grey" size={32} />
            <AntDesign name="play" color="white" size={48} />
            <AntDesign name="stepforward" color="grey" size={32} />
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
      margin: 16
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    button: {
      padding: 16
    },
    title: {
      color: "white",
      padding: 16
    },
    cover: {
      marginVertical: 16,
      width: width - 32,
      height: width - 32
    },
    metadata: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    song: {
      fontSize: 32,
      fontWeight: "bold",
      color: "white"
    },
    artist: {
      color: "white"
    },
    slider: {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      width: width - 32,
      borderRadius: 2,
      height: 4,
      marginVertical: 16
    },
    controls: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"
    }
  });

export default MusicPlayer;
