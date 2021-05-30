import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { images } from "./app/constants";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your --app!</Text>
            <StatusBar style="auto" />
            <Image source={images.fruitsBag} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
