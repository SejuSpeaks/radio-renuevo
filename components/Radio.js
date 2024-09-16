import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ArtistProfile from "./ArtistProfile";

const {width} = Dimensions.get('window')

import artistData from "../data/artistData";


const ArtistIcon = ({artist}) => {
    //shorten artist names
    let name;
    if (artist.name.length > 20) {
        name = artist.name.slice(0, 20) + '...';
    }
    else name = artist.name

    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={()=> navigation.navigate("ArtistProfile", artist)}>
            <View style={styles.artistContainer}>
                <Image source={artist.profile_image} style={styles.image}/>
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Radio = () => {
    return (
        <View>
            <Text style={styles.heading}>Hosts</Text>

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

/* add the idea of being able to put stories on your page */

const styles = StyleSheet.create(
    {
        heading: {
            fontSize: 24,
            paddingLeft:"5%",
            fontWeight: 'bold',
            marginBottom: 16,
          },
        image:{
            borderRadius: 5,
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