import { View, Image } from 'react-native';
import { Txt } from '../Txt/Txt';

import { styles } from './styles';
import { Clock } from '../Clock/Clock';
export const MeteoBasic = ({ temperature, weatherInfo, city }) => {
  return (
    <>
      <View style={styles.clock}>
        <Clock />
      </View>
      <View style={styles.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={styles.interpretation}>
        <Txt style={styles.interpertation_txt}>{weatherInfo.label}</Txt>
      </View>
      <View style={styles.temperature_box}>
        <Txt style={styles.temperature}>{Math.round(temperature)}°</Txt>
        <Image style={styles.image} source={weatherInfo.image} />
      </View>
    </>
  );
};
