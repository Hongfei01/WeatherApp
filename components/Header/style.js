import { StyleSheet } from 'react-native';

import { scaleFontSize, horizontalScale } from '../../assets/styles/scaling';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  backButton: {
    width: horizontalScale(40),
  },
  box: {
    alignItems: 'center',
    marginLeft: horizontalScale(50),
  },
  subtitle: {
    fontSize: scaleFontSize(25),
  },
});
