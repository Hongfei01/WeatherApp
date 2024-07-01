import { View, Image } from 'react-native';

import { Txt } from '../Txt/Txt';

import { styles } from './styles';

export const ForecastItem = ({ image, day, date, temperature }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Txt style={styles.day}>{day}</Txt>
      <Txt style={styles.date}>{date}</Txt>
      <Txt style={styles.temperature}>{temperature.toFixed(0)}°</Txt>
    </View>
  );
};
