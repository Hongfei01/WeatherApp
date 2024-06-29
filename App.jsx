import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';

import background from './assets/background.png';
import { Home } from './pages/Home/Home';
import { styles } from './App.style';
import { FetchWeatherApi } from './api/weather';

export default function App() {
  const [coordinate, setCoordinate] = useState(null);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);

  // get user location
  useEffect(() => {
    getLocation();
  }, []);

  // get weather
  useEffect(() => {
    async function fetchWeather() {
      if (coordinate) {
        const data = await FetchWeatherApi.getWeatherData(coordinate);
        const city = await FetchWeatherApi.getCityByCoordinate(coordinate);
        setWeather(data);
        setCity('city');
      }
    }
    fetchWeather();
  }, [coordinate]);

  async function getLocation() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === 'granted') {
      const location = await getCurrentPositionAsync();
      setCoordinate({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoordinate({
        lat: 23.11092534306887,
        lng: 113.5430762631675,
      });
    }
  }
  return (
    <ImageBackground
      style={styles.imgBg}
      source={background}
      imageStyle={styles.imgStyle}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          {weather && <Home weather={weather} city={city} />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
