import { View } from 'react-native';

import { styles } from './styles';
import { Txt } from '../Txt/Txt';
import { Header } from '../Header/Header';

export const Forecasts = ({ route }) => {
  const params = route.params;
  return (
    <View>
      <Header city={params.city} />
    </View>
  );
};
