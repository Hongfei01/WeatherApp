import { StyleSheet } from 'react-native';

import { scaleFontSize, horizontalScale } from '../../assets/styles/scaling';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  backButton: {
    width: horizontalScale(30),
  },
  box: {
    flex: 1,
    alignItems: 'center',
    marginRight: horizontalScale(30),
  },
  subtitle: {
    fontSize: scaleFontSize(25),
  },
});
