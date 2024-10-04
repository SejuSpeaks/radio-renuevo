import { View,Text,Image,FlatList, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import shows from "../data/shows";

const {width} = Dimensions.get('window')



const ShowContainer = ({show}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate("ShowDetails", show)}>
                <Image style={styles.image} source={show.image}/>
                <Text style={styles.text}>{show.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const DailyShows = () => {
    return (
        <View>
            <Text style={styles.heading}>Shows</Text>
            <FlatList
            style={styles.listContainer}
            data={shows}
            renderItem={({item})=> <ShowContainer show={item}/>}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        gap:5,
        display:'flex',
        flexDirection:'row',
    },

    text:{
        alignContent:'center',
        textAlign:'center'
    },

    container:{
        justifyContent:"center",
        alignItems:'center',
        marginLeft:10,
        
    },
    heading: {
        fontSize: 24,
        paddingLeft:"5%",
        fontWeight: 'bold',
        marginBottom: 16,
      },
      image:{
        height:150,
        borderRadius: 100,
        width: 150,
        resizeMode:'cover'

      }
})

export default DailyShows;