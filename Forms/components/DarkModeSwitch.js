import { useState } from 'react';
import { Switch, StyleSheet, View, Text } from 'react-native';


export default function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.switchContainer}>
      <Text style={styles.text}>Dark mode {isDarkMode ? 'on' : 'off'}</Text>
      <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode((previousState) => !previousState)}
        trackColor={{ false: '#767677', true: 'lightblue' }}
        thumbColor='#f4f3f4'
      />
    </View>
  );
}


const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  text: {
    fontSize: 30,
    padding: 30
  }
});

