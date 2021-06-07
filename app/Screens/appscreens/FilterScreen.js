import React, { useState } from "react";
import {
    Alert,
    Modal,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    View,
    CheckBox,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { CustomButton } from "../../components";
import { Ionicons } from "@expo/vector-icons";

const FilterScreen = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [isSelected, setSelection] = useState(false);
    const renderHeader = () => {
        return (
            <View
                style={{
                    marginTop: StatusBar.currentHeight,
                    backgroundColor: COLORS.white,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "4%",
                }}
            >
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>
                        Filters
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
    return (
        <>
            {/* {renderHeader()} */}
            <View style={styles.centeredView}>
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
                                    justifyContent: "space-between",
                                    marginBottom: 20,
                                    paddingLeft: "4%",
                                }}
                            >
                                <TouchableNativeFeedback
                                    background={TouchableNativeFeedback.Ripple(
                                        COLORS.lightGray5,
                                        true
                                    )}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <View
                                        style={{
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        <Ionicons
                                            name="ios-close"
                                            size={24}
                                            color={COLORS.black}
                                        />
                                    </View>
                                </TouchableNativeFeedback>
                                <View
                                    style={{
                                        justifyContent: "space-around",
                                        position: "absolute",
                                        left: "45%",
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Filters
                                    </Text>
                                </View>
                                {/* this view for centering Filter text center */}
                                <View></View>
                            </View>
                            <View
                                style={{
                                    backgroundColor: COLORS.lightGray3,
                                    flex: 1,
                                    width: SIZES.width,
                                    borderTopRightRadius: 30,
                                    borderTopLeftRadius: 30,
                                }}
                            >
                                <View style={{ padding: "5%" }}>
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Categories
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            paddingTop: "4%",
                                        }}
                                    >
                                        <CheckBox
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{
                                                color: COLORS.primary,
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 17,
                                                color: isSelected
                                                    ? "#2F9082"
                                                    : "black",
                                            }}
                                        >
                                            Eggs
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            paddingTop: "4%",
                                        }}
                                    >
                                        <CheckBox
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{
                                                color: COLORS.primary,
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 17,
                                                color: isSelected
                                                    ? "#2F9082"
                                                    : "black",
                                            }}
                                        >
                                            Noodles & Pasta
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            paddingTop: "4%",
                                        }}
                                    >
                                        <CheckBox
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{
                                                color: COLORS.primary,
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 17,
                                                color: isSelected
                                                    ? "#2F9082"
                                                    : "black",
                                            }}
                                        >
                                            Chips & Crisps
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            paddingTop: "4%",
                                        }}
                                    >
                                        <CheckBox
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{
                                                color: COLORS.primary,
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 17,
                                                color: isSelected
                                                    ? "#2F9082"
                                                    : "black",
                                            }}
                                        >
                                            Fast Food
                                        </Text>
                                    </View>
                                </View>
                                {/* brand */}
                                <View style={{ padding: "5%" }}>
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Brand
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            paddingTop: "4%",
                                        }}
                                    >
                                        <CheckBox
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{
                                                color: COLORS.primary,
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 17,
                                                color: isSelected
                                                    ? "#2F9082"
                                                    : "black",
                                            }}
                                        >
                                            Individual Callection
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            paddingTop: "4%",
                                        }}
                                    >
                                        <CheckBox
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{
                                                color: COLORS.primary,
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 17,
                                                color: isSelected
                                                    ? "#2F9082"
                                                    : "black",
                                            }}
                                        >
                                            Cocola
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            paddingTop: "4%",
                                        }}
                                    >
                                        <CheckBox
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{
                                                color: COLORS.primary,
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 17,
                                                color: isSelected
                                                    ? "#2F9082"
                                                    : "black",
                                            }}
                                        >
                                            Ifad
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            paddingTop: "4%",
                                        }}
                                    >
                                        <CheckBox
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            style={{
                                                color: COLORS.primary,
                                            }}
                                        />
                                        <Text
                                            style={{
                                                fontSize: 17,
                                                color: isSelected
                                                    ? "#2F9082"
                                                    : "black",
                                            }}
                                        >
                                            Kazi Farmas
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        width: SIZES.width,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        position: "absolute",
                                        bottom: 25,
                                    }}
                                >
                                    <CustomButton
                                        color={COLORS.primary}
                                        btnTitle={"Apply Filter"}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        setModalVisible(true);
                    }}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </TouchableHighlight>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        width: SIZES.width,
        backgroundColor: "white",
        // marginTop: 22,
    },
    modalView: {
        height: SIZES.height,
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: "4%",
        // alignItems: "center",
        shadowColor: "#000",
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

export default FilterScreen;
