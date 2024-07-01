import { TouchableOpacity, View } from 'react-native';

import { Txt } from '../Txt/Txt';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export const Header = ({ city }) => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={nav.goBack}>
        <Txt style={styles.backButton}>{'<'}</Txt>
      </TouchableOpacity>
      <View style={styles.box}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt style={styles.subtitle}>7 days forecasts</Txt>
      </View>
    </View>
  );
};
