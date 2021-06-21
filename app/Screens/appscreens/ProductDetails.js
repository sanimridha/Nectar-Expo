import React, { useEffect, useState } from "react";
import {
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
    Share,
    ScrollView,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import { CustomButton } from "../../components";
import axios from "axios";
import { APP_URL } from "../../../connection/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductDetails = ({ route, navigation }) => {
    const [count, setCount] = useState(1);
    const [arrow, setArrow] = useState("chevron-left");
    const [loved, setLoved] = useState("heart-o");

    const [userId, setUserId] = useState();
    const [token, setToken] = useState();
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
    useEffect(() => {
        getUserInfo();
    }, []);
    const getUserInfo = async () => {
        try {
            const value = await AsyncStorage.getItem("userinfo");
            const data = JSON.parse(value);
            if (data !== null) {
                // We have data!!
                console.log("data from Product Details  screen");
                setUserId(data.data.data.id);
                setToken(data.data.token);
            }
        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
    };

    const {
        image,
        title,
        quantity,
        price,
        long_description,
        total_favourites,
        id,
    } = route.params;
    console.log("logging from product details::", id);
    // ________this for shorting the title_________
    let x = title;
    let useTitle = x.split(" ").slice(0, 2).join(" ");
    // _________________________________________________
    const headerContent = () => {
        return (
            <View
                style={{
                    marginTop: StatusBar.currentHeight,
                    backgroundColor: COLORS.lightGray3,
                    justifyContent: "center",
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
            <ScrollView style={{}}>
                <View>
                    <View
                        style={{
                            backgroundColor: COLORS.lightGray3,
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "2%",
                            borderBottomRightRadius: 35,
                            borderBottomLeftRadius: 35,
                            paddingBottom: "15%",
                            height: SIZES.height / 3,
                            // flex: 1,
                        }}
                    >
                        <Image
                            source={{ uri: image }}
                            resizeMode={"stretch"}
                            style={{ height: "100%", width: "90%" }}
                            fadeDuration={500}
                        />
                    </View>
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
                                {useTitle}
                            </Text>
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple(
                                    COLORS.primary2,
                                    true
                                )}
                                onPress={() => {
                                    if (loved == "heart-o") {
                                        setLoved("heart");
                                    }
                                    if (loved == "heart") {
                                        setLoved("heart-o");
                                    }
                                    const config = {
                                        headers: {
                                            Authorization: `Bearer ${token}`,
                                        },
                                    };
                                    axios
                                        .post(
                                            APP_URL + "api/wishlist",
                                            {
                                                user_id: userId,
                                                product_id: id,
                                            },
                                            config
                                        )
                                        .then(function (response) {
                                            console.log(response);
                                        })
                                        .catch(function (error) {
                                            console.log(error);
                                        });
                                }}
                            >
                                <View
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <FontAwesome
                                        name={loved}
                                        size={24}
                                        color={
                                            loved == "heart"
                                                ? "red"
                                                : COLORS.secondary
                                        }
                                        style={{ alignSelf: "center" }}
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

                    <View style={{ marginTop: 10 }}>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.Ripple(
                                COLORS.lightGray5,
                                false
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
                            <View>
                                <View
                                    style={{
                                        borderBottomWidth: 1,
                                        width: "100%",
                                        borderBottomColor: COLORS.lightGray3,
                                    }}
                                ></View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingTop: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            fontWeight: "700",
                                        }}
                                    >
                                        Product Detail
                                    </Text>

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
                                </View>

                                <View>
                                    <Text
                                        style={{
                                            color: COLORS.secondary,
                                            fontSize: 13,
                                        }}
                                    >
                                        {arrow == "chevron-down" &&
                                            long_description}
                                    </Text>
                                    <View
                                        style={{
                                            borderBottomWidth: 1,
                                            width: "100%",
                                            borderBottomColor:
                                                COLORS.lightGray3,
                                            paddingTop:
                                                arrow == "chevron-down"
                                                    ? 10
                                                    : null,
                                        }}
                                    ></View>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
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
                                                {total_favourites}
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
                                        borderBottomWidth: 1,
                                        width: "100%",
                                        borderBottomColor: COLORS.lightGray3,
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
                                            borderRadius: 5,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginRight: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 15,
                                                padding: 3,
                                                fontWeight: "bold",
                                                color: "#ff8c00",
                                            }}
                                        >
                                            ★★★★★
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
                                    borderBottomWidth: 1,
                                    width: "100%",
                                    borderBottomColor: COLORS.lightGray3,
                                    paddingTop: 10,
                                }}
                            ></View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{ height: 80 }}></View>
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
