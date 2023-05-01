import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: SIZES.large,
    marginVertical: SIZES.xSmall,
    marginHorizontal: SIZES.medium,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: SIZES.xxSmall,
    backgroundColor: COLORS.tertiary,
  },
  image: {
    flex: 1,
  },
});
export default styles;
