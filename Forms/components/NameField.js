import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import { useState } from 'react';

export default function NameField() {
  const [name, setName] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.text}>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  text: {
    fontSize: 30,
    padding: 10
  }
});
