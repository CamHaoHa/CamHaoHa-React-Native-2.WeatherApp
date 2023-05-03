import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './currentWeather.style';
import RowText from './RowText';
import { weatherType } from '../../../utils/weatherTypes';
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

        <RowText
          messageOne={'High: 8 '}
          messageOneStyle={styles.highLowText}
          messageTwo={'Low:6'}
          messageTwoStyle={styles.highLowText}
          containerStyle={styles.highLowWrapper}
        />
      </View>

      <RowText
        messageOne={`It's Sunny`}
        messageTwo={weatherType.Thunderstorm.message}
        messageOneStyle={styles.descriptionText}
        messageTwoStyle={styles.subDescriptionText}
        containerStyle={styles.bodyWrapper}
      />
    </SafeAreaView>
  );
};

export default CurrentWeather;
