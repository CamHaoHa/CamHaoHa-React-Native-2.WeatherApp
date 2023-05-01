import React from 'react';
import styles from './city.style';
import { View, SafeAreaView, Text } from 'react-native';
import { ImageBackground } from 'react-native';
import { images } from '../../constants';
import IconText from '../common/icon/IconText';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageLayout}
        source={images.Moutain}
      >
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>UK</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <IconText
            iconName={'user'}
            iconSize={50}
            iconColor={'red'}
            bodyText={'10000'}
            bodyTextStyle={styles.populationText}
          />
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <IconText
            iconName="sunrise"
            iconSize={50}
            iconColor="white"
            bodyText="4:00:00am"
            bodyTextStyle={styles.riseSetText}
          />
          <IconText
            iconName="sunset"
            iconSize={50}
            iconColor={'white'}
            bodyText={'5:00:00pm'}
            bodyTextStyle={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;
