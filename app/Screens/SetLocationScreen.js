import React, { useEffect, useState } from "react";
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, images, SIZES } from "../constants";
import { Entypo } from "@expo/vector-icons";
import { CustomButton } from "../components";

const SetLocationScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
            <ImageBackground
                source={images.topBlur}
                style={{ width: "100%", height: "25%", flex: 1 }}
            >
                <SafeAreaView>
                    <TouchableHighlight
                        underlayColor="#000E1727"
                        onPress={() => {
                            navigation.navigate("SigninWithPhoneNumber");
                        }}
                        style={{
                            height: 35,
                            width: 35,
                            borderRadius: 17.5,
                            margin: "4%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Entypo name="chevron-left" size={28} color="black" />
                    </TouchableHighlight>
                    <View
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={images.LocationImage}
                                // resizeMode={"center"}
                                style={{
                                    height: SIZES.height / 4,
                                    width: SIZES.width - 160,
                                    alignSelf: "center",
                                }}
                            />
                            <Text
                                style={{
                                    paddingTop: 20,
                                    fontSize: SIZES.h3,
                                    fontWeight: "700",
                                }}
                            >
                                Select Your Location
                            </Text>
                            <View
                                style={{
                                    width: "80%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        paddingTop: 10,
                                        fontSize: 15,
                                        fontWeight: "500",
                                        textAlign: "center",
                                        color: COLORS.secondary,
                                    }}
                                >
                                    Swithch on your location to stay in tune
                                    with what’s happening in your area
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* section for location picker */}
                    <View style={{ height: 20, backgroundColor: "red" }}></View>
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            // height: SIZES.height,
                            // width: SIZES.width,
                            // position: "absolute",
                            // bottom: 0,
                        }}
                    >
                        <CustomButton
                            // style={{ position: "absolute", bottom: 0 }}
                            onPress={() => {
                                navigation.navigate("LoginScreen");
                            }}
                            btnTitle={"Submit"}
                            color={COLORS.primary}
                        />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
};

export default SetLocationScreen;

const styles = StyleSheet.create({});
