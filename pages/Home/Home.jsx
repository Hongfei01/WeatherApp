import { View } from 'react-native';

import { styles } from './Home.style';
import { Txt } from '../../components/Txt/Txt';
import { MeteoBasic } from '../../components/MeteoBasic/MeteoBasic';
import { getWeatherInfo } from '../../utils/weatherCode';
import { MeteoAdvanced } from '../../components/MeteoAdvanced/MeteoAdvanced';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { useState } from 'react';

export const Home = ({ weather, city }) => {
  const [search, setSearch] = useState('');
  const currentWeather = weather.current_weather;
  const temperature = currentWeather.temperature;
  const weatherInfo = getWeatherInfo(currentWeather.weathercode);
  const sunrise = weather.daily.sunrise[0].split('T')[1];
  const sunset = weather.daily.sunset[0].split('T')[1];
  console.log(search);
  return (
    <>
      <View style={styles.basic}>
        <MeteoBasic
          temperature={temperature}
          weatherInfo={weatherInfo}
          city={city}
          dailyWeather={weather.daily}
        />
      </View>
      <View style={styles.searchbar}>
        <Searchbar onSearch={setSearch} />
      </View>
      <View style={styles.advanced}>
        <MeteoAdvanced
          sunrise={sunrise}
          sunset={sunset}
          windspread={currentWeather.windspeed}
        />
      </View>
    </>
  );
};
