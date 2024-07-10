import { View,SafeAreaView,Text,Image,StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ArtistProfile = ({route}) => {
    const artist = route.params;

    return (
        <SafeAreaView style={{backgroundColor:"white", flex:1}}>
            <ScrollView>

            <View style={styles.center}>
                <Image style={styles.image} source={artist.profile_image}/>
                <Text style={styles.artistName}>{artist.name}</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.heading}>Programa </Text>
                <Image style={styles.programImage} source={artist.program}/>
            </View>

            <View style={styles.container}>
                <Text style={styles.heading}>About</Text>
                <Text style={styles.p}>{artist.bio}</Text>
            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    center:{
       padding:30,
       alignItems:"center",
       gap:30
    },
    container:{
        padding:15,
        
    },
    heading:{
        fontSize:35,
        fontWeight:"bold",
        marginBottom:20,
    },
    artistName:{
        fontSize:20,
        fontWeight:"700"
    },
    image:{
        borderRadius:10,
        height:250,
        width:250
    },
    p:{
        textAlign:"left",
        fontFamily:"Inter"

    },
    programImage:{
        height:200,
        width:"fit",
    }
})

export default ArtistProfile;