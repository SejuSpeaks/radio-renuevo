import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ArtistProfile from "./ArtistProfile";

const {width} = Dimensions.get('window')

const artistData = [
    {
        name:" Pastora Ivelisse Medina",
        profile_image: require("../assets/mama.png")
    },
    {
        name:"El Capellan",
        profile_image: require("../assets/events/Image.png")
    },
    {
        name:"Marbelis Candela",
        profile_image: require("../assets/mama.png")
    },
    {
        name:" Pastora Ivelisse Medina",
        profile_image: require("../assets/mama.png")
    },

]


const ArtistIcon = ({artist}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={()=> navigation.navigate("ArtistProfile", artist)}>
            <View style={styles.artistContainer}>
                <Image source={artist.profile_image} style={styles.image}/>
                <Text>{artist.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Radio = () => {
    return (
        <View>
            <Text style={styles.heading}>Presentadores</Text>

            <View style={styles.itemContainer}>
                <FlatList 
                data={artistData} 
                renderItem={({item})=> <ArtistIcon artist={item}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        heading: {
            fontSize: 24,
            padding:10,
            fontWeight: 'bold',
            marginBottom: 16,
          },
        image:{
            borderRadius: '100%',
            height: 150,
            width:150,
        },
        itemContainer:{
            padding:10,
        },
        artistContainer:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginRight:10,
            gap:5,
        }
    }
)

export default Radio;