import React from "react";
import {
    Button,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
} from "react-native-safe-area-context";
import { COLORS, images, SIZES, themes } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const Onboarding = ({ navigation }) => {
    // console.log(themes.height);
    return (
        <ImageBackground
            source={images.Onboarding}
            style={{ height: "100%", width: "100%" }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        width: "100%",
                        justifyContent: "center",
                        alignSelf: "center",
                        bottom: 0,
                        position: "absolute",
                    }}
                >
                    <LinearGradient
                        colors={["#00000000", "#000E1727", "#000000"]}
                    >
                        <View style={{ alignItems: "center" }}>
                            <Image
                                source={images.WhiteCarrot}
                                resizeMode={"contain"}
                                style={{
                                    height: 60,
                                    width: 60,
                                    marginBottom: 20,
                                }}
                            />
                        </View>
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: SIZES.h1,
                                    fontWeight: "700",
                                    color: COLORS.white,
                                }}
                            >
                                Welcome
                            </Text>
                            <Text
                                style={{
                                    fontSize: SIZES.h1,
                                    fontWeight: "700",
                                    color: COLORS.white,
                                    bottom: 10,
                                }}
                            >
                                to our store
                            </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    bottom: 10,
                                }}
                            >
                                Ger your groceries in as fast as one hour
                            </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("LoginScreen");
                                }}
                                activeOpacity={0.5}
                                style={{
                                    height: SIZES.height / 13,
                                    width: SIZES.width - 80,
                                    backgroundColor: COLORS.primary,
                                    marginBottom: 90,
                                    marginTop: 20,
                                    borderRadius: 20,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        fontSize: 18,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Get Started
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default Onboarding;

const styles = StyleSheet.create({});
