import React, { useEffect, useState } from "react";
import {
    Image,
    ImageBackground,
    ScrollView,
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

const SignupScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
            <ImageBackground
                source={images.topBlur}
                style={{ width: "100%", height: "25%", flex: 1 }}
            >
                <SafeAreaView>
                    <View
                        style={{
                            justifyContent: "center",
                            padding: "5%",
                            paddingTop: "10%",
                        }}
                    >
                        <View
                            style={{
                                justifyContent: "center",
                                // alignItems: "center",
                            }}
                        >
                            <Image
                                source={images.topIcon}
                                // resizeMode={""}
                                style={{
                                    height: 60,
                                    width: 50,
                                    alignSelf: "center",
                                    // marginTop: "10%",
                                }}
                            />
                            <View>
                                <Text
                                    style={{
                                        paddingTop: "20%",
                                        fontSize: SIZES.h3,
                                        fontWeight: "700",
                                        paddingBottom: 10,
                                    }}
                                >
                                    Sign Up
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontWeight: "500",
                                        color: COLORS.secondary,
                                    }}
                                >
                                    Enter your credentials to continue
                                </Text>
                            </View>
                            <View style={{ marginTop: "10%" }}>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontWeight: "700",
                                        color: COLORS.secondary,
                                    }}
                                >
                                    Username
                                </Text>
                                <TextInput
                                    style={{
                                        marginTop: "2%",
                                        fontSize: 15,
                                        borderBottomWidth: 0.5,
                                        borderBottomColor: COLORS.secondary,
                                    }}
                                    placeholder={"Jhon"}
                                />
                            </View>
                            <View style={{ marginTop: "10%" }}>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontWeight: "700",
                                        color: COLORS.secondary,
                                    }}
                                >
                                    Email
                                </Text>
                                <TextInput
                                    style={{
                                        marginTop: "2%",
                                        fontSize: 15,
                                        borderBottomWidth: 0.5,
                                        borderBottomColor: COLORS.secondary,
                                    }}
                                    keyboardType={"email-address"}
                                    placeholder={"example@domain.com"}
                                />
                            </View>
                            <View style={{ marginTop: "10%" }}>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontWeight: "700",
                                        color: COLORS.secondary,
                                    }}
                                >
                                    Password
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderBottomWidth: 0.5,
                                        borderBottomColor: COLORS.secondary,
                                    }}
                                >
                                    <TextInput
                                        style={{
                                            flex: 1,
                                            fontSize: 17,
                                            fontWeight: "bold",
                                        }}
                                        secureTextEntry={true}
                                    />
                                    <Entypo
                                        name="eye-with-line"
                                        size={24}
                                        color={COLORS.secondary}
                                        style={{ padding: 5 }}
                                    />
                                </View>
                                <View
                                    style={{
                                        marginTop: "5%",
                                    }}
                                >
                                    <View>
                                        <Text
                                            style={{
                                                color: COLORS.secondary,
                                            }}
                                        >
                                            By continuing you agree to our{" "}
                                            <Text
                                                style={{
                                                    color: COLORS.primary,
                                                    fontWeight: "700",
                                                }}
                                            >
                                                Terms of Service{" "}
                                            </Text>
                                            <Text
                                                style={{
                                                    color: COLORS.secondary,
                                                }}
                                            >
                                                and{" "}
                                            </Text>
                                            <Text
                                                style={{
                                                    color: COLORS.primary,
                                                    fontWeight: "700",
                                                }}
                                            >
                                                Privacy Policy.
                                            </Text>
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: "15%",
                                            width: SIZES.width,
                                            alignSelf: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <CustomButton
                                            color={COLORS.primary}
                                            btnTitle={"Log In"}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            marginTop: "5%",
                                            width: SIZES.width,
                                            alignSelf: "center",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: "700",
                                                fontSize: 15,
                                            }}
                                        >
                                            Don’t have an account?{" "}
                                        </Text>
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            onPress={() => {
                                                navigation.navigate(
                                                    "SignupScreen"
                                                );
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontWeight: "700",
                                                    fontSize: 15,
                                                    color: COLORS.primary,
                                                }}
                                            >
                                                {" "}
                                                Signup
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
            <View style={{ height: 50 }}></View>
        </ScrollView>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({});
