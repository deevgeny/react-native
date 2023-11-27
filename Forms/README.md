# Forms Project

## Contents
* [Create new expo app project](#create-new-expo-app-project)
* [Text input](#text-input)
* [Text input props](#text-input-props)
* [Multiline test input](#multiline-text-input)
* [Switch](#switch)
* [Login form](#login-form)

## Create new expo app project
```sh
# Install lates version (sdk-49)
npx create-expo-app@latest Forms --template blank@sdk-49

# Fix environment variable
export ANDROID_HOME='/home/evgeny/Android/Sdk'
```

## Text input
* TextInput - is a fundamental fulding block for user input in React Native.

### TextInput example

[NameField.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Forms/components/NameField.js)<br>
```js
// ./components/NameField.js
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
```

[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Forms/App.js)<br>
```js
// App.js
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useState } from 'react';
import NameField from './components/NameField';

export default function App() {
  const [name, setName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <NameField />
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
```

## Text input props
* placeholder - display replacement text before user started to type in.
* secureTextEntry - for passwords.
* keyboardType - type of keyboard to use.
* autoCorrect - defaults to true.
* autoCapitalize - defaults to 'word'.

## Multiline text input
Use `multiline` prop with addional style.

### Multiline text input example

[MultilineInput.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Forms/components/MultilineInput.js)<br>
```js
// ./components/MultilineInput.js
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
```

[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Forms/App.js)<br>
```js
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
// import NameField from './components/NameField';
import MultilineInput from './components/MultilineInput';
// import DarkModeSwitch from './components/DarkModeSwitch';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MultilineInput />
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
```

## Switch
* Switch - is a switch component.

### Switch example

[DarkModeSwitch.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Forms/components/DarkModeSwitch.js)<br>
```js
// ./components/DarkModeSwitch.js
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
```

[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Forms/App.js)<br>
```js
// App.js
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
// import NameField from './components/NameField';
import DarkModeSwitch from './components/DarkModeSwitch';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DarkModeSwitch />
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
```

## Login form
* KeyboardAvoidingView - helps to prevent keyboard to overflow form.

### Login form example

[Login.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Forms/components/Login.js)<br>
```js
// ./components/Login.js
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  Platform,
} from 'react-native';


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require("./assets/adaptive-icon.png")}
          style={{
            width: 200,
            height: 400,
            alignSelf: "center",
            marginBottom: 50,
          }}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
```

[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Forms/App.js)<br>
```js
// App.js
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
```