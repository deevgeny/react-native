import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
// import NameField from './components/NameField';
// import MultilineInput from './components/MultilineInput';
// import DarkModeSwitch from './components/DarkModeSwitch';
import Login from './components/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight
  }
});
