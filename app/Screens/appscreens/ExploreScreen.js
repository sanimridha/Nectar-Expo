import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import TouchableNative from "../../components/TouchableNative";

const ExploreScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("#fff", false)}
            >
                <View
                    style={{
                        height: 50,
                        width: 100,
                        backgroundColor: "black",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: "white",
                            fontWeight: "bold",
                        }}
                    >
                        Button
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
