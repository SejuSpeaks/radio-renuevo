import { View,Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    firstWord:{
        color:'#FC81C9',
        fontSize:48,
        fontWeight:'600'
    },
    restOfTitle:{
        color:'black',
        fontSize:48,
        fontWeight:"600"
    }
})

changeTitleColor = (title) => {
    const words = title.split(" ");
    const firstWord = words[0];
    const restOfTitle = words.slice(1).join(" ");

const formattedTitle = firstWord + " " + restOfTitle;

    return (
        <View style={{marginBottom:20, marginTop:20}}>
            <Text style={styles.firstWord}>{firstWord} <Text style={styles.restOfTitle}>{restOfTitle}</Text> </Text>
        </View>
    );
}


//take title
//split by space " "
//variable for first word
//variable for rest of title

//later on i can make it a key word if anything on the data

export default changeTitleColor;