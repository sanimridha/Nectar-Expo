import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLORS } from "../constants";

const Routes = () => {
    const [initialRoute, setinitialRoute] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getUserCredentials();
    }, []);
    const getUserCredentials = async () => {
        try {
            const value = await AsyncStorage.getItem("userinfo");
            const data = JSON.parse(value);
            if (data.data.token) {
                setinitialRoute(true);
            } else {
                setinitialRoute(false);
            }
        } catch (error) {
            // Error retrieving data
            console.log(
                "This error from token issue means user is not available !" +
                    error
            );
        }
    };
    const Loading = () => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ActivityIndicator size={`large`} color={COLORS.pri} />
            </View>
        );
    };

    return (
        <NavigationContainer>
            {initialRoute ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Routes;

const styles = StyleSheet.create({});
