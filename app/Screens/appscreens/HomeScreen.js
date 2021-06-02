import React from "react";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import CustomScreen from "../../components/CustomScreen";
import { COLORS, images } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
    const headerContent = () => {
        return (
            <View
                style={{
                    // backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    source={images.topIcon}
                    resizeMode={"contain"}
                    style={{ height: 40, width: 30 }}
                />
                <View style={{ flexDirection: "row" }}>
                    <Ionicons
                        name="location-sharp"
                        size={20}
                        color="black"
                        style={{ color: "#4C4F4D" }}
                    />
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "700",
                            color: "#4C4F4D",
                        }}
                    >
                        Dhaka, Banassre
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
        <ScrollView
            style={{
                marginTop: StatusBar.currentHeight,
                padding: "4%",
                backgroundColor: COLORS.white,
            }}
        >
            {headerContent()}
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
