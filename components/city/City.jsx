import React from 'react';
import styles from './city.style';
import { View, SafeAreaView, Text } from 'react-native';
import { ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { images } from '../../constants';

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageLayout}
        source={images.CloudsJPG}
      >
        <Text style={[styles.cityName, styles.cityText]}>London</Text>
        <Text style={[styles.countryName, styles.cityText]}>UK</Text>
        <View style={[styles.populationWrapper, styles.rowLayout]}>
          <Feather
            name={'user'}
            size={50}
            color={'red'}
          />
          <Text style={styles.populationText}>9000</Text>
        </View>
        <View style={[styles.riseSetWrapper, styles.rowLayout]}>
          <Feather
            name={'sunrise'}
            size={50}
            color={'white'}
          />
          <Text style={styles.riseSetText}>10:00:00am</Text>
          <Feather
            name={'sunset'}
            size={50}
            color={'white'}
          />
          <Text style={styles.riseSetText}>5:00:00pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default City;
