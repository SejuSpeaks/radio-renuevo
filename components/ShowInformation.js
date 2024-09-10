
import { View, Image, Text, ScrollView, StyleSheet,Dimensions } from "react-native";
const {width, height} = Dimensions.get('window')

import changeTitleColor from "../util/changeTitleColor";

const ShowInformation = ({route}) => {
    const show = route.params;
    console.log(show.time);
    return (
        <ScrollView>
            <View>
                <View style={styles.imageParent}>
                    <Image source={show.image} style={styles.image}/>
                    <View style={styles.circle}>
                        <Text style={styles.showTime}>
                            {show.time}
                        </Text>
                    </View>

                </View>

            </View>
            <View>
                {changeTitleColor(show.name)}
                {/* slice show title when you see a space, turn that word into a different color  */}
                <Text>{show.info}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    circle:{
        backgroundColor:"blue",
        borderRadius:100,
        height:90,
        width:90,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:-20,
        right:10,

    },
    showName:{
        fontSize:48,
        fontFamily:'Roboto',

    },
    imageParent:{
        
    },
    showTime:{
        color:'white',
        fontWeight:"700",
        textAlign:'center'
    },
    image:{
        height:height * 0.4,
        width:width
    }
})

export default ShowInformation;