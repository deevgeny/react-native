# Layout Project

## Contents
* [Create new expo app project](#create-new-expo-app-project)
* [Code setup](#code-setup)
* [Flex](#flex)
* [Flex direction](#flex-direction)
* [Justify content](#justify-content)
* [Align items](#align-items)
* [Align self](#align-self)
* [Flex wrap](#flex-wrap)
* [Align conent](#align-content)
* [Gap](#gap)
* [Flex basis](#flex-basis)
* [Flex shrink](#flex-shrink)
* [Flex grow](#flex-grow)
* [Relative and absolute layout](#relative-and-absolute-layout)

## Create new expo app project
```sh
# Install lates version (sdk-49)
npx create-expo-app@latest Layout --template blank@sdk-49

# Fix environment variable
export ANDROID_HOME='/home/evgeny/Android/Sdk'
```

## Code setup
Box component:<br>
[Box.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/components/Box.js)<br>
```javascript
// ./components/Box.js
import { View, Text, StyleSheet } from 'react-native';

export default function Box({children, style}) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  }
});
```

Application file:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: '#8e9b00'}}>Box 1</Box>
      <Box style={{backgroundColor: '#b65d1f'}}>Box 2</Box>
      <Box style={{backgroundColor: '#1c4c56'}}>Box 3</Box>
      <Box style={{backgroundColor: '#ab9156'}}>Box 4</Box>
      <Box style={{backgroundColor: '#6b0803'}}>Box 5</Box>
      <Box style={{backgroundColor: '#1c4c56'}}>Box 6</Box>
      <Box style={{backgroundColor: '#b95f21'}}>Box 7</Box>
      <Box />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 6,
    borderColor: 'red'

  },
});
```

## Flex
* View component is flex by default.
* flex - define how much of a view will fill the screen along the main axis.
* Accepts integer value greater than or equal to 0.

Flex example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
flex: 1 / flex: 3 = 25% of space / 75% of space
```javascript
// App.js
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: '#8e9b00', flex: 1}}>Box 1</Box>
      <Box style={{backgroundColor: '#b65d1f', flex: 3}}>Box 2</Box>
      <Box style={{backgroundColor: '#1c4c56'}}>Box 3</Box>
      <Box style={{backgroundColor: '#ab9156'}}>Box 4</Box>
      <Box style={{backgroundColor: '#6b0803'}}>Box 5</Box>
      <Box style={{backgroundColor: '#1c4c56'}}>Box 6</Box>
      <Box style={{backgroundColor: '#b95f21'}}>Box 7</Box>
      <Box />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 6,
    borderColor: 'red'

  },
});
```

## Flex direction
* flexDirection - defines direction flow of nested components.
* Values - column (default), column-reverse, row, row-reverse.
* Main axis - vertical (top to bottom).
* Cross axis - horisontal (left to right).

flexDirection example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    borderWidth: 6,
    borderColor: 'red'

  },
});
```

## Justify content
* justifyContent - defines the alignment along the main axis.
* Values - flex-start (default), flex-end, center, space-between, space-around, space-evenly.

justifyContent example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    borderWidth: 6,
    borderColor: 'red'

  },
});
```

## Align items
* alignItems - defines the default behavior for laying out flex items along the
container's cross-axis.
* Values - strech (default), flex-start, flex-end, center, baseline.

alignItems example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 6,
    borderColor: 'red'

  },
});
```

## Align self
* alignSelf is applied to individual items, allowing us to control the alignment
of each item independently.
* Values - strech (default), flex-start, flex-end, center, baseline, auto (inherits from parent component's alignItems).

alignSelf example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
...
<Box style={{backgroundColor: '#8e9b00', alighSelf: 'flex-start'}}>Box 1</Box>
...
```

## Flex wrap
* flexWrap allows us to control how flex items behave when there's limited
space within the container.
* Values - nowrap (default, overflows), wrap, wrap-reverse.

flexWrap example:
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
...
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 300,
    flexWrap: 'wrap',
    borderWidth: 6,
    borderColor: 'red'

  },
});
```

## Align content
* alignContent aligns lines of content along the cross axis.
* Multiple columns or rows must exist whithin the container.
* Values - flex-start (default), flex-end, center, stretch, space-between, space-around.

alignContent example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
...
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 300,
    alignContent: 'flex-end',
    borderWidth: 6,
    borderColor: 'red'

  },
});
```

## Gap
* Gap properties allows to manage spacing between rows and columns.
* rowGap - gap between rows.
* columnGap - gap between columns.
* gap - gap between rows and columns.

Gap example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
...
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 300,
    rowGap: 20,
    borderWidth: 6,
    borderColor: 'red'

  },
});
```

