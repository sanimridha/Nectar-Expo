import React from "react";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
} from "react-native";
import { COLORS, images, SIZES } from "../../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const AccountScreen = ({ navigation }) => {
    const renderBody = () => {
        return (
            <ScrollView>
                <View
                    style={{
                        marginTop: StatusBar.currentHeight,
                        backgroundColor: COLORS.white,
                        justifyContent: "center",
                        // alignItems: "center",
                        padding: "4%",
                    }}
                >
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={images.user}
                            // resizeMode={"contain"}
                            style={{ height: 60, width: 60 }}
                        />
                        <View
                            style={{
                                paddingLeft: "5%",
                                justifyContent: "center",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{ fontSize: 18, fontWeight: "700" }}
                                >
                                    Mosh Hamedani
                                </Text>
                                <MaterialCommunityIcons
                                    name="pencil-outline"
                                    size={25}
                                    color={COLORS.primary}
                                    style={{ paddingLeft: 10 }}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    color: COLORS.secondary,
                                }}
                            >
                                moshhamedani@gmail.com
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        height: 1,
                        backgroundColor: COLORS.lightGray3,
                        width: SIZES.width,
                        marginTop: "2%",
                    }}
                ></View>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(
                        COLORS.lightGray5
                    )}
                >
                    <View>
                        <View
                            style={{
                                // marginTop: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "4%",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                }}
                            >
                                <Feather
                                    name="shopping-bag"
                                    size={24}
                                    color="black"
                                />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: "700",
                                        paddingLeft: 30,
                                    }}
                                >
                                    Orders
                                </Text>
                            </View>
                            <Entypo
                                name="chevron-right"
                                size={24}
                                color="black"
                            />
                        </View>
                        <View
                            style={{
                                height: 1,
                                backgroundColor: COLORS.lightGray3,
                                width: SIZES.width,
                            }}
                        ></View>
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
                                // marginTop: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "4%",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                }}
                            >
                                <AntDesign
                                    name="idcard"
                                    size={24}
                                    color="black"
                                />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: "700",
                                        paddingLeft: 30,
                                    }}
                                >
                                    My Details
                                </Text>
                            </View>
                            <Entypo
                                name="chevron-right"
                                size={24}
                                color="black"
                            />
                        </View>
                        <View
                            style={{
                                height: 1,
                                backgroundColor: COLORS.lightGray3,
                                width: SIZES.width,
                            }}
                        ></View>
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
                                // marginTop: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "4%",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                }}
                            >
                                <Ionicons
                                    name="ios-location-outline"
                                    size={24}
                                    color="black"
                                />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: "700",
                                        paddingLeft: 30,
                                    }}
                                >
                                    Delivery Address
                                </Text>
                            </View>
                            <Entypo
                                name="chevron-right"
                                size={24}
                                color="black"
                            />
                        </View>
                        <View
                            style={{
                                height: 1,
                                backgroundColor: COLORS.lightGray3,
                                width: SIZES.width,
                            }}
                        ></View>
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
                                // marginTop: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "4%",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                }}
                            >
                                <Entypo
                                    name="credit-card"
                                    size={24}
                                    color="black"
                                />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: "700",
                                        paddingLeft: 30,
                                    }}
                                >
                                    Payment Methods
                                </Text>
                            </View>
                            <Entypo
                                name="chevron-right"
                                size={24}
                                color="black"
                            />
                        </View>
                        <View
                            style={{
                                height: 1,
                                backgroundColor: COLORS.lightGray3,
                                width: SIZES.width,
                            }}
                        ></View>
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
                                // marginTop: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "4%",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                }}
                            >
                                <Entypo name="ticket" size={24} color="black" />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: "700",
                                        paddingLeft: 30,
                                    }}
                                >
                                    Promo Card
                                </Text>
                            </View>
                            <Entypo
                                name="chevron-right"
                                size={24}
                                color="black"
                            />
                        </View>
                        <View
                            style={{
                                height: 1,
                                backgroundColor: COLORS.lightGray3,
                                width: SIZES.width,
                            }}
                        ></View>
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
                                // marginTop: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "4%",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    // width: "50%",
                                }}
                            >
                                <Feather name="bell" size={24} color="black" />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: "700",
                                        paddingLeft: 30,
                                    }}
                                >
                                    Notifications
                                </Text>
                            </View>
                            <Entypo
                                name="chevron-right"
                                size={24}
                                color="black"
                            />
                        </View>
                        <View
                            style={{
                                height: 1,
                                backgroundColor: COLORS.lightGray3,
                                width: SIZES.width,
                            }}
                        ></View>
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
                                // marginTop: 10,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "4%",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    // width: "30%",
                                }}
                            >
                                <Feather
                                    name="help-circle"
                                    size={24}
                                    color="black"
                                />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: "700",
                                        paddingLeft: 30,
                                    }}
                                >
                                    Help
                                </Text>
                            </View>
                            <Entypo
                                name="chevron-right"
                                size={24}
                                color="black"
                            />
                        </View>
                        <View
                            style={{
                                height: 1,
                                backgroundColor: COLORS.lightGray3,
                                width: SIZES.width,
                            }}
                        ></View>
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
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "4%",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    // width: "30%",
                                }}
                            >
                                <Feather
                                    name="alert-circle"
                                    size={24}
                                    color="black"
                                />
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: "700",
                                        paddingLeft: 30,
                                    }}
                                >
                                    About
                                </Text>
                            </View>
                            <Entypo
                                name="chevron-right"
                                size={24}
                                color="black"
                            />
                        </View>
                        <View
                            style={{
                                height: 1,
                                backgroundColor: COLORS.lightGray3,
                                width: SIZES.width,
                            }}
                        ></View>
                    </View>
                </TouchableNativeFeedback>
                <View
                    style={{
                        backgroundColor: COLORS.lightGray3,
                        height: 60,
                        width: "90%",
                        borderRadius: 20,
                        justifyContent: "center",
                        alignSelf: "center",
                        marginTop: "10%",
                        marginBottom: "10%",
                    }}
                >
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple(
                            "#ffb3b3",
                            true
                        )}
                        onPress={() => {
                            navigation.navigate("SigninScreen");
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <View style={{ position: "absolute", left: 25 }}>
                                <MaterialIcons
                                    name="logout"
                                    size={24}
                                    color={COLORS.primary}
                                />
                            </View>
                            <View style={{}}>
                                <Text
                                    style={{
                                        fontSize: SIZES.width / 20,
                                        fontWeight: "700",
                                        color: COLORS.primary,
                                    }}
                                >
                                    Log Out
                                </Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderBody()}
        </View>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({});
