import React from 'react';
import { View, Text } from 'react-native';

const RowText = ({
  messageOne,
  messageTwo,
  containerStyle,
  messageOneStyle,
  messageTwoStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Text style={messageOneStyle}>{messageOne}</Text>
      <Text style={messageTwoStyle}>{messageTwo}</Text>
    </View>
  );
};
export default RowText;
