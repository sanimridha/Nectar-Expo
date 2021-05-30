import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { images } from "./app/constants";
import Onboarding from "./app/Screens/Onboarding";

export default function App() {
    return (
        <View style={styles.container}>
            <Onboarding />
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
