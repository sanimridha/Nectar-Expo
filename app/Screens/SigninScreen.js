import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, images, SIZES } from "../constants";
import { CustomButton } from "../components";

const SigninScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState(false);
    const phoneRef = useRef(undefined);
    return (
        <View style={{ backgroundColor: "#FCFCFC", flex: 2 }}>
            <Image
                source={images.fruitsBag}
                // resizeMode={"contain"}
                style={{ height: SIZES.height / 2, width: "100%" }}
            />
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        width: "60%",
                        marginLeft: "5%",
                        // position: "absolute",
                        // top: 0,
                    }}
                >
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                        Get your groceries with nectar
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{ margin: "5%" }}
                    onPress={() => {
                        navigation.navigate("SigninWithPhoneNumber");
                    }}
                >
                    <View
                        style={{
                            height: 50,

                            // backgroundColor: "green",
                            justifyContent: "center",
                        }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Image
                                source={images.bd}
                                resizeMode={"contain"}
                                style={{ height: 30, width: 30 }}
                            />
                            <Text style={{ fontSize: 20, paddingLeft: 20 }}>
                                +880
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            height: 0.9,
                            backgroundColor: COLORS.darkgray,
                        }}
                    ></View>
                </TouchableOpacity>
                <View style={{ justifyContent: "center", paddingTop: "2%" }}>
                    <Text
                        style={{
                            color: COLORS.secondary,
                            fontWeight: "bold",
                            alignSelf: "center",
                        }}
                    >
                        Or connect with social media
                    </Text>
                </View>
                <View
                    style={{
                        justifyContent: "center",
                        // paddingTop: "5%",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <CustomButton
                        onPress={() => {
                            console.log("Google");
                        }}
                        color={"#5383EC"}
                        btnTitle="Continue with Google"
                        iconName={"google"}
                        iconColor={COLORS.white}
                        iconSize={30}
                    />

                    <CustomButton
                        onPress={() => {
                            console.log("Facebook");
                        }}
                        color={"#4A66AC"}
                        btnTitle="Continue with Facebook"
                        iconName={"facebook-f"}
                        iconColor={COLORS.white}
                        iconSize={30}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};

export default SigninScreen;

const styles = StyleSheet.create({});
