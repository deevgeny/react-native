import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';

export default function CreatePost() {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isPosting, setIsPosting] = useState(false);

  const addPost = async () => {
    setIsPosting(true);
    const response = fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: 1
      })
    });
    // const newPost = await response.json();
    setPostTitle('');
    setPostBody('');
    setIsPosting(false);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder='Post title'
        value={postTitle}
        onChangeText={setPostTitle}
      />
      <TextInput
        style={styles.input}
        placeholder='Post body'
        value={postBody}
        onChangeText={setPostBody}
      />
      <Button
        title={isPosting ? 'Adding...' : 'Add'}
        onPress={addPost}
        disabled={isPosting}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8
  },
});