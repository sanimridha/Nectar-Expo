import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    Modal,
    Alert,
    ImageBackground,
} from "react-native";
import { COLORS, images, SIZES } from "../../constants";
import { CustomButton } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const CartScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [succesModalVisible, setsuccesModalVisible] = useState(false);
    const cartItems = [
        {
            id: 1,
            name: "Banana",
            image: images.banana,
            quantity: "12kg, Price",
            price: 3.26,
        },
        {
            id: 2,
            name: "Apple",
            image: images.apple,
            quantity: "2kg, Price",
            price: 3.56,
        },
        {
            id: 3,
            name: "Meat",
            image: images.MeatandFish,
            quantity: "12kg, Price",
            price: 12.26,
        },
        {
            id: 4,
            name: "capsicum",
            image: images.Cupsicum,
            quantity: "2kg, Price",
            price: 5.26,
        },
        {
            id: 5,
            name: "Sprite Can",
            image: images.Sprite,
            quantity: "325ml, Price",
            price: 1.26,
        },
        {
            id: 6,
            name: "Organic Ginger",
            image: images.Eggs,
            quantity: "12ps, Price",
            price: 3.26,
        },
        {
            id: 7,
            name: "capsicum",
            image: images.Cupsicum,
            quantity: "2kg, Price",
            price: 5.26,
        },
        {
            id: 8,
            name: "Sprite Can",
            image: images.Sprite,
            quantity: "325ml, Price",
            price: 1.26,
        },
        {
            id: 9,
            name: "Organic Ginger",
            image: images.Eggs,
            quantity: "12ps, Price",
            price: 3.26,
        },
    ];
    const renderHeader = () => {
        return (
            <View
                style={{
                    marginTop: StatusBar.currentHeight,
                    backgroundColor: modalVisible ? COLORS.lightGray3 : "white",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "4%",
                }}
            >
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>
                        My Cart
                    </Text>
                </View>
                <View
                    style={{
                        marginTop: 15,
                        height: 1,
                        backgroundColor: COLORS.lightGray3,
                        width: SIZES.width,
                    }}
                ></View>
            </View>
        );
    };
    const renderBody = () => {
        return (
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: modalVisible ? COLORS.lightGray3 : "white",
                }}
            >
                {cartItems.map((item, key) => {
                    return (
                        <View
                            key={key}
                            style={{
                                width: SIZES.width,
                            }}
                        >
                            <View>
                                <View
                                    style={{
                                        padding: "4%",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Image
                                            source={item.image}
                                            resizeMode={"contain"}
                                            style={{
                                                height: 50,
                                                width: 80,
                                            }}
                                        />
                                        <View
                                            style={{
                                                flexDirection: "column",
                                                paddingLeft: 15,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: "700",
                                                }}
                                            >
                                                {item.name}
                                            </Text>
                                            <Text
                                                style={{
                                                    color: COLORS.secondary,
                                                }}
                                            >
                                                {item.quantity}
                                            </Text>
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    paddingTop: 10,
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        height: 40,
                                                        width: 40,
                                                        borderRadius: 15,
                                                        borderWidth: 0.6,
                                                        borderColor:
                                                            COLORS.secondary,
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <TouchableNativeFeedback
                                                        background={TouchableNativeFeedback.Ripple(
                                                            COLORS.secondary,
                                                            true
                                                        )}
                                                    >
                                                        <View
                                                            style={{
                                                                height: "100%",
                                                                width: "100%",
                                                                alignItems:
                                                                    "center",
                                                            }}
                                                        >
                                                            <Text
                                                                style={{
                                                                    fontSize: 22,
                                                                    fontWeight:
                                                                        "bold",
                                                                    bottom: 4,
                                                                    color: COLORS.secondary,
                                                                }}
                                                            >
                                                                _
                                                            </Text>
                                                        </View>
                                                    </TouchableNativeFeedback>
                                                </View>
                                                <View
                                                    style={{
                                                        height: 40,
                                                        width: 40,
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            fontSize: 18,
                                                            // fontWeight: "700",
                                                        }}
                                                    >
                                                        1
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        height: 40,
                                                        width: 40,
                                                        borderRadius: 15,
                                                        borderWidth: 0.6,
                                                        borderColor:
                                                            COLORS.secondary,
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <TouchableNativeFeedback
                                                        background={TouchableNativeFeedback.Ripple(
                                                            COLORS.primary,
                                                            true
                                                        )}
                                                    >
                                                        <View
                                                            style={{
                                                                height: "100%",
                                                                width: "100%",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                            }}
                                                        >
                                                            <Text
                                                                style={{
                                                                    fontSize: 25,
                                                                    // fontWeight:
                                                                    //     "bold",
                                                                    // bottom: 4,
                                                                    color: COLORS.primary,
                                                                }}
                                                            >
                                                                +
                                                            </Text>
                                                        </View>
                                                    </TouchableNativeFeedback>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            // height: "100%",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <View
                                            style={{
                                                // height: 10,
                                                // width: 30,
                                                flex: 1,
                                                justifyContent: "center",
                                                alignSelf: "center",
                                            }}
                                        >
                                            <TouchableNativeFeedback
                                                background={TouchableNativeFeedback.Ripple(
                                                    COLORS.secondary,
                                                    true
                                                )}
                                            >
                                                <View
                                                    style={{
                                                        alignItems: "flex-end",
                                                    }}
                                                >
                                                    <Ionicons
                                                        name="ios-close"
                                                        size={24}
                                                        color={COLORS.secondary}
                                                    />
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>

                                        <View style={{ marginTop: 30 }}>
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: "700",
                                                    paddingRight: 5,
                                                    bottom: 10,
                                                }}
                                            >
                                                ${item.price}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 1,
                                        width: "90%",
                                        backgroundColor: COLORS.lightGray3,
                                        alignSelf: "center",
                                        position: "absolute",
                                        bottom: 0,
                                    }}
                                ></View>
                            </View>
                        </View>
                    );
                })}
                <View
                    style={{
                        paddingTop: "10%",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: "10%",
                    }}
                >
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                            height: 60,
                            width: "85%",
                            backgroundColor: COLORS.primary,
                            borderRadius: 15,
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                        }}
                        onPress={() => {
                            setModalVisible(true);
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                color: COLORS.white,
                            }}
                        >
                            Go to Checkout
                        </Text>
                        <View
                            style={{
                                backgroundColor: "#489E67",
                                padding: 5,
                                borderRadius: 8,
                                position: "absolute",
                                right: 15,
                            }}
                        >
                            <Text style={{ color: COLORS.white, fontSize: 12 }}>
                                $12.96
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: modalVisible ? COLORS.lightGray3 : "white",
            }}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "4%",
                            }}
                        >
                            <Text style={{ fontSize: 25, fontWeight: "600" }}>
                                Checkout
                            </Text>
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple(
                                    COLORS.lightGray5,
                                    true
                                )}
                                onPress={() => {
                                    setModalVisible(false);
                                }}
                            >
                                <View>
                                    <Ionicons
                                        name="close"
                                        size={30}
                                        color="black"
                                    />
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View
                            style={{
                                height: 1,
                                width: SIZES.width,
                                backgroundColor: COLORS.lightGray3,
                            }}
                        ></View>
                        {/*---------------- options ------------------ */}
                        <ScrollView>
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
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: "700",
                                                    color: COLORS.secondary,
                                                    // paddingLeft: 30,
                                                }}
                                            >
                                                Delivery
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                            }}
                                        >
                                            <Text style={{ fontSize: 15 }}>
                                                Select Method
                                            </Text>
                                            <Entypo
                                                name="chevron-right"
                                                size={24}
                                                color="black"
                                            />
                                        </View>
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
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: "700",
                                                    color: COLORS.secondary,
                                                    // paddingLeft: 30,
                                                }}
                                            >
                                                Payment
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Image
                                                source={images.card}
                                                // resizeMode={"stretch"}
                                                style={{
                                                    height: 20,
                                                    width: 30,
                                                }}
                                            />
                                            <Entypo
                                                name="chevron-right"
                                                size={24}
                                                color="black"
                                            />
                                        </View>
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
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: "700",
                                                    color: COLORS.secondary,
                                                    // paddingLeft: 30,
                                                }}
                                            >
                                                Promo Code
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                            }}
                                        >
                                            <Text style={{ fontSize: 15 }}>
                                                Pick discount
                                            </Text>
                                            <Entypo
                                                name="chevron-right"
                                                size={24}
                                                color="black"
                                            />
                                        </View>
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
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                    fontWeight: "700",
                                                    color: COLORS.secondary,
                                                    // paddingLeft: 30,
                                                }}
                                            >
                                                Total Cost
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                flexDirection: "row",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                $13.97
                                            </Text>
                                            <Entypo
                                                name="chevron-right"
                                                size={24}
                                                color="black"
                                            />
                                        </View>
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
                            <Text
                                style={{
                                    color: COLORS.secondary,
                                    padding: "4%",
                                    textAlign: "center",
                                }}
                            >
                                By placing an order you agree to our{" "}
                                <Text style={{ color: COLORS.primary }}>
                                    Terms{" "}
                                    <Text style={{ color: COLORS.secondary }}>
                                        and{" "}
                                    </Text>
                                    Conditions
                                </Text>
                            </Text>
                            <View
                                style={{
                                    width: SIZES.width,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingBottom: "5%",
                                }}
                            >
                                <CustomButton
                                    onPress={() => {
                                        setsuccesModalVisible(true);
                                    }}
                                    btnTitle={"Place Order"}
                                    color={COLORS.primary}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={succesModalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={{ flex: 1, backgroundColor: "red" }}>
                    <View style={{ height: SIZES.height }}>
                        <ImageBackground
                            source={images.fullBackground}
                            resizeMode={"cover"}
                            style={{
                                height: SIZES.height,
                                width: SIZES.width,
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    // justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Image
                                    fadeDuration={200}
                                    source={images.success}
                                    resizeMode={"center"}
                                    style={{
                                        height: 300,
                                        width: "100%",
                                        // backgroundColor: "red",
                                        // position: "absolute",
                                        // top: 20,
                                        right: 15,
                                    }}
                                />
                                <View
                                    style={{
                                        width: "70%",
                                        marginTop: 20,
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            fontWeight: "bold",
                                            textAlign: "center",
                                        }}
                                    >
                                        Your order has been accepted
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            color: COLORS.secondary,
                                            // fontWeight: "bold",
                                            textAlign: "center",
                                            padding: "4%",
                                        }}
                                    >
                                        Your items has been placcd and is on
                                        it’s way to being processed{" "}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        width: SIZES.width,
                                        alignItems: "center",
                                        paddingBottom: 20,
                                    }}
                                >
                                    <CustomButton
                                        btnTitle={"Track Order"}
                                        color={COLORS.primary}
                                    />
                                    <TouchableOpacity
                                        style={{ marginTop: "4%", height: 30 }}
                                        onPress={() => {
                                            setsuccesModalVisible(false);
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Back to home
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </Modal>
            {renderHeader()}
            {renderBody()}
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        width: SIZES.width,
        marginTop: 22,
    },
    modalView: {
        height: "60%",
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // padding: "5%",
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
