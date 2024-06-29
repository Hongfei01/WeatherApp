import { Text } from 'react-native';

import { styles } from './styles';
export const Txt = ({ style, children }) => {
  return <Text style={[styles.txt, style && style]}>{children}</Text>;
};
