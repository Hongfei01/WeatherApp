import { TextInput } from 'react-native';

import { styles } from './styles';
export const Searchbar = ({ onSearch }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder='type a city... ex paris'
      onSubmitEditing={(e) => onSearch(e.nativeEvent.text)}
    />
  );
};
