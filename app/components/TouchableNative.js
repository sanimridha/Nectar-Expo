import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

const TouchableNative = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("#fff", false)}
            ></TouchableNativeFeedback>
        </View>
    );
};

export default TouchableNative;

const styles = StyleSheet.create({});
