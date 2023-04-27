import React from 'react';
import { View } from 'react-native';

import { CurrentWeather } from '../components';

const home = () => {
  return (
    <View
      className="container"
      style={{ flex: 1 }}
    >
      <CurrentWeather />
    </View>
  );
};

export default home;
