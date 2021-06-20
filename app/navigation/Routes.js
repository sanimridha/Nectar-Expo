import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import AuthStack from './AuthStack';
import Tabs from './Tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Routes = () => {
  const [initialRoute, setinitialRoute] = useState(false);
  useEffect(() => {
    getUserCredentials();
  }, []);
  const getUserCredentials = async () => {
    try {
      const value = await AsyncStorage.getItem('userinfo');
      const data = JSON.parse(value);
      if (data.data.token) {
        setinitialRoute(true);
      }
    } catch (error) {
      // Error retrieving data
      console.log(
        'This error from token issue means invalid email or password !' + error
      );
    }
  };
  return (
    <NavigationContainer>
      {initialRoute ? <Tabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({});
