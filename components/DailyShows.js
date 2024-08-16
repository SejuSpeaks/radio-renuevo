import { View,Text,Image,FlatList, StyleSheet, Dimensions } from "react-native";


const {width} = Dimensions.get('window')

const shows = [
    { image: require("../assets/radioLogo.png") },
    {image:require('../assets/titoritmo.jpg')},
    {image:require('../assets/events/Image.png')},
]

const ShowContainer = ({show}) => {
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={show.image}/>
        <Text>Show</Text>
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
        borderRadius: 5,
        width: 150,
        resizeMode:'cover'

      }
})

export default DailyShows;