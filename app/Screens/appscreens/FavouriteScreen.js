import React, { useEffect, useState } from "react";
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
import { CustomButton } from "../../components";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { APP_URL } from "../../../connection/API";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FavouriteScreen = ({ navigation }) => {
    const [userId, setUserId] = useState();
    const [token, setToken] = useState();
    const [FavList, setFavList] = useState([]);
    useEffect(() => {
        getUserInfo();
        fetchFavouriteItem();
    }, []);
    const getUserInfo = async () => {
        try {
            const value = await AsyncStorage.getItem("userinfo");
            const data = JSON.parse(value);
            if (data) {
                setUserId(data.data.data.id);
                setToken(data.data.token);
                console.log(data.data.data.id);
                console.log(data.data.token);
            }
        } catch (error) {
            // Error retrieving data
            console.log("This error from fav screen" + error);
        }
    };
    const fetchFavouriteItem = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios
            .get(
                APP_URL + "api/wishlist/products/" + userId,

                config //here we're passing the Authorization header to the server
            )
            .then(function (response) {
                setFavList(response.data.data);
                console.log("response.data.data from API");
                console.log(FavList);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const favouriteItems = [
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
                    backgroundColor: COLORS.white,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "4%",
                }}
            >
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>
                        Favourite
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
            <ScrollView style={{ flex: 1 }}>
                {/* <FlatList data={favouriteItems} renderItem={renderItem} /> */}
                {FavList.map((item, key) => {
                    // ________this for shorting the title_________
                    let x = item.product.title;
                    let useTitle = x.split(" ").slice(0, 2).join(" ");
                    // _________________________________________________
                    return (
                        <View
                            key={key}
                            style={{
                                width: SIZES.width,
                            }}
                        >
                            <TouchableNativeFeedback
                                background={TouchableNativeFeedback.Ripple(
                                    COLORS.lightGray5,
                                    false
                                )}
                            >
                                <View>
                                    <View
                                        style={{
                                            padding: "7.5%",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <View style={{ flexDirection: "row" }}>
                                            <Image
                                                source={{
                                                    uri: item.product.image,
                                                }}
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
                                                    {useTitle}
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: COLORS.secondary,
                                                    }}
                                                >
                                                    {item.product.handling_time}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    fontWeight: "700",
                                                    paddingRight: 5,
                                                }}
                                            >
                                                ${item.product.price}
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
                                            width: "90%",
                                            backgroundColor: COLORS.lightGray3,
                                            alignSelf: "center",
                                            position: "absolute",
                                            bottom: 0,
                                        }}
                                    ></View>
                                </View>
                            </TouchableNativeFeedback>
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
                    <CustomButton
                        onPress={() => {
                            navigation.navigate("Cart");
                        }}
                        btnTitle={"Add all to Cart"}
                        color={COLORS.primary}
                    />
                </View>
            </ScrollView>
        );
    };
    const NoItemFound = () => {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Feather
                    name="alert-triangle"
                    size={100}
                    color={COLORS.lightGray3}
                />
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: "700",
                        color: COLORS.lightGray3,
                        textAlign: "center",
                    }}
                >
                    Your favourite list is empty!
                </Text>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderHeader()}
            {renderBody()}
        </View>
    );
};

export default FavouriteScreen;

const styles = StyleSheet.create({});
