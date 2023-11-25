# Core Components Project

## Contents
* [Create new expo app project](#create-new-expo-app-project)
* [Core components](#core-components)
* [View](#view)
* [Text](#text)
* [Image](#image)
* [Scroll view](#scroll-view)
* [Button](#button)
* [Pressable](#pressable)
* [Modal](#modal)
* [Status bar](#status-bar)
* [Activity indicator](#activity-indicator)
* [Alert](#alert)
* [Custom components](#custom-components)

## Create new expo app project
```sh
# Install lates version (sdk-49)
npx create-expo-app@latest CoreComponents --template blank@sdk-49

# Fix environment variable
export ANDROID_HOME='/home/evgeny/Android/Sdk'
```

## Core components
* View - is fundamental building block for user interfaces.
* View is a small rectangular element on the screen that can display text, images
or resond to user input.
* Android - views are written in Kotlin or Java.
* iOS - views are written in Swift or Objective-C.
* React Native - views using JavaScript through React components.
* At runtime React Native generates the corresponding Android and iOS views for
these components.

React Native offers a collection of pre-build core components:
* View
* Text
* Image
* ScrollView
* TextInput

## View
* View is a fundamental core component in React Native that serves as a building
block for creating user interfaces.
* It functions as a container that supports layout using flexbox, styling,
touch handling and accessibility controls.
* Can be compared to div tag.

Nested view components:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/App.js)<br>
`flex: 1` - expand component to available space.
```javascript
// App.js
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum'}}>
      <View style={{ width: 200, height: 200, backgroundColor: 'lightblue' }}>
      </View>
      <View style={{ width: 200, height: 200, backgroundColor: 'lightgreen' }}>
      </View>
    </View>
  );
}
```

## Text
* Text - component for displaying text.
* It supports nesting, styling and touch handling.
* Depending on the target platform, React Native will translate this
component to either a UITextView (iOS), a TextView (Android), or a 'p' (Web).

Nested text components:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/App.js)
```javascript
// App.js
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Text>
        <Text style={{color: 'white'}}>Hello</Text> World
      </Text>
    </View>
  );
}
```

## Image
The Image component enables us to display various types of images, including:
* Static images
* Network images
* Images from the local disk, such as the camera roll

React Native seamlessly translates the Image component to platform-specific
counterparts:
* UIImageView for iOS
* ImageView for Android
* 'img' for the Web

Display images:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/App.js)
```javascript
// App.js
import { View, Text, Image, ImageBackground } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');


export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
{/*       <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: 'https://dummyimage.com/300x300/000000/fff' }}
        style={{ width: 300, height: 300 }}
      />
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/84.jpg' }}
        style={{ width: 100, height: 100 }}
      /> */}
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
    </View>
  );
}
```

## Scroll view
* ScrollView component wraps the platform-specific scrolling functionality.
* ScrollView require a bounded height to function properly.

ScrollView example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/App.js)
```javascript
// App.js
import { View, Text, Image, ScrollView } from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');


export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
          volutpat tortor, et placerat dui. Phasellus vehicula, dolor non
          vulputate dignissim, sapien dui molestie lectus, a congue nulla diam
          non dolor. Sed venenatis tincidunt nibh et suscipit. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Integer lobortis
          est mi, eu eleifend nibh volutpat sed. Integer ut lectus maximus,
          ullamcorper nisi vitae, vestibulum leo. Mauris ac justo sem. Sed
          rutrum varius malesuada. Fusce suscipit feugiat imperdiet.
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
```

## Button
* The Button component allows users to trigger actions.
* The Button component has platform-specific rendering for iOS and Android.

Button example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/App.js)
```javascript
// App.js
import {
  View,
  Button
} from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');


export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Button
        title='Press'
        onPress={() => console.log('Button pressed')}
        color='midnightblue'
        disabled
      />
    </View>
  );
}
```

## Pressable
* Pressable is a wrapper component that detects various stages of press
interactions on its defined children.
* Use pressable to create custom button.

Pressable attributes:
* onPressIn is called when a press is activated.
* onLongPress is triggered when a press is hold for longer than 500 ms.
* onPressOut is called when the press gesture is deactivated.

Pressable example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/App.js)
```javascript
// App.js
import {
  View,
  Text,
  Image,
  Button,
  Pressable
} from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');


export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Button
        title='Press'
        onPress={() => console.log('Button pressed')}
        color='midnightblue'
      />
      <Pressable onPress={() => console.log('Image pressed')}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={() => console.log('Text pressed')}>
        <Text>Some text</Text>
      </Pressable>
    </View>
  );
}
```

## Modal
* Modal is a screen that overlays the app content to provide important
information of prompt the user for a decision.
* Since they are purposefully interruptive make sure you use them only when
necessary.

Modal example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/App.js)
```javascript
// App.js
import {
  View,
  Text,
  Button,
  Modal
} from 'react-native';
import { useState } from 'react';
const logoImg = require('./assets/adaptive-icon.png');


export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Button
        title='Press'
        onPress={() => setIsVisible(true)}
        color='midnightblue'
      />
      <Modal
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        animationType='fade' // fade | slide | none
        presentationStyle='formSheet' // formSheet | pageSheet | fullScreen only for iOS
      >
        <View style={{ flex: 1, backgroundColor: 'lightblue', padding: 60 }}>
          <Text>Modal conent</Text>
          <Button
            title='Close'
            color='midnightblue'
            onPress={() => setIsVisible(false)}
          />
        </View>
      </Modal>

    </View>
  );
}
```

## Status bar
* The StatusBar component allows you to control the application's status bar.
* The status bar is the zone, typically at the top of the screen, that
displays the current time, Wi-Fi and network information, battery level
other status icons.

StatusBar example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/App.js)
```javascript
// App.js
import {
  View,
  StatusBar
} from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');


export default function App() {

  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <StatusBar
        backgroundColor='lightgreen'
        barStyle='dark-content' // default | light-content | dark-content
        hidden
      />
    </View>
  );
}
```

## Activity indicator
* The ActivityIndicator component displays a circular loading indicator.
* It is used to inform users about the status of ongoing processes, such as
loading an app, submitting a form, or saving updates.

ActivityIndicator example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/App.js)
```javascript
// App.js
import {
  View,
  ActivityIndicator
} from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');


export default function App() {

  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <ActivityIndicator />
      <ActivityIndicator size='large' />
      <ActivityIndicator size='large' color='midnightblue' />
      <ActivityIndicator size='large' color='midnightblue' animating={false} />
    </View>
  );
}
```

## Alert
* Alert launches an alert dialog with specified title and message.
* Optionally, you can also specify a list of buttons.

Alert example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/App.js)
```javascript
// App.js
import {
  View,
  Alert,
  Button
} from 'react-native';
const logoImg = require('./assets/adaptive-icon.png');


export default function App() {

  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Button
        title='Alert'
        onPress={() => Alert.alert('Invalid data!')}
      />
       <Button
        title='Alert 2'
        onPress={() => Alert.alert('Invalid data!', 'Alert message')}
      /> 
       <Button
        title='Alert 3'
        onPress={() => Alert.alert('Invalid data!', 'Alert message', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel pressed')
          },
          {
            text: 'OK',
            onPress: () => console.log('Ok pressed')
          }
        ])}
      />
    </View>
  );
}
```

## Custom components
Create component:<br>
[Green.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/components/Greet.js)
```javascript
// components/Greet.js
import { View, Text } from 'react-native';

export default function Greet({ name }) {
  return (
    <View>
      <Text>Hello, {name}</Text>
    </View>
  );
}
```

Add component to app:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native/CoreComponents/App.js)
```javascript
// App.js
import {
  View,
} from 'react-native';
import Greet from './components/Greet';
const logoImg = require('./assets/adaptive-icon.png');


export default function App() {

  return (
    <View style={{flex: 1, backgroundColor: 'plum', padding: 60}}>
      <Greet name='Bruce Wayne' />
      <Greet name='Clark Kent' />
    </View>
  );
}
```

