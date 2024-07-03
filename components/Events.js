import {View, Text, StyleSheet} from 'react-native';

const Events =() => {
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Eventos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 50,
        width: 150,
        justifyContent:'center',
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
    },
    container: {
        paddingLeft:10,
        
    },
    icon: {
        height: 30,
        width: 20
    }
})

export default Events;