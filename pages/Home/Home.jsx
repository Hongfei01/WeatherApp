import { Text, View } from 'react-native';

import { styles } from './Home.style';
import { Txt } from '../../components/Txt/Txt';
import { MeteoBasic } from '../../components/MeteoBasic/MeteoBasic';
import { getWeatherInfo } from '../../utils/weatherCode';

export const Home = ({ weather }) => {
  const currentWeather = weather.current_weather;
  const temperature = currentWeather.temperature;
  const weatherInfo = getWeatherInfo(currentWeather.weathercode);
  return (
    <>
      <View style={styles.basic}>
        <MeteoBasic temperature={temperature} weatherInfo={weatherInfo} />
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
