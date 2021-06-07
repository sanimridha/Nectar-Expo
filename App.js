import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { images } from "./app/constants";
import CustomButton from "./app/components/CustomButton";
import {
    LoginScreen,
    Onboarding,
    SetLocationScreen,
    SigninScreen,
    SigninWithPhoneNumber,
    SignupScreen,
    VerificationScreen,
} from "./app/Screens";
import Tabs from "./app/navigation/Tabs";
import TouchableNative from "./app/components/TouchableNative";
import ProductDetails from "./app/Screens/appscreens/ProductDetails";
import FilterScreen from "./app/Screens/appscreens/FilterScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Home"}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="SigninScreen" component={SigninScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="FilterScreen" component={FilterScreen} />
                <Stack.Screen
                    name="ProductDetails"
                    component={ProductDetails}
                />
                <Stack.Screen
                    name="SetLocationScreen"
                    component={SetLocationScreen}
                />
                <Stack.Screen
                    name="VerificationScreen"
                    component={VerificationScreen}
                />
                <Stack.Screen
                    name="SigninWithPhoneNumber"
                    component={SigninWithPhoneNumber}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
