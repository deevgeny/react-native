# Styling Project

## Contents
* [Create new expo app project](#create-new-expo-app-project)
* [StyleSheet API](#stylesheet-api)
* [Multiple styles](#multiple-styles)
* [Box model](#box-model)
* [Shadow and elevation](#shadow-and-elevation)

## Create new expo app project
```sh
# Install lates version (sdk-49)
npx create-expo-app@latest Styling --template blank@sdk-49

# Fix environment variable
export ANDROID_HOME='/home/evgeny/Android/Sdk'
```

## StyleSheet API
StyleSheet API example:
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Styles/App.js)<br>
```javascript
// App.js
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'plum', padding: 60 },
  title: { fontSize: 30 }
});
```

## Multiple styles
Multiple styles example:
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Styles/App.js)<br>
```javascript
// App.js
// The last value in the styles array takes precedence
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg]}>
        <Text>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'plum', padding: 60 },
  box: {
    width: 100,
    height: 100,
    padding: 10
  },
  lightblueBg: {
    backgroundColor: 'lightblue'
  },
  lightgreenBg: {
    backgroundColor: 'lightgreen'
  },
});
```

## Box model
* All dimensions are unitless and represent density independent pixels.
* If parent component has dimensions, children can use persentage dimension values.

Box model example:
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Styles/App.js)<br>
```javascript
// App.js
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBg]}>
        <Text style={{ borderRadius: 5, backgroundColor: 'red' }}>Lightblue box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBg]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'plum', padding: 60 },
  box: {
    width: '25%',
    height: '25%',
    // padding: 10
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: 'purple',
    borderStyle: 'solid', // default
    borderRadius: 5
  },
  lightblueBg: {
    backgroundColor: 'lightblue'
  },
  lightgreenBg: {
    backgroundColor: 'lightgreen'
  },
});
```

## Shadow and elevation

Shadow example:
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Styles/App.js)<br>
```javascript
// App.js
...
export const styles = StyleSheet.create({
  ...
// iOS
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
// Android
  androidShadow: {
    elevation: 10
  }
});
```

## Style inheritance
* In React Native Text component does not inherit styles from View component.
* But nested Text inherits from another Text component.
