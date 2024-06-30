import { TouchableOpacity, View } from 'react-native';

import { Txt } from '../Txt/Txt';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

export const Header = ({ city }) => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={nav.goBack}>
        <Txt>{'<'}</Txt>
      </TouchableOpacity>
      <View style={styles.box}>
        <Txt>{city}</Txt>
        <Txt style={styles.subtitle}>7 days forecast</Txt>
      </View>
    </View>
  );
};
