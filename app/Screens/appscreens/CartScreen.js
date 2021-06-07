import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants";

const CartScreen = () => {
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
                        My Cart
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 15,
                        height: 1,
                        backgroundColor: COLORS.lightGray3,
                        width: SIZES.width,
                    }}
                ></View>
            </View>
        );
    };
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            {renderHeader()}
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({});
