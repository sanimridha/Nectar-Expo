import React from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from "react-native";
import CustomScreen from "../../components/CustomScreen";
import { COLORS, images, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const HomeScreen = () => {
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
    const BannerSlider = () => {
        const sliderImages = [
            {
                id: 1,
                image: images.banner,
            },
            {
                id: 2,
                image: images.banner2,
            },
            {
                id: 3,
                image: images.banner3,
            },
        ];

        return (
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {sliderImages.map((item, key) => {
                    return (
                        <View key={key} style={{}}>
                            <Image
                                source={item.image}
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
                    <TouchableHighlight
                        underlayColor="#000E1727"
                        onPress={() => {
                            console.log("hello sani");
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: "bold",
                                color: COLORS.primary,
                            }}
                        >
                            See all
                        </Text>
                    </TouchableHighlight>
                </View>
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
                                    borderWidth: 0.4,
                                    height: 200,
                                    width: 150,
                                    borderRadius: 20,
                                    borderColor: COLORS.darkgray,
                                    marginRight: 20,
                                    marginTop: 20,
                                }}
                            >
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
                                    <Text style={{ color: COLORS.secondary }}>
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
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        onPress={() => {
                                            console.log(item.name + " pressed");
                                        }}
                                        style={{
                                            backgroundColor: COLORS.primary,
                                            height: 40,
                                            width: 40,
                                            borderRadius: 15,
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Entypo
                                            name="plus"
                                            size={24}
                                            color="white"
                                        />
                                    </TouchableOpacity>
                                </View>
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
            </ScrollView>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
