import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { Stack } from 'expo-router';

import { CurrentWeather, UpComingWeather } from '../components';

import { COLORS } from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
      <Stack.Screen
        options={{
          // headerStyle: { backgroundColor: COLORS.tertiary },

          // headerShadowVisible: false,
          // headerTitle: '',
          header: () => null,
        }}
      />
      {/* <CurrentWeather /> */}
      <UpComingWeather />
    </SafeAreaView>
  );
};

export default Home;
