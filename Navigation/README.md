# Navigation Project
[React Navigation docs](https://reactnavigation.org/docs/getting-started/)

## Contents
* [Create new expo app project](#create-new-expo-app-project)
* [Stack navigation](#stack-navigation)
* [Navigations between screens](#navigations-between-screens)
* [Passing data between screens](#passing-data-between-screens)
* [Stack navigation options](#stack-navigation-options)
* [Dynamic stack navigator options](#dynamic-stack-navigator-options)
* [Drawer navigation](#drawer-navigation)
* [Tab navigation](#tab-navigation)

## Create new expo app project
```sh
# Install lates version (sdk-49)
npx create-expo-app@latest Forms --template blank@sdk-49

# Install React Navigation
npm install @react-navigation/native

# Install dependencies into Expo project
npx expo install react-native-screens react-native-safe-area-context

# Fix environment variable
export ANDROID_HOME='/home/evgeny/Android/Sdk'
```

Copy starter code from docs and paste it into `AppStack.js` file:
```js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```

## Stack navigation
* Each new screen is stacked on top of the previous one like a deck of cards.
* When you navigate to a new screen, a new card is placed on top of the stack,
and when you navigate back, the top card is removed, revealing the previous
screen.
* Allows users to drill down into detailed views and then retrace their steps
when done.
* It's particularly usefull in scenarious where a linear flow of screens is 
required.

There are two navigators:
* Stack Navigator - is a JavaScript-based navigator which offers a high degree
of customization, making it a great choice for apps that require a unique
navigation experience.
* Native Stack Navigator - leverages the native navigation constructs of iOS
and Android, providing better preformance and a more native feel to the
transitions and gestures.

Install Native Stack Navigator:<br>
[Docs](https://reactnavigation.org/docs/native-stack-navigator)
```sh
# Install native stack navigator
npm install @react-navigation/native-stack
```

Create HomeScreen:<br>
[HomeScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/HomeScreen.js)<br>
```js
// ./screens/HomeScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
```

Create AboutScreen:<br>
[AboutScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/AboutScreen.js)<br>
```js
// ./screens/AboutScreen.js
import { View, Text, Button, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
```

Add screens to AppStack.js file:<br>
[AppStack.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/AppStack.js)<br>
```js
// AppStack.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { creteNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = creteNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      // First screen component is default for initialRouteName
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Navigations between screens
* Every screen component is provided with navigation prop from navigator.

Add button and use `navigation` prop in HomeScreen:<br>
[HomeScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/HomeScreen.js)<br>
```js
// ./screens/HomeScreen.js
...
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title='Go to about'
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}
...
```

Add button and use useNavigation hook in HomeScreen<br>
[HomeScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/HomeScreen.js)<br>
```js
// ./screens/HomeScreen.js
...
import { useNavigation } from '@react-navigation/native';
...
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title='Go to about'
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}
...
```
Use `navigation` prop for all components and `useNavigation` only when it is
really necessary.

## Passing data between screens

Pass object as second argument to `navigation.navigate()`:<br>
[HomeScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/HomeScreen.js)<br>
```js
// ./screens/HomeScreen.js
...
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title='Go to about'
        onPress={() => navigation.navigate('About', {name: 'Evgeny'})}
      />
    </View>
  );
}
...
```

Get data from `route` prop in target component:<br>
[AboutScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/AboutScreen.js)<br>
```js
// ./screens/AboutScreen.js
...
export default function AboutScreen({ route }) {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
    </View>
  );
}
...
```

Set initial values for parameters:<br>
[AppStack.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/AppStack.js)<br>
```js
// AppStack.js
...
        <Stack.Screen
          name='About'
          component={AboutScreen}
          initialParams={{name: 'Guest'}
        />
...
```

Change parameters from inside component:<br>
[AboutScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/AboutScreen.js)<br>
```js
// ./screens/AboutScreen.js
...
export default function AboutScreen({ route, navigation }) {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button
        title='Change name'
        onPress={() => navigation.setParams({name: 'New name'})}
      />
      <Button
        title="Go back with data"
        onPress={() => {
          navigation.navigate("Home", { result: "Data from About" });
        }}
      />
    </View>
  );
}
...
```

## Stack navigation options
Navigation options paramter has following values:
* title - defaults to name, can be change to custom value to display in top bar.
* headerStyle - object for header style.
* headerTintColor - value.
* headerTitleStyle - object for text title color
* contentStyle - object for screen content style.

It can be applied to a specific screen or to all screens:
* `<Stack.Navigator screenOptions ={{ ... }} ... />`
* `<Stack.Screen options={{ ... }} ... />`

Code example:<br>
[AppStack.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/AppStack.js)<br>
```js
// AppStack.js
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Welcome',
            headerStyle: {
              backgroundColor: '#6a51ae'
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWight: 'bold' },
            headerRight: () => (
              <Pressable onPress={() => alert('Menu button pressed!')}>
                <Text style={{ color: '#fff', fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
            contentStyle: { backgroundColor: '#e8e4f3'}
          }}
        />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
```

## Dynamic stack navigator options
* options and props - when driven by route parameters.
* useLayoutEffect - when it depends on components internal logic, state or props.

### Set title dynamically with options and props
Pass props with `navigation.navigate`:<br>
[AboutScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/AboutScreen.js)<br>
```js
// ./screens/HomeScreen.js
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About", { name: "Evgeny" })}
      />
```

Pass callback with descruturing props to options:<br>
[AppStack.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/AppStack.js)<br>
```js
// AppStack.js
        <Stack.Screen
          name='About'
          component={AboutScreen}
          options={({ route }) => ({
            title: route.params.name
          })}
        />
```

### Set title dynamically with useLayoutEffect hook
Code example with useLayoutEffect hook:<br>
[AboutScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/AboutScreen.js)<br>
```js
// ./screens/AboutScreen.js
import { useLayoutEffect } from "react";
...
export default function AboutScreen({ navigation, route }) {
  const { name } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);
...
```

## Drawer navigation
* Drawer Navigator introduces a hidden menu, sliding from either side of the
screen.
* It is particularly beneficial in apps with multiple main sections that
require a neat and organized navigation structure.
* createDrawerNavigator() - function to create Drawer Navigator.

[Drawer navigator docs](https://reactnavigation.org/docs/drawer-navigator)
[React Reanimated docs](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started)

### Install
```sh
# Install drawer navigator
npm install @react-navigation/drawer

# Install dependencies
npx expo install react-native-gesture-handler react-native-reanimated

# Add to babel.config.js file:
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],

# Add -c to clear the cach in package.json file:
  "scripts": {
    "start": "expo start -c",
```

### DashboardScreen component
Navigation
* `navigation.toggleDrawer()` - toggle drawer programatically.
* `navigation.jumpTo()` - go to drawer screen programatically.

[DashboardScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/DashboardScreen.js)<br>
```js
// ./screens/DashboardScreen.js
import { View, Text, StyleSheet, Button } from "react-native";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DashboardScreen</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Settings" onPress={() => navigation.jumpTo("Settings")} />
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
```

### SettingsScreen component
[SettingsScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/SettingsScreen.js)<br>
```js
// ./screens/SettingsScreen.js
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SettingsScreen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
```

### App file
Drawer options
* `title` - drawer main title.
* `drawerLabel` - menu item label.
* `drawerActiveTintColor` - active menu item style.
* `drawerActiveBackgroundColor` - active menu item style.
* `drawerContentStyle` - object for drawer content style.

[AppDrawer.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/AppDrawer.js)<br>
```js
// AppDrawer.js
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./screens/DashboardScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "My dashboard",
            drawerLabel: "Dashboard label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            },
          }}
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

## Tab navigation
* Tab Navigation offers a way to switch between different screens by tapping
on a tab which is usually dipslayed at the bottom of the screen.
* It's a common and intuitive navigation pattern fount in many apps, providing
a seamless, user-friendly experience.

[Bottom Tab Navigator docs](https://reactnavigation.org/docs/bottom-tab-navigator)


### Install
```sh
npm install @react-navigation/bottom-tabs
```

### ProfileScreen component
[ProfileScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/ProfileScreen.js)<br>
```js
// ./screens/ProfileScreen.js
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
```

### CourseListScreen component
[CourseListScreen.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/screens/CourseListScreen.js)<br>
```js
// ./screens/CourseListScreen.js
import { View, Text, StyleSheet } from "react-native";

const CourseListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CourseListScreen</Text>
    </View>
  );
};

export default CourseListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
```

### App file
Tab screenOptions
* `tabBarLabelPosition` - label position relative to icon.
* `tabBarShowLabel` - show or hide label.
* `tabBarActiveTintColor` - active tab bar item style.
* `tabBarInActiveTintColor` - inactive tab bar item style.
* `tabBarBadge` - add a badge to icon. 

Tab screen item options
* `tabBarLabel` - tab bar item label.
* `tabBarIcon` - tab bar item icon.

Nesting navigators
* nest stack navigator - see export function in [AppStack.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/AppStack.js)<br>

[AppTab.js](https://github.com/deevgeny/react-tutorials/blob/main/react-native/Navigation/AppTab.js)<br>
```js
// AppTab.js
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/SettingsScreen";
import CourseListScreen from "./screens/CourseListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          //   tabBarShowLabel: false,
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "purple",
        }}
      >
        <Tab.Screen name="Course List" component={CourseListScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: ({ color }) => <Ionicons name={"person"} size={20} color={color} />,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```