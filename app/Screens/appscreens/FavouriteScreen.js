import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Feather } from "@expo/vector-icons";

const FavouriteScreen = () => {
    const renderHeader = () => {
        return (
            <View
                style={{
                    marginTop: StatusBar.currentHeight,
                    backgroundColor: COLORS.white,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "4%",
                }}
            >
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>
                        Favoruite
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 15,
                        height: 1,
                        backgroundColor: COLORS.lightGray5,
                        width: SIZES.width,
                    }}
                ></View>
            </View>
        );
    };
    const renderBody = () => {
        return (
            <ScrollView>
                <View style={{ height: 5000 }}></View>
            </ScrollView>
        );
    };
    const NoItemFound = () => {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Feather
                    name="alert-triangle"
                    size={100}
                    color={COLORS.lightGray3}
                />
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: "700",
                        color: COLORS.lightGray3,
                        textAlign: "center",
                    }}
                >
                    Your favourite list is empty!
                </Text>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderHeader()}
            {/* {renderBody()} */}
            {NoItemFound()}
        </View>
    );
};

export default FavouriteScreen;

const styles = StyleSheet.create({});
