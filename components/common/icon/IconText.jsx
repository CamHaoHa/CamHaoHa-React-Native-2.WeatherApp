import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './iconText.style';
const IconText = ({
  iconName,
  iconSize,
  iconColor,
  bodyText,
  bodyTextStyle,
}) => {
  return (
    <View style={styles.container}>
      <Feather
        name={iconName}
        style={{ fontSize: iconSize }}
        color={iconColor}
      />
      <Text style={[bodyTextStyle, styles.textTheme]}>{bodyText}</Text>
    </View>
  );
};

export default IconText;
