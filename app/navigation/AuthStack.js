import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { images } from '../../app/constants';
import CustomButton from '../../app/components/CustomButton';
import {
  LoginScreen,
  Onboarding,
  SetLocationScreen,
  SigninScreen,
  SigninWithPhoneNumber,
  SignupScreen,
  VerificationScreen,
} from '../../app/Screens';
import ProductDetails from '../../app/Screens/appscreens/ProductDetails';
import FilterScreen from '../../app/Screens/appscreens/FilterScreen';
import CategoryDetailScreen from '../../app/Screens/appscreens/CategoryDetailScreen';
import Tabs from '../../app/navigation/Tabs';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      //   initialRouteName={'Onboarding'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name='Tabs' component={Tabs} />
      <Stack.Screen name='SigninScreen' component={SigninScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignupScreen' component={SignupScreen} />
      <Stack.Screen name='FilterScreen' component={FilterScreen} />
      <Stack.Screen
        name='CategoryDetailScreen'
        component={CategoryDetailScreen}
      />
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
      <Stack.Screen name='SetLocationScreen' component={SetLocationScreen} />
      <Stack.Screen name='VerificationScreen' component={VerificationScreen} />
      <Stack.Screen
        name='SigninWithPhoneNumber'
        component={SigninWithPhoneNumber}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
