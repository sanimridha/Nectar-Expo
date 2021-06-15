import React, { useEffect, useState } from "react";
import {
    Alert,
    FlatList,
    ActivityIndicator,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
} from "react-native";
import CustomScreen from "../../components/CustomScreen";
import { COLORS, images, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import CartList from "../../../Storage/CartList";
import axios from "axios";
import { URL, APP_URL } from "../../../connection/API";

const HomeScreen = ({ navigation }) => {
    const [Slider, setSlider] = useState([]);
    const [BestSellingData, setBestSellingData] = useState([]);

    useEffect(() => {
        getSliderData();
        getBestSellingrData();
    }, []);
    const getSliderData = async () => {
        try {
            const response = await axios.get(APP_URL + "api/sliders");
            // console.log(response.data);
            setSlider(response.data.data);
        } catch (error) {
            // handle error
            console.log("Error !!!!!", error);
        }
    };
    const getBestSellingrData = async () => {
        try {
            const response = await axios.get(APP_URL + "api/best/selling");
            setBestSellingData(response.data.data.data);
            console.log("response from best selling");
            console.log(BestSellingData);
        } catch (error) {
            // handle error
            console.log("Error !!!!!", error);
        }
    };
    const headerContent = () => {
        return (
            <View
                style={{
                    // backgroundColor: "red",

                    marginTop: StatusBar.currentHeight,
                    backgroundColor: COLORS.white,

                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4%",
                }}
            >
                <Image
                    source={images.topIcon}
                    resizeMode={"contain"}
                    style={{ height: 40, width: 30 }}
                />
                <View style={{ flexDirection: "row" }}>
                    <Ionicons
                        name="location-sharp"
                        size={20}
                        color="black"
                        style={{ color: "#4C4F4D" }}
                    />
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "700",
                            color: "#4C4F4D",
                        }}
                    >
                        Banassre, Dhaka
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "5%",
                        backgroundColor: COLORS.lightGray3,
                        height: 45,
                        borderRadius: 10,
                    }}
                >
                    <Ionicons
                        name="search"
                        size={22}
                        style={{
                            paddingLeft: "5%",
                            paddingRight: "2%",
                            color: COLORS.black,
                        }}
                    />

                    <TextInput
                        style={{ flex: 1, fontSize: 16 }}
                        placeholder={"Search Store"}
                        placeholderTextColor={COLORS.secondary}
                    />
                </View>
            </View>
        );
    };
    const Loader = () => {
        // setTimeout(() => {
        //     return (
        //         <View
        //             style={{
        //                 flex: 1,
        //                 justifyContent: "center",
        //                 alignItems: "center",
        //             }}
        //         >
        //             <ActivityIndicator size={"large"} color={COLORS.primary} />
        //         </View>
        //     );
        // }, 3000);
    };

    const BannerSlider = () => {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {Slider.map((item, key) => {
                    return (
                        <View key={key} style={{}}>
                            <Image
                                source={{
                                    uri: APP_URL + item.image,
                                }}
                                // resizeMode={"contain"}
                                style={{
                                    height: 120,
                                    width: SIZES.width,
                                    borderRadius: 20,
                                }}
                            />
                        </View>
                    );
                })}
            </ScrollView>
        );
    };
    const ExclusiveOffer = () => {
        const ExclusiveOfferData = [
            {
                id: 1,
                image: images.banana,
                name: "Organic Bananas",
                quantity: "7pcs, Priceg",
                price: "$4.99",
                description:
                    "Bananas are nutritious. Bananas may be good for weight loss. Bananas may be good for your heart. As part of a healtful and varied diet.",
                nutritions: "100gr",
                rating: 5,
            },
            {
                id: 2,
                image: images.apple,
                name: "Red Apple",
                quantity: "1kg, Priceg",
                price: "$3.99",
                description:
                    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healtful and varied diet.",
                nutritions: "100gr",
                rating: 5,
            },
            {
                id: 3,
                image: images.Cupsicum,
                name: "Bell Pepper Red",
                quantity: "1kg, Priceg",
                price: "$5.99",
                description:
                    "Cupsicums are nutritious. Cupsicums may be good for weight loss. Cupsicums may be good for your heart. As part of a healtful and varied diet.",
                nutritions: "100gr",
                rating: 5,
            },
            {
                id: 4,
                image: images.Beef,
                name: "Beef Bone",
                quantity: "1kg, Priceg",
                price: "$8.99",
                description:
                    "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens,",
                nutritions: "500gr",
                rating: 5,
            },
        ];
        return (
            <View style={{ padding: "4%" }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: SIZES.h3, fontWeight: "700" }}>
                        Exclusive Offer
                    </Text>
                    <TouchableNativeFeedback
                        // underlayColor="#000E1727"
                        background={TouchableNativeFeedback.Ripple(
                            COLORS.primary2,
                            true
                        )}
                        onPress={() => {
                            console.log("hello sani");
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: COLORS.primary,
                                }}
                            >
                                See all
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <ScrollView
                    horizontal
                    // pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    {BestSellingData.map((item, key) => {
                        // ________this for shorting the title_________
                        let x = item.title;
                        let useTitle = x.split(" ").slice(0, 2).join(" ");
                        // _________________________________________________
                        return (
                            <View
                                key={key}
                                style={{
                                    borderRadius: 20,
                                    borderColor: COLORS.darkgray,
                                    // height: 200,
                                    width: 150,
                                    borderWidth: 0.4,
                                    marginRight: 20,
                                    marginTop: 20,
                                }}
                            >
                                <TouchableNativeFeedback
                                    background={TouchableNativeFeedback.Ripple(
                                        COLORS.primary2,
                                        true
                                    )}
                                    onPress={() => {
                                        navigation.navigate(
                                            "ProductDetails",
                                            item
                                        );
                                    }}
                                >
                                    <View>
                                        <View
                                            style={{
                                                justifyContent: "center",
                                                alignSelf: "center",
                                            }}
                                        >
                                            <Image
                                                source={{
                                                    uri: item.image,
                                                }}
                                                resizeMode={"center"}
                                                style={{
                                                    height: 90,
                                                    width: 100,
                                                    borderRadius: 20,
                                                }}
                                            />
                                        </View>
                                        <View
                                            style={{
                                                paddingTop: "4%",
                                                paddingLeft: "4%",
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
                                                {item.quantity}
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
                                                ${item.price}
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
                                                    onPress={() => {
                                                        // addToCartList(item);
                                                    }}
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
                    })}
                </ScrollView>
            </View>
        );
    };
    const BestSelling = () => {
        const ExclusiveOfferData = [
            {
                id: 1,
                image: images.Beef,
                name: "Beef Bone",
                quantity: "1kg, Priceg",
                price: "$8.99",
                description:
                    "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens,",
                nutritions: "500gr",
                rating: 5,
            },
            {
                id: 2,
                image: images.Cupsicum,
                name: "Bell Pepper Red",
                quantity: "1kg, Priceg",
                price: "$5.99",
                description:
                    "Cupsicums are nutritious. Cupsicums may be good for weight loss. Cupsicums may be good for your heart. As part of a healtful and varied diet.",
                nutritions: "100gr",
                rating: 5,
            },
            {
                id: 3,
                image: images.apple,
                name: "Red Apple",
                quantity: "1kg, Priceg",
                price: "$3.99",
                description:
                    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healtful and varied diet.",
                nutritions: "100gr",
                rating: 5,
            },

            {
                id: 4,
                image: images.banana,
                name: "Organic Bananas",
                quantity: "7pcs, Priceg",
                price: "$4.99",
                description:
                    "Bananas are nutritious. Bananas may be good for weight loss. Bananas may be good for your heart. As part of a healtful and varied diet.",
                nutritions: "100gr",
                rating: 5,
            },
        ];
        return (
            <View style={{ padding: "4%" }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: SIZES.h3, fontWeight: "700" }}>
                        Best Selling
                    </Text>
                    <TouchableNativeFeedback
                        // underlayColor="#000E1727"
                        background={TouchableNativeFeedback.Ripple(
                            COLORS.primary2,
                            true
                        )}
                        onPress={() => {
                            console.log("hello sani");
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: COLORS.primary,
                                }}
                            >
                                See all
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <ScrollView
                    horizontal
                    // pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    {BestSellingData.map((item, key) => {
                        return (
                            <View
                                key={key}
                                style={{
                                    borderRadius: 20,
                                    borderColor: COLORS.darkgray,
                                    height: 200,
                                    width: 150,
                                    borderWidth: 0.4,
                                    marginRight: 20,
                                    marginTop: 20,
                                }}
                            >
                                <TouchableNativeFeedback
                                    background={TouchableNativeFeedback.Ripple(
                                        COLORS.primary2,
                                        true
                                    )}
                                    onPress={() => {
                                        navigation.navigate(
                                            "ProductDetails",
                                            item
                                        );
                                    }}
                                >
                                    <View>
                                        <View
                                            style={{
                                                justifyContent: "center",
                                                alignSelf: "center",
                                            }}
                                        >
                                            <Image
                                                source={{ uri: item.image }}
                                                resizeMode={"center"}
                                                style={{
                                                    height: 90,
                                                    width: 100,
                                                    borderRadius: 20,
                                                }}
                                            />
                                        </View>
                                        <View style={{ padding: "4%" }}>
                                            <Text
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: 16,
                                                }}
                                            >
                                                {item.title}
                                            </Text>
                                            <Text
                                                style={{
                                                    color: COLORS.secondary,
                                                }}
                                            >
                                                {item.quantity}
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
                                                // activeOpacity={0.5}
                                                // onPress={() => {
                                                //     console.log(
                                                //         item.name + " pressed"
                                                //     );
                                                // }}
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
                                                    onPress={() => {
                                                        {
                                                            // addToCartList(item);
                                                            let currentTime =
                                                                new Date().getTime();
                                                            let data = item;
                                                            let passingData = {
                                                                uniqueID:
                                                                    currentTime,
                                                                ...data,
                                                            };
                                                            CartList.cartList.push(
                                                                passingData
                                                            );
                                                            console.log(
                                                                "cartList from bottom"
                                                            );
                                                            console.log(
                                                                CartList.cartList
                                                            );

                                                            // setcartList("kkal");
                                                            // newArray.push(
                                                            //     passingData
                                                            // );
                                                            // console.log(
                                                            //     typeof newArray
                                                            // );
                                                            // console.log(
                                                            //     newArray
                                                            // );
                                                            // console.log(
                                                            //     "show cart data"
                                                            // );
                                                            // console.log(
                                                            //     typeof cartList
                                                            // );
                                                            // console.log(
                                                            //     cartList
                                                            // );
                                                        }
                                                    }}
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
                    })}
                </ScrollView>
            </View>
        );
    };
    const Groceries = () => {
        const ExclusiveOfferData = [
            {
                id: 1,
                image: images.apple,
                name: "Red Apple",
                quantity: "1kg, Priceg",
                price: "$3.99",
                description:
                    "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healtful and varied diet.",
                nutritions: "100gr",
                rating: 5,
            },
            {
                id: 2,
                image: images.banana,
                name: "Organic Bananas",
                quantity: "7pcs, Priceg",
                price: "$4.99",
                description:
                    "Bananas are nutritious. Bananas may be good for weight loss. Bananas may be good for your heart. As part of a healtful and varied diet.",
                nutritions: "100gr",
                rating: 5,
            },

            {
                id: 3,
                image: images.Cupsicum,
                name: "Bell Pepper Red",
                quantity: "1kg, Priceg",
                price: "$5.99",
                description:
                    "Cupsicums are nutritious. Cupsicums may be good for weight loss. Cupsicums may be good for your heart. As part of a healtful and varied diet.",
                nutritions: "100gr",
                rating: 5,
            },
            {
                id: 4,
                image: images.Beef,
                name: "Beef Bone",
                quantity: "1kg, Priceg",
                price: "$8.99",
                description:
                    "Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens,",
                nutritions: "500gr",
                rating: 5,
            },
        ];
        const GroceriesItems = [
            {
                id: 1,
                name: "Pulses",
                image: images.Pulses,
                color: "#ffe6cc",
            },
            {
                id: 2,
                name: "Rice",
                image: images.Rice,
                color: "#E5F3EA",
            },
            {
                id: 3,
                name: "Pulses",
                image: images.Pulses,
                color: "#ffb3b3",
            },
            {
                id: 4,
                name: "Rice",
                image: images.Rice,
                color: "#ffe6cc",
            },
        ];
        return (
            <View style={{ padding: "4%" }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text style={{ fontSize: SIZES.h3, fontWeight: "700" }}>
                        Groceries
                    </Text>
                    <TouchableNativeFeedback
                        // underlayColor="#000E1727"
                        background={TouchableNativeFeedback.Ripple(
                            COLORS.primary2,
                            true
                        )}
                        onPress={() => {
                            console.log("hello sani");
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: COLORS.primary,
                                }}
                            >
                                See all
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <ScrollView
                    horizontal
                    // pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    {GroceriesItems.map((item, key) => {
                        return (
                            <View
                                key={key}
                                style={{
                                    borderRadius: 20,
                                    // borderColor: COLORS.darkgray,
                                    backgroundColor: item.color,
                                    height: 100,
                                    width: 250,
                                    // borderWidth: 0.4,
                                    marginRight: 20,
                                    marginTop: 20,
                                }}
                            >
                                <TouchableNativeFeedback
                                    background={TouchableNativeFeedback.Ripple(
                                        COLORS.primary2,
                                        true
                                    )}
                                >
                                    <View
                                        style={{
                                            justifyContent: "center",
                                            // flexDirection: "row",
                                            overflow: "hidden",
                                        }}
                                    >
                                        <View style={{ flexDirection: "row" }}>
                                            <Image
                                                source={item.image}
                                                resizeMode={"center"}
                                                style={{
                                                    height: 100,
                                                    width: 100,
                                                    // backgroundColor: "red",
                                                    // borderRadius: 20,
                                                }}
                                            />
                                            <Text
                                                style={{
                                                    fontSize: 20,
                                                    fontWeight: "bold",
                                                    alignSelf: "center",
                                                }}
                                            >
                                                {item.name}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        );
                    })}
                </ScrollView>
                <ScrollView
                    horizontal
                    // pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    {ExclusiveOfferData.map((item, key) => {
                        return (
                            <View
                                key={key}
                                style={{
                                    borderRadius: 20,
                                    borderColor: COLORS.darkgray,
                                    height: 200,
                                    width: 150,
                                    borderWidth: 0.4,
                                    marginRight: 20,
                                    marginTop: 20,
                                }}
                            >
                                <TouchableNativeFeedback
                                    background={TouchableNativeFeedback.Ripple(
                                        COLORS.primary2,
                                        true
                                    )}
                                    onPress={() => {
                                        navigation.navigate(
                                            "ProductDetails",
                                            item
                                        );
                                    }}
                                >
                                    <View>
                                        <View
                                            style={{
                                                justifyContent: "center",
                                                alignSelf: "center",
                                            }}
                                        >
                                            <Image
                                                source={item.image}
                                                resizeMode={"center"}
                                                style={{
                                                    height: 90,
                                                    width: 100,
                                                    borderRadius: 20,
                                                }}
                                            />
                                        </View>
                                        <View style={{ padding: "4%" }}>
                                            <Text
                                                style={{
                                                    fontWeight: "bold",
                                                    fontSize: 16,
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
                                                    onPress={() => {
                                                        {
                                                            // addToCartList(item);
                                                        }
                                                    }}
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
                    })}
                </ScrollView>
            </View>
        );
    };

    return (
        <>
            {headerContent()}
            <ScrollView
                style={{
                    // marginTop: StatusBar.currentHeight,
                    backgroundColor: COLORS.white,
                }}
            >
                {BannerSlider()}
                {ExclusiveOffer()}
                {BestSelling()}
                {Groceries()}
            </ScrollView>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