## Flex basis
* flexBasis - determines the initial size of a flex item before any extra space
in the container is distributed.
* width or height - determines fixed size.


flexBasis example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
...
// Compare difference between flexBases and heignt
<Box style={{backgroundColor: '#b65d1f' flexBasis: 140, flex: 1 }}>Box 2</Box>
<Box style={{backgroundColor: '#1c4c56' height: 140, flex: 1}}>Box 3</Box>
...
```

## Flex shrink
* flexShrink - determines how children within a container shrink along the main
axis when their combined size exceeds the container's size.
* Values - integers greater or equal to 0 (0 is default).

flexShrink example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: '#8e9b00', flexShrink: 1}}>Box 1</Box>
      <Box style={{backgroundColor: '#b65d1f', flexShrink: 2}}>Box 2</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: 300,
    borderWidth: 6,
    borderColor: 'red'

  },
});
```

## Flex grow
* flexGrow - determines how much space an item should occupy inside a flex
container when there is extra space available.
* Value - integer greater or equal to 0 (0 is default).

flex vs flexGrow
* flex: positive number also sets flexGrow: positive number, flexShrink: 1, flexBasis: 0

flexGrow example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: '#8e9b00', flexGrow: 1}}>Box 1</Box>
      <Box style={{backgroundColor: '#b65d1f', flexGrow: 2}}>Box 2</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // apply to all
    // flexGrow: 1
    borderWidth: 6,
    borderColor: 'red'

  },
});
```



## Relative and absolute layout
The layout is based on the **position** property (relative, absolute), which
defines how an element is positioned within its parent container.

Relative layout:
* Element is positioned according to the normal flow of the layout.
* It remains in its original position and can be offset from that position
using the top, right, bottom, and left values.
* This offset does not affect the positioning of any sibling or parent elements.
* Used in adaptive layouts.

Absolute layout:
* Element does not participate in the normal flow of the layout.
* It is instead laid out independently of its siblings.
* The position of the element is determined by the top, right, bottom, and
left values, which specify specific coordinates relative to its parent
container.
* Used in fixed layouts (animation, strict coordinates position etc.)

Relative and absolute layout example:<br>
[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/App.js)<br>
```javascript
// App.js
import { StyleSheet, Text, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{backgroundColor: '#8e9b00', top: 75, left: 75}}>Box 1</Box>
      <Box style={{backgroundColor: '#b65d1f'}}>Box 2</Box>
      <Box style={{backgroundColor: '#1c4c56'}}>Box 3</Box>
      <Box style={{
        backgroundColor: '#ab9156',
        top: 100,
        left: 100,
        position: 'absolute'
      }}>Box 4</Box>
      <Box style={{backgroundColor: '#6b0803'}}>Box 5</Box>
      <Box style={{backgroundColor: '#1c4c56'}}>Box 6</Box>
      <Box style={{backgroundColor: '#b95f21'}}>Box 7</Box>
      <Box />
    </View>
  );
}
```

[App.js file](https://github.com/deevgeny/react-tutorials/blob/main/react-native-tutorial/Layout/components/Box.js)<br>
```javascript
// ./components/Box.js
...
const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    padding: 20,
    width: 100,
    height: 100
  },
...
});
```

