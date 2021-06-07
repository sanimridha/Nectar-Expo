import React from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    Touchable,
    TouchableNativeFeedback,
    View,
} from "react-native";
import CustomScreen from "../../components/CustomScreen";
import { COLORS, images, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";

const ExploreScreen = ({ navigation }) => {
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
            return (
                <View
                    key={item.id}
                    style={{
                        flex: 1,
                        margin: "3%",
                        height: SIZES.height / 4,
                        width: SIZES.width / 2.5,
                        backgroundColor: item.color,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: item.borderColor,
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
                            navigation.navigate("FilterScreen");
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
                                source={item.image}
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
                    data={AllCategories}
                    // keyExtractor={item => {
                    //     item.id;
                    // }}
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
            {renderAllCategories()}
        </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
