import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    height: verticalScale(40),
    paddingLeft: horizontalScale(10),
    borderRadius: horizontalScale(25),
    fontFamily: 'Alta-Regular',
    color: 'black',
    fontSize: scaleFontSize(15),
    fontWeight: 'bold',
  },
});
