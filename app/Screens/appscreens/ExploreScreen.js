import React from "react";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableNativeFeedback,
    View,
} from "react-native";
import CustomScreen from "../../components/CustomScreen";
import { COLORS, images, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const ExploreScreen = () => {
    const headerContent = () => {
        return (
            <View
                style={{
                    marginTop: StatusBar.currentHeight,
                    backgroundColor: COLORS.white,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4%",
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "700",
                            color: "#4C4F4D",
                        }}
                    >
                        Find Product
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "5%",
                        backgroundColor: COLORS.lightGray3,
                        height: 45,
                        borderRadius: 10,
                    }}
                >
                    <Ionicons
                        name="search"
                        size={22}
                        style={{
                            paddingLeft: "5%",
                            paddingRight: "2%",
                            color: COLORS.black,
                        }}
                    />

                    <TextInput
                        style={{ flex: 1, fontSize: 16 }}
                        placeholder={"Search Store"}
                        placeholderTextColor={COLORS.secondary}
                    />
                </View>
            </View>
        );
    };
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
            }}
        >
            {headerContent()}
        </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
