import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';

import background from './assets/background.png';
import { Home } from './pages/Home/Home';
import { styles } from './App.style';

export default function App() {
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
