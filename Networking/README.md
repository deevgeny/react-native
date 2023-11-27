# Networking Project

## Contents
* [Create new expo app project](#create-new-expo-app-project)
* [Get request](#get-request)
* [Loading state](#loading-state)
* [Pull to refresh](#pull-to-refresh)

## Create new expo app project
```sh
# Install lates version (sdk-49)
npx create-expo-app@latest Forms --template blank@sdk-49

# Fix environment variable
export ANDROID_HOME='/home/evgeny/Android/Sdk'
```

## Get request

[PostsList.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Networking/components/PostsList.js)<br>
```js
// ./components/PostsList.js
import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

export default function PostsList() {
  const [postList, setPostList] = useState([]);

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPostList(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={postList}
        ItemSeparatorComponent={<View style={{ height: 16 }} />}
        ListEmptyComponent={<Text>No posts found</Text>}
        ListHeaderComponent={<Text style={styles.headerText}>Post list</Text>}
        ListFooterComponent={<Text style={styles.footerText}>End of list</Text>}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
          );
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  titleText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 24,
    color: '#666666'
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12
  }
});
```

[App.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Networking/App.js)<br>
```js
// App.js
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import PostsList from './components/PostsList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
```

## Loading state

[PostsList.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Networking/components/PostsList.js)<br>
```js
// .components/PostsList.js
...
export default function PostsList() {
  const [postList, setPostList] = useState([]);
  // Add new state
  const [isLoading, setIsLoading] = useState(true);

...
  const fetchData = async (limit = 10) => {
    ...
    // Change state when data is loaded
    setIsLoading(false);
  }
...
  // Conditionally render activity indicator
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#0000ff' />
        <Text>Loading...</Text>
      </View>
    );
  }
...
```

## Pull to refresh
Use `refreshing` and `onRefresh` attributes.

[PostsList.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Networking/components/PostsList.js)<br>
```js
// ./components/PostsList.js
...
export default function PostsList() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Add new state
  const [refreshing, setRefreshing] = useState(false);
...
// Create refresh handler
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  }
...

// Add attributes to FlatList
      <FlatList
        data={postList}
        refreshing={refreshing}
        onRefresh={handleRefresh}
```

## Post request

[CreatePost.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Networking/components/CreatePost.js)<br>
```js
// ./components/CreatePost.js
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
```
