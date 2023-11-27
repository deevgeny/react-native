import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import PostsList from './components/PostsList';
import CreatePost from './components/CreatePost';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CreatePost />
      <PostsList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight 
  },
});
