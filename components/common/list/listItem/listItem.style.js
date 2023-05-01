import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
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
  temp: {
    color: 'white',
    fontSize: SIZES.small,
  },
  date: {
    color: 'white',
    fontSize: SIZES.xSmall,
  },
});

export default styles;
