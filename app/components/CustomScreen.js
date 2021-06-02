import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";

const CustomScreen = () => {
    return (
        <ScrollView
            style={{
                marginTop: StatusBar.currentHeight,
                padding: "4%",
                backgroundColor: COLORS.white,
            }}
        ></ScrollView>
    );
};

export default CustomScreen;

const styles = StyleSheet.create({});
