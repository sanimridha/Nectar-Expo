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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, images } from "../../constants";
import { Entypo } from "@expo/vector-icons";
import TouchableNative from "../../components/TouchableNative";

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
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
            }}
        >
            {headerContent()}
        </View>
    );
};

export default ProductDetails;

const styles = StyleSheet.create({});
