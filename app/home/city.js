import React from 'react';
import { SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import { City } from '../../components';
import { COLORS } from '../../constants';
import { StatusBar } from 'expo-status-bar';
const city = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <StatusBar style="dark" />
      <Stack.Screen options={{ header: () => null }} />
      <City />
    </SafeAreaView>
  );
};

export default city;
