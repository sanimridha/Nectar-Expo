import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
    createBottomTabNavigator,
    BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
    AccountScreen,
    CartScreen,
    ExploreScreen,
    FavouriteScreen,
    HomeScreen,
} from "../Screens";
import { COLORS, images, SIZES } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    // backgroundColor: COLORS.White,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    // height: 60,
                },
            }}
            initialRouteName={"Home"}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: 50 }}>
                            <Image
                                source={images.Shop}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 20,
                                    alignSelf: "center",
                                    tintColor: focused
                                        ? COLORS.primary
                                        : COLORS.black,
                                }}
                            />
                            <View>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        alignSelf: "center",
                                        color: focused
                                            ? COLORS.primary
                                            : COLORS.black,
                                    }}
                                >
                                    Shop
                                </Text>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: 50 }}>
                            <Image
                                source={images.Explore}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 20,
                                    alignSelf: "center",
                                    tintColor: focused
                                        ? COLORS.primary
                                        : COLORS.black,
                                }}
                            />
                            <View>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        alignSelf: "center",
                                        color: focused
                                            ? COLORS.primary
                                            : COLORS.black,
                                    }}
                                >
                                    Explore
                                </Text>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: 50 }}>
                            <Image
                                source={images.Cart}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 20,
                                    alignSelf: "center",
                                    tintColor: focused
                                        ? COLORS.primary
                                        : COLORS.black,
                                }}
                            />
                            <View>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        alignSelf: "center",
                                        color: focused
                                            ? COLORS.primary
                                            : COLORS.black,
                                    }}
                                >
                                    Cart
                                </Text>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                width: 55,
                            }}
                        >
                            <Feather
                                name="heart"
                                size={20}
                                color="black"
                                style={{
                                    alignSelf: "center",
                                    color: focused
                                        ? COLORS.primary
                                        : COLORS.black,
                                }}
                            />
                            <View>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        alignSelf: "center",
                                        color: focused
                                            ? COLORS.primary
                                            : COLORS.black,
                                    }}
                                >
                                    Favourite
                                </Text>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ width: 50 }}>
                            <Image
                                source={images.Person}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 20,
                                    alignSelf: "center",
                                    tintColor: focused
                                        ? COLORS.primary
                                        : COLORS.black,
                                }}
                            />
                            <View>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        alignSelf: "center",
                                        color: focused
                                            ? COLORS.primary
                                            : COLORS.black,
                                    }}
                                >
                                    Account
                                </Text>
                            </View>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;

const styles = StyleSheet.create({});
