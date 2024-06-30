import { StyleSheet, View } from 'react-native';

import { Txt } from '../Txt/Txt';
import {
  scaleFontSize,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: scaleFontSize(2),
    backgroundColor: '#0000005c',
    borderColor: 'white',
    borderRadius: horizontalScale(15),
  },
});

export const StyleContainer = ({ children }) => {
  return <View style={{ alignItems: 'center' }}>{children}</View>;
};
export const StyleLabel = ({ children }) => {
  return <Txt style={{ fontSize: scaleFontSize(15) }}>{children}</Txt>;
};

export const StyleValue = ({ children }) => {
  return <Txt style={{ fontSize: scaleFontSize(20) }}>{children}</Txt>;
};
