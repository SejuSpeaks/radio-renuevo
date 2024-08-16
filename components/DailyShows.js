import { View,Text,Image,FlatList, StyleSheet, Dimensions } from "react-native";


const {width} = Dimensions.get('window')

const shows = [
    { image: require("../assets/radioLogo.png") },
    {image:require('../assets/titoritmo.jpg')},
]

const ShowContainer = ({show}) => {
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={show.image}/>
        </View>
    )
}

const DailyShows = () => {
    return (
        <View>
            <Text style={styles.heading}>Daily Shows</Text>
            <FlatList
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
    container:{
        justifyContent:"center",
        alignItems:'center'
    },
    heading: {
        fontSize: 24,
        paddingLeft:"5%",
        fontWeight: 'bold',
        marginBottom: 16,
      },
      image:{
        height:320,
        width: width ,
        resizeMode:'cover'

      }
})

export default DailyShows;