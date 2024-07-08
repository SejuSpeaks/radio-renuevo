import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import HomeBar from "./HomeBar";

const Live = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Live</Text>

            <View style={styles.spacer} />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    spacer: {
        flex: 1,
    },
});

export default Live;