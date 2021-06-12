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
import { Picker } from "@react-native-picker/picker";

import { COLORS, images, SIZES } from "../constants";
import { Entypo } from "@expo/vector-icons";
import { CustomButton } from "../components";

const SetLocationScreen = ({ navigation }) => {
    const [selectedArea, setSelectedArea] = useState("Mohammadpur");
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
                    <View style={{ padding: "4%", paddingTop: 90 }}>
                        <Text style={{ fontSize: 15, color: COLORS.secondary }}>
                            Your Zone
                        </Text>
                        <Picker
                            selectedValue={selectedArea}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedArea(itemValue)
                            }
                            style={{
                                width: "100%",
                                height: 40,
                            }}
                        >
                            <Picker.Item label="Mohammadpur" value="java" />
                            <Picker.Item label="Dhanmondi" value="js" />
                            <Picker.Item label="Adabor" value="js" />
                            <Picker.Item label="Farmgate" value="js" />
                            <Picker.Item label="Kawranbazar" value="js" />
                            <Picker.Item label="Uttara" value="js" />
                            <Picker.Item label="Badda" value="js" />
                            <Picker.Item label="Gulshan" value="js" />
                            <Picker.Item label="Banasree" value="js" />
                            <Picker.Item label="Rampura" value="js" />
                            <Picker.Item label="Mohammadpur" value="java" />
                            <Picker.Item label="Dhanmondi" value="js" />
                            <Picker.Item label="Adabor" value="js" />
                            <Picker.Item label="Farmgate" value="js" />
                            <Picker.Item label="Kawranbazar" value="js" />
                            <Picker.Item label="Uttara" value="js" />
                            <Picker.Item label="Badda" value="js" />
                            <Picker.Item label="Gulshan" value="js" />
                            <Picker.Item label="Banasree" value="js" />
                            <Picker.Item label="Rampura" value="js" />
                        </Picker>
                        <View
                            style={{
                                height: 1,
                                borderWidth: 1,
                                borderColor: COLORS.lightGray3,
                            }}
                        ></View>
                        <Text
                            style={{
                                fontSize: 15,
                                color: COLORS.secondary,
                                paddingTop: "10%",
                            }}
                        >
                            Your Area
                        </Text>
                        <Picker
                            selectedValue={selectedArea}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedArea(itemValue)
                            }
                            style={{
                                width: "100%",
                                height: 40,
                            }}
                        >
                            <Picker.Item label="Mohammadpur" value="java" />
                            <Picker.Item label="Dhanmondi" value="js" />
                            <Picker.Item label="Adabor" value="js" />
                            <Picker.Item label="Farmgate" value="js" />
                            <Picker.Item label="Kawranbazar" value="js" />
                            <Picker.Item label="Uttara" value="js" />
                            <Picker.Item label="Badda" value="js" />
                            <Picker.Item label="Gulshan" value="js" />
                            <Picker.Item label="Banasree" value="js" />
                            <Picker.Item label="Rampura" value="js" />
                            <Picker.Item label="Mohammadpur" value="java" />
                            <Picker.Item label="Dhanmondi" value="js" />
                            <Picker.Item label="Adabor" value="js" />
                            <Picker.Item label="Farmgate" value="js" />
                            <Picker.Item label="Kawranbazar" value="js" />
                            <Picker.Item label="Uttara" value="js" />
                            <Picker.Item label="Badda" value="js" />
                            <Picker.Item label="Gulshan" value="js" />
                            <Picker.Item label="Banasree" value="js" />
                            <Picker.Item label="Rampura" value="js" />
                        </Picker>
                        <View
                            style={{
                                height: 1,
                                borderWidth: 1,
                                borderColor: COLORS.lightGray3,
                            }}
                        ></View>
                    </View>

                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            // height: SIZES.height,
                            width: SIZES.width,

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
