import { ScrollView, View } from 'react-native';

import { styles } from './styles';
import { Header } from '../Header/Header';
import { ForecastItem } from '../ForecastItem/ForecastItem';
import { getWeatherInfo } from '../../utils/weatherCode';
import { DAYS } from '../../utils/dateFormate';

export const Forecasts = ({ route }) => {
  const params = route.params;
  return (
    <View>
      <Header city={params.city} />
      <ScrollView contentContainerStyle={styles.list}>
        {params.time.map((time, index) => {
          const weatherCode = params.weathercode[index];
          const image = getWeatherInfo(weatherCode).image;
          const temperature = params.temperature_2m_max[index];
          const date = new Date(time);
          const dayOfTheWeek = DAYS[date.getDay()];
          const formatedDate = date.toLocaleDateString('default', {
            day: 'numeric',
            month: 'numeric',
          });
          return (
            <ForecastItem
              key={time}
              image={image}
              day={dayOfTheWeek}
              date={formatedDate}
              temperature={temperature}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
