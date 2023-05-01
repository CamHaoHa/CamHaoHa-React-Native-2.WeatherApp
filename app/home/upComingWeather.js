import React from 'react';
import { SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import { UpComingWeather } from '../../components';
import { COLORS } from '../../constants';

const upComingWeather = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.tertiary }}>
      <Stack.Screen options={{ header: () => null }} />
      <UpComingWeather />
    </SafeAreaView>
  );
};

export default upComingWeather;
