import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: SIZES.large,
    justifyContent: 'center',
  },
  highLowWrapper: { flexDirection: 'row' },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: SIZES.large,
    marginBottom: SIZES.xLarge,
  },
  highLowText: { fontSize: SIZES.large },
  descriptionText: { fontSize: SIZES.xLarge },
  subDescriptionText: { fontSize: SIZES.large },
  currentTempText: {
    color: COLORS.white,
    fontSize: SIZES.xxLarge,
    // fontFamily: FONT.bold,
  },
  feelLikeText: { fontSize: SIZES.xLarge },
});
export default styles;
