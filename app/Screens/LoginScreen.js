import React, { useEffect, useState } from "react";
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, images, SIZES } from "../constants";
import { Entypo } from "@expo/vector-icons";
import { CustomButton } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { APP_URL } from "../../connection/API";
const LoginScreen = ({ navigation }) => {
    const [eyeControl, setEyeControl] = useState("eye-with-line");
    const [visible, setVisible] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userData, setUserData] = useState([]);
    const [token, setToken] = useState();
    useEffect(() => {}, []);
    const loginCredentials = async () => {
        try {
            await axios
                .post(APP_URL + "api/auth/login", {
                    email: email,
                    password: password,
                })
                .then(function (response) {
                    setUserData(response);
                    //console.log(userData.data.data.name); //to get the name (userData.data.data.name)
                    setEmail(null);
                    setPassword(null);
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };
    const userCredentials = async () => {
        try {
            const data = JSON.stringify(userData);
            await AsyncStorage.setItem("userinfo", data);
        } catch (error) {
            // Error saving data
            console.log(error);
        }
    };
    const getUserCredentials = async () => {
        try {
            const value = await AsyncStorage.getItem("userinfo");
            const data = JSON.parse(value);
            if (data) {
                setToken(data.data.token);
                navigation.navigate("Tabs");
            }
        } catch (error) {
            // Error retrieving data
            console.log(
                "This error from token issue means invalid email or password !" +
                    error
            );
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
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
                                    Log in
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontWeight: "500",
                                        color: COLORS.secondary,
                                    }}
                                >
                                    Enter your emails and password
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
                                    value={email}
                                    onChangeText={setEmail}
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
                                        secureTextEntry={visible}
                                        value={password}
                                        onChangeText={setPassword}
                                    />
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        onPress={() => {
                                            if (eyeControl == "eye") {
                                                setEyeControl("eye-with-line");
                                                setVisible(true);
                                            }
                                            if (eyeControl == "eye-with-line") {
                                                setEyeControl("eye");
                                                setVisible(false);
                                            }
                                        }}
                                    >
                                        <Entypo
                                            name={eyeControl}
                                            size={24}
                                            color={COLORS.secondary}
                                            style={{ padding: 5 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: "5%" }}>
                                    <Text
                                        style={{
                                            fontSize: 15,
                                            position: "absolute",
                                            right: 0,
                                        }}
                                    >
                                        Forgot Password?
                                    </Text>
                                    <View
                                        style={{
                                            marginTop: "15%",
                                            width: SIZES.width,
                                            alignSelf: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <CustomButton
                                            onPress={() => {
                                                // navigation.navigate("Tabs")
                                                loginCredentials();
                                                userCredentials();
                                                getUserCredentials();
                                            }}
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
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});
