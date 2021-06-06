import React, { useState } from "react";
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
    ViewPropTypes,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, images, SIZES } from "../../constants";
import { Entypo } from "@expo/vector-icons";
import TouchableNative from "../../components/TouchableNative";
import { Feather } from "@expo/vector-icons";
import { CustomButton } from "../../components";

const ProductDetails = ({ route, navigation }) => {
    const [count, setCount] = useState(1);
    const [arrowNumber, setArrowNumber] = useState(1);
    const [arrow, setArrow] = useState("chevron-left");
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
                        resizeMode={"stretch"}
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
                                            backgroundColor: "red",
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
                                onPress={() => {
                                    if (count != 1) {
                                        setCount(count - 1);
                                    }
                                }}
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
                                    {count}
                                </Text>
                            </View>
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple(
                                    COLORS.primary,
                                    true
                                )}
                                onPress={() => {
                                    setCount(count + 1);
                                }}
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
                            borderBottomColor: COLORS.lightGray5,
                            marginTop: 10,
                        }}
                    ></View>
                    <View style={{ paddingTop: 10 }}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: "700" }}>
                                Product Detail
                            </Text>
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple(
                                    COLORS.primary2,
                                    true
                                )}
                                onPress={() => {
                                    if (arrow == "chevron-left") {
                                        setArrow("chevron-down");
                                    }
                                    if (arrow == "chevron-down") {
                                        setArrow("chevron-left");
                                    }
                                }}
                            >
                                <View
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Feather
                                        name={arrow}
                                        size={24}
                                        color={"black"}
                                        style={{
                                            alignSelf: "center",
                                        }}
                                    />
                                </View>
                            </TouchableNativeFeedback>
                        </View>

                        <View>
                            <Text
                                style={{
                                    color: COLORS.secondary,
                                }}
                            >
                                {arrow == "chevron-down" && description}
                            </Text>
                            <View
                                style={{
                                    borderBottomWidth: 0.6,
                                    width: "100%",
                                    borderBottomColor: COLORS.lightGray5,
                                    paddingTop:
                                        arrow == "chevron-down" ? 10 : null,
                                }}
                            ></View>
                        </View>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple(
                                COLORS.lightGray5
                            )}
                        >
                            <View>
                                <View
                                    style={{
                                        paddingTop: 10,
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: "700",
                                        }}
                                    >
                                        Nutritions
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <View
                                            style={{
                                                backgroundColor: "#d9d9d9",
                                                borderRadius: 5,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginRight: 10,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 11,
                                                    padding: 3,
                                                    fontWeight: "700",
                                                    color: COLORS.secondary,
                                                }}
                                            >
                                                {nutritions}
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Feather
                                                name={"chevron-right"}
                                                size={24}
                                                color={"black"}
                                                style={{
                                                    alignSelf: "center",
                                                }}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        borderBottomWidth: 0.6,
                                        width: "100%",
                                        borderBottomColor: COLORS.lightGray5,
                                        paddingTop: 10,
                                    }}
                                ></View>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple(
                            COLORS.lightGray5
                        )}
                    >
                        <View>
                            <View
                                style={{
                                    paddingTop: 10,
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: "700",
                                    }}
                                >
                                    Review
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: "#d9d9d9",
                                            borderRadius: 5,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginRight: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 11,
                                                padding: 3,
                                                fontWeight: "700",
                                                color: COLORS.secondary,
                                            }}
                                        >
                                            {nutritions}
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Feather
                                            name={"chevron-right"}
                                            size={24}
                                            color={"black"}
                                            style={{
                                                alignSelf: "center",
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    borderBottomWidth: 0.6,
                                    width: "100%",
                                    borderBottomColor: COLORS.lightGray5,
                                    paddingTop: 10,
                                }}
                            ></View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{ height: 5000 }}></View>
            </ScrollView>
        );
    };
    const Bottom = () => {
        return (
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "transparent",
                    position: "absolute",
                    bottom: 5,
                    width: SIZES.width,
                }}
            >
                <CustomButton
                    onPress={() => {
                        navigation.navigate("Cart");
                    }}
                    btnTitle={"Add To Basket"}
                    color={COLORS.primary}
                />
            </View>
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
            {Bottom()}
        </View>
    );
};

export default ProductDetails;

const styles = StyleSheet.create({});
