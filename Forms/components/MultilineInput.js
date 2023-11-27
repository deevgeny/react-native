import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

export default function MultilineInput() {
  return (
    <View>
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder='multiline input'
      />
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
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
});
