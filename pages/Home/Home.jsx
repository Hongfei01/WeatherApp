import { Text, View } from 'react-native';

import { styles } from './Home.style';
import { Txt } from '../../components/Txt/Txt';

export const Home = () => {
  return (
    <>
      <View style={styles.basic}>
        <Txt>weather basic</Txt>
      </View>
      <View style={styles.searchbar}>
        <Txt>searcgbar</Txt>
      </View>
      <View style={styles.advanced}>
        <Txt>advanced</Txt>
      </View>
    </>
  );
};
