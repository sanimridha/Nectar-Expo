import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { images } from "./app/constants";
import CustomButton from "./app/components/CustomButton";
import {
    Onboarding,
    SetLocationScreen,
    SigninScreen,
    SigninWithPhoneNumber,
    VerificationScreen,
} from "./app/Screens";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Home"}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={Onboarding} />
                <Stack.Screen name="SigninScreen" component={SigninScreen} />
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
