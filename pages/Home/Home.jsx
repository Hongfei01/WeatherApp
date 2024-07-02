import { View } from 'react-native';

import { styles } from './Home.style';
import { MeteoBasic } from '../../components/MeteoBasic/MeteoBasic';
import { getWeatherInfo } from '../../utils/weatherCode';
import { MeteoAdvanced } from '../../components/MeteoAdvanced/MeteoAdvanced';
import { Searchbar } from '../../components/Searchbar/Searchbar';

export const Home = ({ weather, city, onSubmitSearch }) => {
  const currentWeather = weather.current_weather;
  const temperature = currentWeather.temperature;
  const weatherInfo = getWeatherInfo(currentWeather.weathercode);
  const sunrise = weather.daily.sunrise[0].split('T')[1];
  const sunset = weather.daily.sunset[0].split('T')[1];
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
        <Searchbar onSearch={onSubmitSearch} />
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
