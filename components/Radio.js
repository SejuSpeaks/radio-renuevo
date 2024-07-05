import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";

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


const ArtistProfile = ({artist}) => {
    return(
        <View style={styles.artistContainer}>
            <Image source={artist.profile_image} style={styles.image}/>
            <Text>{artist.name}</Text>
        </View>
    )
}

const Radio = () => {
    return (
        <View>
            <Text style={styles.heading}>Presentadores</Text>

            <View style={styles.itemContainer}>
                <FlatList 
                data={artistData} 
                renderItem={({item})=> <ArtistProfile artist={item}/>}
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