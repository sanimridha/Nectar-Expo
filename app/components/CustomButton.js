import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants";
import { FontAwesome } from "@expo/vector-icons";

const CustomButton = ({
    color,
    iconName,
    iconSize,
    iconColor,
    btnTitle,
    onPress,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.5}
            style={{
                marginTop: "5%",
                height: SIZES.height / 13,
                width: "85%",
                backgroundColor: color,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                flexDirection: "row",
            }}
        >
            <View>
                <FontAwesome
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                />
            </View>
            <View style={{ padding: 25 }}>
                <Text
                    style={{
                        fontSize: SIZES.width / 20,
                        fontWeight: "700",
                        color: COLORS.white,
                    }}
                >
                    {btnTitle}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({});
