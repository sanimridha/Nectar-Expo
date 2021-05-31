import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, images, SIZES } from "../constants";
import PhoneInput from "react-native-phone-input";

const SigninScreen = () => {
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
                        position: "absolute",
                        top: 0,
                    }}
                >
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                        Get your groceries with nectar
                    </Text>
                    <TouchableOpacity>
                        <PhoneInput
                            style={{
                                borderColor: "#ddd",
                                borderWidth: 2,
                                borderRadius: 2,
                                padding: 16,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default SigninScreen;

const styles = StyleSheet.create({});
