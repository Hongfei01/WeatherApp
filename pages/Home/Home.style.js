import { StyleSheet } from 'react-native';
import {
  scaleFontSize,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';
export const styles = StyleSheet.create({
  basic: {
    flex: 2,
  },
  searchbar: {
    flex: 2,
  },
  advanced: {
    flex: 1,
    marginBottom: verticalScale(15),
  },
  txt: {
    color: 'white',
    fontSize: scaleFontSize(30),
    fontFamily: 'Alta-Regular',
  },
});
