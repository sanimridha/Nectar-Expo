import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

const TouchableNative = () => {
    return (
        <View>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("#fff", false)}
            ></TouchableNativeFeedback>
        </View>
    );
};

export default TouchableNative;

const styles = StyleSheet.create({});
