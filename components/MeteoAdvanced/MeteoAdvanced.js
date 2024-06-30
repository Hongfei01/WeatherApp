import { View } from 'react-native';

import { StyleContainer, StyleLabel, StyleValue, styles } from './styles';
export const MeteoAdvanced = ({ sunrise, sunset, windspread }) => {
  return (
    <View style={styles.container}>
      <StyleContainer>
        <StyleLabel>{sunrise}</StyleLabel>
        <StyleValue>Sunrise</StyleValue>
      </StyleContainer>
      <StyleContainer>
        <StyleLabel>{sunset}</StyleLabel>
        <StyleValue>Sunset</StyleValue>
      </StyleContainer>
      <StyleContainer>
        <StyleLabel>{windspread} km/h</StyleLabel>
        <StyleValue>Windspread</StyleValue>
      </StyleContainer>
    </View>
  );
};
