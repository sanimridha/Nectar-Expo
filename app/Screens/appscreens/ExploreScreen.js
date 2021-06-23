import React, { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableNativeFeedback,
    View,
    ActivityIndicator,
} from "react-native";
import { COLORS, images, SIZES } from "../../constants";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { APP_URL } from "../../../connection/API";
import axios from "axios";

const ExploreScreen = ({ navigation }) => {
    const [allCategories, setAllCategories] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(APP_URL + "api/categories");
            setAllCategories(response.data.data.data);
            console.log(response.data.data.data);
            setIsLoading(false);
        } catch (error) {
            // handle error
            console.log("Error !!!!!", error);
        }
    };

    const headerContent = () => {
        return (
            <View
                style={{
                    marginTop: StatusBar.currentHeight,
                    backgroundColor: COLORS.white,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "4%",
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "700",
                            color: "#4C4F4D",
                        }}
                    >
                        Find Product
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
    const loading = () => (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ActivityIndicator color={COLORS.primary} size={"large"} />
        </View>
    );

    const renderAllCategories = () => {
        const AllCategories = [
            {
                id: 1,
                image: images.FrashFruits,
                name: "Frash Fruits & Vegetable",
                color: "#EEF7F1",
                borderColor: "#82C699",
            },
            {
                id: 2,
                image: images.CookingOil,
                name: "Cooking Oil & Ghee",
                color: "#FEF6ED",
                borderColor: "#F9BD7C",
            },
            {
                id: 3,
                image: images.MeatandFish,
                name: "Meat & Fish",
                color: "#FDE8E4",
                borderColor: "#F7A593",
            },
            {
                id: 4,
                image: images.BakerySnacks,
                name: "Bakery & Snacks",
                color: "#F4EBF7",
                borderColor: "#D3B0E0",
            },
            {
                id: 5,
                image: images.Eggs,
                name: "Dairy & Eggs",
                color: "#FEF8E5",
                borderColor: "#FCE598",
            },
            {
                id: 6,
                image: images.Beverages,
                name: "Beverages",
                color: "#EDF7FC",
                borderColor: "#B7DFF5",
            },
            {
                id: 7,
                image: images.FrashFruits,
                name: "Frash Fruits & Vegetable",
                color: "#ccddff",
                borderColor: "#6699ff",
            },
            {
                id: 8,
                image: images.CookingOil,
                name: "Cooking Oil & Ghee",
                color: "#FEF6ED",
                borderColor: "#F9BD7C",
            },
            {
                id: 9,
                image: images.MeatandFish,
                name: "Meat & Fish",
                color: "#e6fff9",
                borderColor: "#80ffdf",
            },
            {
                id: 10,
                image: images.BakerySnacks,
                name: "Bakery & Snacks",
                color: "#ccccff",
                borderColor: "#8080ff",
            },
        ];
        const renderItem = ({ item }) => {
            // ________this for Random COlor_________
            let random = Math.floor(Math.random() * 16777).toString(16);
            let randomColor = `#${random}`;
            let border_random = Math.floor(Math.random() * 16777215).toString(
                16
            );
            let Border_randomColor = `#${border_random}`;
            //_______________________________________

            return (
                <View
                    key={item.id}
                    style={{
                        flex: 1,
                        margin: "3%",
                        height: SIZES.height / 4,
                        width: SIZES.width / 2.5,
                        // backgroundColor: item.color,
                        backgroundColor: randomColor,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: Border_randomColor,
                        justifyContent: "center",
                        alignSelf: "center",
                        alignItems: "center",
                    }}
                >
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple(
                            COLORS.primary2,
                            true
                        )}
                        onPress={() => {
                            navigation.navigate("CategoryDetailScreen", item);
                        }}
                    >
                        <View
                            style={{
                                height: "100%",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image
                                source={{ uri: item.image }}
                                resizeMode={"center"}
                                style={{
                                    height: 90,
                                    width: 100,
                                }}
                            />
                            <View
                                style={{
                                    width: "80%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignSelf: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 17,
                                        fontWeight: "700",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            );
        };

        return (
            <View
                style={{
                    flex: 1,
                    width: SIZES.width,
                    // justifyContent: "space-evenly",
                    // alignItems: "center",
                }}
            >
                <FlatList
                    data={allCategories}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    numColumns={2}
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
            {isLoading ? loading() : renderAllCategories()}
            {/* {loading()} */}
        </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
