import React, { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
} from "react-native";
import { COLORS, images, SIZES } from "../../constants";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { APP_URL } from "../../../connection/API";

const CategoryDetailScreen = ({ navigation, route }) => {
    const { slug } = route.params;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        try {
            const response = await axios.get(
                APP_URL + "api/category/" + slug + "/products"
            );
            setProducts(response.data.data.data);
        } catch (error) {
            // handle error
            console.log("Error !!!!!", error);
        }
    };
    console.log(products);
    const menu = [
        {
            id: 1,
            name: "Diet Coke",
            image: images.Sprite,
            quantity: "355ml, Price",
            price: 13.55,
        },
        {
            id: 2,
            name: "Apple Diet Coke",
            image: images.apple,
            quantity: "355ml, Price",
            price: 13.55,
        },
        {
            id: 3,
            name: "Orange Coke",
            image: images.Beef,
            quantity: "355ml, Price",
            price: 13.55,
        },
        {
            id: 4,
            name: "Diet Coke",
            image: images.Sprite,
            quantity: "355ml, Price",
            price: 13.55,
        },
        {
            id: 5,
            name: "Diet Coke",
            image: images.MeatandFish,
            quantity: "355ml, Price",
            price: 13.55,
        },
        {
            id: 6,
            name: "Diet Coke",
            image: images.banana,
            quantity: "355ml, Price",
            price: 13.55,
        },
        {
            id: 7,
            name: "Diet Coke",
            image: images.Sprite,
            quantity: "355ml, Price",
            price: 13.55,
        },
        {
            id: 8,
            name: "Diet Coke",
            image: images.Rice,
            quantity: "355ml, Price",
            price: 13.55,
        },
    ];

    const renderHeader = () => {
        return (
            <View
                style={{
                    marginTop: StatusBar.currentHeight,
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
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            Beverages
                        </Text>
                    </View>
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple(
                            COLORS.secondary,
                            true
                        )}
                        onPress={() => {
                            navigation.navigate("FilterScreen");
                        }}
                    >
                        <View>
                            <FontAwesome
                                name="sliders"
                                size={24}
                                color="black"
                            />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    };
    const renderBody = () => {
        return (
            <View style={{ flex: 1, paddingLeft: "4%", paddingRight: "4%" }}>
                {/* {menu.map((item, key) => { */}
                <FlatList
                    data={products}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        // ________this for shorting the title_________
                        let x = item.title;
                        let useTitle = x.split(" ").slice(0, 2).join(" ");
                        console.log(useTitle);
                        // _________________________________________________
                        return (
                            <View
                                key={item.index}
                                style={{
                                    flex: 1,
                                    margin: "3%",
                                    height: 200,
                                    width: 150,
                                    // backgroundColor: item.color,
                                    borderRadius: 15,
                                    borderWidth: 0.4,
                                    borderColor: COLORS.darkgray,
                                    justifyContent: "center",
                                    // alignSelf: "center",
                                    // alignItems: "center",
                                }}
                            >
                                <TouchableNativeFeedback
                                    background={TouchableNativeFeedback.Ripple(
                                        COLORS.primary2,
                                        true
                                    )}
                                    // onPress={() => {
                                    //     navigation.navigate("ProductDetails");
                                    // }}
                                >
                                    <View style={{}}>
                                        <View
                                            style={{
                                                justifyContent: "center",
                                                alignSelf: "center",
                                            }}
                                        >
                                            <Image
                                                source={{ uri: item.image }}
                                                resizeMode={"contain"}
                                                style={{
                                                    height: 70,
                                                    width: 80,
                                                    borderRadius: 20,
                                                }}
                                            />
                                        </View>
                                        <View
                                            style={{
                                                padding: "6%",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: 16,
                                                }}
                                            >
                                                {useTitle}
                                            </Text>
                                            <Text
                                                style={{
                                                    color: COLORS.secondary,
                                                }}
                                            >
                                                {item.total_favourites}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                padding: "4%",
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {item.price}
                                            </Text>
                                            <View
                                                style={{
                                                    backgroundColor:
                                                        COLORS.primary,
                                                    height: 40,
                                                    width: 40,
                                                    borderRadius: 15,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <TouchableNativeFeedback
                                                    background={TouchableNativeFeedback.Ripple(
                                                        "white",
                                                        true
                                                    )}
                                                >
                                                    <View
                                                        style={{
                                                            height: "100%",
                                                            width: "100%",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <Entypo
                                                            name="plus"
                                                            size={24}
                                                            color="white"
                                                        />
                                                    </View>
                                                </TouchableNativeFeedback>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        );
                    }}
                />
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            {renderHeader()}
            {renderBody()}
        </View>
    );
};

export default CategoryDetailScreen;

const styles = StyleSheet.create({});
