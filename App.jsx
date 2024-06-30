import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import background from './assets/background.png';
import { Home } from './pages/Home/Home';
import { Forecasts } from './components/Forecasts/Forecasts';
import { styles } from './App.style';
import { FetchWeatherApi } from './api/weather';

const Stack = createNativeStackNavigator();
const theme = {
  colors: {
    background: 'transparent',
  },
};
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
        setCity(city);
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
    <NavigationContainer theme={theme}>
      <ImageBackground
        style={styles.imgBg}
        source={background}
        imageStyle={styles.imgStyle}
      >
        <SafeAreaProvider>
          <SafeAreaView style={styles.root}>
            <Stack.Navigator
              initialRouteName='Home'
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name='Home'>
                {() => weather && <Home weather={weather} city={city} />}
              </Stack.Screen>

              <Stack.Screen name='Forecasts' component={Forecasts} />
            </Stack.Navigator>
            {/* {weather && <Home weather={weather} city={city} />} */}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
