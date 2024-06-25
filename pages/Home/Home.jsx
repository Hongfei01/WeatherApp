import { Text, View } from 'react-native';

import { styles } from './Home.style';

export const Home = () => {
  return (
    <>
      <View style={styles.basic}>
        <Text style={styles.txt}>weather basic</Text>
      </View>
      <View style={styles.searchbar}>
        <Text style={styles.txt}>searcgbar</Text>
      </View>
      <View style={styles.advanced}>
        <Text style={styles.txt}>advanced</Text>
      </View>
    </>
  );
};
