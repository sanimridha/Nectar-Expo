import React from "react";
import {
    Button,
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

const SigninWithPhoneNumber = ({ navigation }) => {
    const textInputRef = React.useRef();

    const focusOnInput = e => {
        textInputRef.current.focus(e);
    };

    navigation.addListener("focus", focusOnInput);
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
                            navigation.goBack();
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
                    <View style={{ paddingLeft: "6%", paddingTop: "10%" }}>
                        <Text
                            style={{ fontSize: SIZES.h3, fontWeight: "bold" }}
                        >
                            Enter your mobile number
                        </Text>
                        <Text
                            style={{
                                color: COLORS.secondary,
                                paddingTop: "5%",
                            }}
                        >
                            Mobile Number
                        </Text>
                    </View>
                    <View
                        style={{
                            width: "90%",
                            justifyContent: "center",
                            alignSelf: "center",
                            marginTop: "2%",
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                borderBottomWidth: 0.5,
                                borderColor: "#000",
                            }}
                        >
                            <Image
                                source={images.bd}
                                style={{
                                    padding: 10,
                                    margin: 5,
                                    height: 25,
                                    width: 25,
                                    resizeMode: "contain",
                                    alignItems: "center",
                                }}
                            />

                            <TextInput
                                ref={textInputRef}
                                style={{ flex: 1, fontSize: 20 }}
                                keyboardType={"numeric"}
                                defaultValue="+880"
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>

            <View style={{ position: "absolute", bottom: 0, right: 0 }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        navigation.navigate("VerificationScreen");
                    }}
                    style={{
                        height: 60,
                        width: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.primary,
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "2%",
                    }}
                >
                    <Entypo name="chevron-right" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SigninWithPhoneNumber;

const styles = StyleSheet.create({});
