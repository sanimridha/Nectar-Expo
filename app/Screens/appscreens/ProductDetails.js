import React from "react";
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableNativeFeedback,
    View,
    Share,
    ScrollView,
    ColorPropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, images, SIZES } from "../../constants";
import { Entypo } from "@expo/vector-icons";
import TouchableNative from "../../components/TouchableNative";
import { Feather } from "@expo/vector-icons";

const ProductDetails = ({ route, navigation }) => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: "Share this product with your friends",
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const {
        id,
        image,
        name,
        quantity,
        price,
        description,
        nutritions,
        rating,
    } = route.params;

    const headerContent = () => {
        return (
            <View
                style={{
                    marginTop: StatusBar.currentHeight,
                    backgroundColor: COLORS.lightGray3,
                    justifyContent: "center",
                    // alignItems: "center",
                    padding: "4%",
                }}
            >
                <View
                    style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                    }}
                >
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple(
                            COLORS.secondary,
                            true
                        )}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <View>
                            <Entypo
                                name="chevron-left"
                                size={28}
                                color="black"
                            />
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple(
                            COLORS.secondary,
                            true
                        )}
                        onPress={() => {
                            onShare();
                        }}
                    >
                        <View>
                            <Entypo
                                name="share-alternative"
                                size={24}
                                color="black"
                            />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    };
    const Content = () => {
        return (
            <ScrollView>
                <View
                    style={{
                        backgroundColor: COLORS.lightGray3,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "2%",
                        borderBottomRightRadius: 35,
                        borderBottomLeftRadius: 35,
                        paddingBottom: "15%",
                    }}
                >
                    <Image
                        source={image}
                        resizeMode={"contain"}
                        fadeDuration={500}
                    />
                </View>
                <View style={{ padding: "4%" }}>
                    <View style={{ flexDirection: "column" }}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: SIZES.h3,
                                }}
                            >
                                {name}
                            </Text>
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple(
                                    COLORS.primary2,
                                    true
                                )}
                            >
                                <View
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Feather
                                        name="heart"
                                        size={24}
                                        color={COLORS.secondary}
                                        style={{
                                            alignSelf: "center",
                                        }}
                                    />
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                        <Text
                            style={{
                                fontWeight: "700",
                                color: COLORS.secondary,
                            }}
                        >
                            {quantity}
                        </Text>
                    </View>
                    <View
                        style={{
                            marginTop: "5%",
                            flexDirection: "row",
                            // backgroundColor: "red",
                            height: 60,
                            justifyContent: "center",
                        }}
                    >
                        <View
                            style={{
                                // margin: "5%",
                                flexDirection: "row",
                                alignItems: "center",
                                alignContent: "center",
                                justifyContent: "space-evenly",
                                position: "absolute",
                                left: 10,
                            }}
                        >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple(
                                    COLORS.dark,
                                    true
                                )}
                            >
                                <View style={{ paddingLeft: "5%" }}>
                                    <Text
                                        style={{
                                            fontSize: 35,
                                            color: COLORS.secondary,
                                        }}
                                    >
                                        -
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                            <View
                                style={{
                                    height: 40,
                                    width: 40,
                                    borderRadius: 15,
                                    borderWidth: 0.6,
                                    borderColor: COLORS.secondary,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: 25,
                                }}
                            >
                                <Text
                                    style={{ fontSize: 18, fontWeight: "700" }}
                                >
                                    1
                                </Text>
                            </View>
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple(
                                    COLORS.primary,
                                    true
                                )}
                            >
                                <View style={{ left: 25 }}>
                                    <Text
                                        style={{
                                            fontSize: 35,
                                            color: COLORS.primary,
                                        }}
                                    >
                                        +
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View
                            style={{
                                position: "absolute",
                                right: 0,
                                justifyContent: "center",
                                alignItems: "center",
                                alignSelf: "center",
                            }}
                        >
                            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                                {price}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            // height: 1,
                            borderBottomWidth: 0.6,
                            width: "100%",
                            borderBottomColor: COLORS.secondary,
                            marginTop: 10,
                        }}
                    ></View>
                </View>
            </ScrollView>
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
            {Content()}
        </View>
    );
};

export default ProductDetails;

const styles = StyleSheet.create({});