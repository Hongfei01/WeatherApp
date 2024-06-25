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

export default function App() {
  const [coordinate, setCoordinate] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

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
  console.log(coordinate);
  return (
    <ImageBackground
      style={styles.imgBg}
      source={background}
      imageStyle={styles.imgStyle}
    >
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
