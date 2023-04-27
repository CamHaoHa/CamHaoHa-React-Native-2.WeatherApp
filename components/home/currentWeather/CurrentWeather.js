import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './currentWeather.style';
const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FontAwesome
          name="sun-o"
          size={100}
          color="black"
        />
        <Text style={styles.currentTempText}>6</Text>
        <Text style={styles.feelLikeText}>Feel Like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLowText}>High: 8 </Text>
          <Text style={styles.highLowText}>Low:6</Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <Text style={styles.descriptionText}>Its Sunny</Text>
        <Text style={styles.subDescriptionText}>
          Its perfect t-shirt weather
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;
