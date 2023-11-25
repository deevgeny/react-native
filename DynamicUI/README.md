# Dynamic User Interfaces Project

## Contents
* [Create new expo app project](#create-new-expo-app-project)
* [Dimensions API](#dimensions-api)
* [Dimensions API Drawback](#dimensions-api-drawback)
* [useWindowDimensions hook](#usewindowdimensions-hook)
* [Safe area view](#safe-area-view)

## Create new expo app project
```sh
# Install lates version (sdk-49)
npx create-expo-app@latest DynamicUI --template blank@sdk-49

# Fix environment variable
export ANDROID_HOME='/home/evgeny/Android/Sdk'
```

## Dimensions API
* Dimensions.get(value) - get device dimensions.
* Values - screen - entire display size, window - viewport of application.

Dimensions example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/DynamicUI/App.js)<br>
```javascript
// App.js
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome!</Text>
      </View>

    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: windowWidth > 500 ? '70%' : '90%',
    height: windowHeight > 600 ? '60%' : '90%',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: windowWidth > 500 ? 50 : 24
  }
});
```

## Dimensions API Drawback
* Dimensions do not update dynamically when rotating the device.

How to fix it!<br>
[app.json file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/DynamicUI/app.json)<br>
Set app to follow device rotation:
```json
// app.json
{
  "expo": {
    "name": "DynamicUI",
    "slug": "DynamicUI",
    "version": "1.0.0",
    "orientation": "portrait", // Change to "default"
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

Add useState and useEffect to set dymanic behavior:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/DynamicUI/App.js)<br>
```javascript
// App.js
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get('window')
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ window });

    });

    return () => subscription?.remove();
  });

  const { window } = dimensions;
  const windowWidth = window.width;
  const windowHeight = window.height;

  return (
    <View style={styles.container}>
      <View style={[styles.box, {
        width: windowWidth > 500 ? '70%' : '90%',
        height: windowHeight > 600 ? '60%' : '90%',
      }]}>
        <Text style={{ fontSize: windowWidth > 500 ? 50: 24 }}>Welcome!</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

```

## useWindowDimensions hook
useWindowDimensions example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/DynamicUI/App.js)<br>
```javascript
// App.js
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <View style={[styles.box, {
        width: windowWidth > 500 ? '70%' : '90%',
        height: windowHeight > 600 ? '60%' : '90%',
      }]}>
        <Text style={{ fontSize: windowWidth > 500 ? 50: 24 }}>Welcome!</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
```

## Safe area view
* SaveAreaView - will render content in device safe area. This will consider
rounded screen corners and camera notches.

SafeAreaView example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/DynamicUI/App.js)<br>
```javascript
// App.js
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum'
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
```

## Platform specific extensions
How to organize platform-specific code:
* Platform module
* Platform-specific extensions

### Platform module
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/DynamicUI/App.js)<br>
```javascript
// App.js
import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum'
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  box: {
    padding: 20,
  },
  text: {
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24
      },
      android: {
        color: 'blue',
        fontSize: 30
      }
    }),
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
```

### Platform-specific extensions
Create component for ios platform:<br>
[CustomButton.ios.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/DynamicUI/components/CustomButton/CustomButton.ios.js)<br>
```javascript
// ./components/CustomButton/CustomButton.ios.js
import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({ onPress, title }) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightblue",
      borderRadius: 20,
      padding: 10,
    }}
  >
    <Text style={{ color: "purple", fontSize: 18 }}>{title}</Text>
  </Pressable>
);

export default CustomButton;
```

Create component for android platform:<br>
[CustomButton.android.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/DynamicUI/components/CustomButton/CustomButton.android.js)<br>
```javascript
// ./components/CustomButton/CustomButton.android.js
import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({ onPress, title }) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightblue",
      borderRadius: 5,
      padding: 10,
    }}
  >
    <Text style={{ color: "blue", fontSize: 18 }}>{title}</Text>
  </Pressable>
);

export default CustomButton;
```

Import components and use in App.js:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/DynamicUI/App.js)<br>
```javascript
// App.js
// Import from component folder without specifying module extension
// The platform will be detected automatically
...
import CustomButton from './components/CustomButton/CustomButton';
...
// Use the module in code
<CustomButton onPress={() => alert('Pressed')} title='Press me' />
...
```
