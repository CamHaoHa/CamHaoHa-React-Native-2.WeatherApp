import React from 'react';
import { View, Text } from 'react-native';
import styles from './listItem.style';
import { Feather } from '@expo/vector-icons';

const ListItem = ({ dt, min, max }) => {
  return (
    <View style={styles.item}>
      <Feather
        name="sun"
        size={50}
        color={'white'}
      />
      <Text style={styles.date}>{dt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

export default ListItem;
