import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ArtistProfile from "./ArtistProfile";

const {width} = Dimensions.get('window')

const artistData = [
    {
        name:" Pastora Ivelisse Medina",
        profile_image: require("../assets/mama.png"),
        bio:"La Pastora [Nombre], una apasionada líder espiritual y comunicadora, ha dedicado su vida a compartir el mensaje de esperanza y amor de Cristo a través de su ministerio y su programa de radio. Con un corazón ferviente por servir a su comunidad, [Nombre] ha sido una voz influyente y guía espiritual para innumerables personas.",
        program:require("../assets/ivelisse.gif"),
    },
    {
        name:"El Capellan",
        profile_image: require("../assets/capellan.jpg"),
        bio:"Integer at egestas arcu. Integer a condimentum orci. Proin enim felis, gravida dignissim posuere sed, tincidunt vel purus. Vivamus vitae venenatis ipsum. Phasellus bibendum libero sed enim egestas sagittis. Vivamus porttitor ante id velit aliquam, vel ornare metus dictum. Vivamus scelerisque ligula ac nunc pretium posuere. Cras finibus enim non lectus dictum, ac suscipit leo vulputate. Aenean dignissim ac ligula eu aliquam. Quisque eget nisl scelerisque, maximus orci ac, gravida tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque posuere laoreet augue, vitae facilisis velit egestas ac. Cras id risus pharetra, dictum tellus viverra, egestas sem. Vivamus nec porta tellus.",
        program:require("../assets/events/Image.png"),
    },
    {
        name:"Marbelis Candela",
        profile_image: require("../assets/marbelis.png"),
        bio:"Integer at egestas arcu. Integer a condimentum orci. Proin enim felis, gravida dignissim posuere sed, tincidunt vel purus. Vivamus vitae venenatis ipsum. Phasellus bibendum libero sed enim egestas sagittis. Vivamus porttitor ante id velit aliquam, vel ornare metus dictum. Vivamus scelerisque ligula ac nunc pretium posuere. Cras finibus enim non lectus dictum, ac suscipit leo vulputate. Aenean dignissim ac ligula eu aliquam. Quisque eget nisl scelerisque, maximus orci ac, gravida tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque posuere laoreet augue, vitae facilisis velit egestas ac. Cras id risus pharetra, dictum tellus viverra, egestas sem. Vivamus nec porta tellus.",
    },
    {
        name:" Tito",
        profile_image: require("../assets/mama.png"),
        bio:"Integer at egestas arcu. Integer a condimentum orci. Proin enim felis, gravida dignissim posuere sed, tincidunt vel purus. Vivamus vitae venenatis ipsum. Phasellus bibendum libero sed enim egestas sagittis. Vivamus porttitor ante id velit aliquam, vel ornare metus dictum. Vivamus scelerisque ligula ac nunc pretium posuere. Cras finibus enim non lectus dictum, ac suscipit leo vulputate. Aenean dignissim ac ligula eu aliquam. Quisque eget nisl scelerisque, maximus orci ac, gravida tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque posuere laoreet augue, vitae facilisis velit egestas ac. Cras id risus pharetra, dictum tellus viverra, egestas sem. Vivamus nec porta tellus.",
    },

]


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