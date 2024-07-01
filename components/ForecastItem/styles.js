import { StyleSheet } from 'react-native';
import { horizontalScale, scaleFontSize } from '../../assets/styles/scaling';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(15),
  },
  image: {
    height: horizontalScale(50),
    width: horizontalScale(50),
  },
  day: {
    fontSize: scaleFontSize(29),
  },
  date: {
    fontSize: scaleFontSize(20),
  },
  temperature: {
    textAlign: 'right',
    minWidth: horizontalScale(50),
  },
});
