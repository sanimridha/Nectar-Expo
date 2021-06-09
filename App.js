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
import ProductDetails from "./app/Screens/appscreens/ProductDetails";
import FilterScreen from "./app/Screens/appscreens/FilterScreen";
import CategoryDetailScreen from "./app/Screens/appscreens/CategoryDetailScreen";
import Tabs from "./app/navigation/Tabs";
import Providers from "./app/navigation";

export default function App() {
    return <Providers />;
}

const styles = StyleSheet.create({});
