import { View,SafeAreaView,Text,Image,StyleSheet,Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Socials from "./Socials";

const {width, height} = Dimensions.get('window');


const ArtistProfile = ({route}) => {
    const artist = route.params;

    return (
        <SafeAreaView style={{backgroundColor:"white", flex:1, }}>
            <ScrollView>
                
            <View style={styles.artistHeader}>
                <View style={styles.center}>
                    <Image style={styles.image} source={artist.profile_image}/>
                    <Text style={styles.artistName}>{artist.name}</Text>
                </View>

            </View>

            <View style={styles.container}>
                <Text style={styles.heading}>Programa </Text>
                <Image style={styles.programImage} source={artist.program}/>
            </View>

            {/* <View style={styles.container}>
                <Text style={styles.heading}>About</Text>
                <Text style={styles.p}>{artist.bio}</Text>
            </View> */}

            <View style={styles.container}>
            <Text style={styles.heading}>Socials</Text>
                <Socials/>
            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    artistHeader:{
        marginBottom:0,
    },
    center:{
       gap:30,
       borderWidth:0,
       position:'relative'
       

    },
    container:{
        padding:15,
        backgroundColor: 'rgba(100, 100, 100, 0.1)',
        
    },
    heading:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:20,
    },
    artistName:{
        fontSize:20,
        fontWeight:"700",
        position:'absolute',
        color:'white',
        fontSize:35,
        bottom:10,
        padding:10,
        fontFamily:'Gotham-Bold',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        borderRadius: 5,
    },
    image:{
        borderRadius:5,
        height:height * 0.4,
        borderWidth:0,
        width:width,
        resizeMode:"cover",
    },
    p:{
        textAlign:"left",
        fontFamily:"Inter"

    },
    programImage:{
        height:200,
        width:"fit",
        borderRadius:5,
    },

})

export default ArtistProfile;