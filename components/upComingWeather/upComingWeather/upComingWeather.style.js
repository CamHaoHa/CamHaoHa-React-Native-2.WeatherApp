import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  image: {
    flex: 1,
  },
});
export default styles;
