import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { images } from '../../../constants';
import styles from './upComingWeather.style';

const Item = (props) => {
  const { dt, min, max, condition } = props;
  return (
    <View style={styles.item}>
      <Feather
        name={'sun'}
        size={50}
        color={'white'}
      />
      <Text>{dt}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
      <Text>{condition}</Text>
    </View>
  );
};
const UpComingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt={item.dt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const DATA = [
    {
      dt: 1661875200,
      main: {
        temp_min: 296.34,
        temp_max: 298.24,
      },
      weather: [
        {
          main: 'Rain',
        },
      ],
    },
    {
      dt: 1661875201,
      main: {
        temp_min: 196.34,
        temp_max: 198.24,
      },
      weather: [
        {
          main: 'LightRain',
        },
      ],
    },
    {
      dt: 1661875202,
      main: {
        temp_min: 396.34,
        temp_max: 398.24,
      },
      weather: [
        {
          main: 'Sunny',
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <ImageBackground
        source={images.CloudsJPG}
        style={styles.image}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UpComingWeather;
