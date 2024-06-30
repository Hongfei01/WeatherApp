import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Txt } from '../Txt/Txt';
import { Clock } from '../Clock/Clock';

import { styles } from './styles';
import { ROUTES } from '../../routes/routes';

export const MeteoBasic = ({
  temperature,
  weatherInfo,
  city,
  dailyWeather,
}) => {
  const nav = useNavigation();

  function handleNav() {
    nav.navigate(ROUTES.FORECASTS, { city, ...dailyWeather });
  }
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
        <TouchableOpacity onPress={handleNav}>
          <Txt style={styles.temperature}>{Math.round(temperature)}°</Txt>
        </TouchableOpacity>
        <Image style={styles.image} source={weatherInfo.image} />
      </View>
    </>
  );
};
